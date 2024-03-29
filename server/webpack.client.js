const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');


const config = {
    // Tell webpack the  root file of our client application
    // Сообщаем вебпаку корневой файл нашего клиентсокго приложения
    entry: './src/client/client.js',

    // Tell webpack where to put the output file that is generated
    // Сообщаем вебпаку куда поместить сгенерированный выходной бандл-пакет
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
    },
};

module.exports = merge(baseConfig, config);
