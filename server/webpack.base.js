module.exports = {
    // Tell webpack to run babel on every file it runs through
    // Сообщаем вебпаку запускать babel для каждого файла, через который вебпак проходит
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        'react',
                        'stage-0',
                        ['env', { targets: { browser: ['last 2 versions'] } }]
                    ],
                },
            },
        ],
    },
}
