import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchAdmins } from '../actions';
import requireAuth from '../components/hocs/requireAuth';
import { Helmet } from 'react-helmet';


class AdminsListPage extends Component {
    componentDidMount() {
        this.props.fetchAdmins();
    }

    renderAdmins() {
        return this.props.admins.map(admin => {
            return <li key={admin.id}>{admin.name}</li>
        });
    }

    head() {
        return (
            <Helmet>
                <title>Admins</title>
                <meta property="og:title" content="Admins" />
            </Helmet>
        );
    }

    render() {
        return (
            <div>
                {this.head()}
                <h3>Protected list of admins</h3>
                <ul>{this.renderAdmins()}</ul>
            </div>
        );
    }
}

function mapStateToProps({ admins }) {
    return { admins };
}

export default {
   component: connect(mapStateToProps, { fetchAdmins })(
       requireAuth(AdminsListPage)
   ),
   loadData: ({ dispatch }) => dispatch(fetchAdmins()),
};
