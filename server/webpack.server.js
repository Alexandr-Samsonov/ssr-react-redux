const path = require('path');
const merge = require('webpack-merge');
const webpackNodeExternals = require('webpack-node-externals');
const baseConfig = require('./webpack.base.js');


const config = {
    // Inform  webpack that we're building a bundle for nodeJS, rather than for the browser
    // Сообщаем вебпаку, что мы создаем бандл-пакет для Ноды, а не для Браузера
    target: 'node',

    // Tell webpack the  root file of our server application
    // Сообщаем вебпаку корневой файл нашего серверного приложения
    entry: './src/index.js',

    // Tell webpack where to put the output file that is generated
    // Сообщаем вебпаку куда поместить сгенерированный выходной бандл-пакет
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
    },

    externals: [webpackNodeExternals()],
};

module.exports = merge(baseConfig, config);
