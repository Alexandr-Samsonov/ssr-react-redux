import React from 'react';
import { Helmet } from 'react-helmet';


const HomePage = () => {
    const head = (
        <Helmet>
            <title>Home</title>
            <meta property="og:title" content="Home" />
        </Helmet>
    )

    return (
        <div>
            {head}
            <div className="center-align" style={{ marginTop: '200px' }}>
                <h3>Welcome</h3>
                <p>Check out these awesome features</p>
            </div>
        </div>
    );
};

export default {
    component: HomePage
};
