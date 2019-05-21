module.exports = function babel(api) {
    api.cache(true)

    return {
        presets: [
            [
                '@babel/preset-env',
                {
                    targets: {
                        node: 'current',
                        chrome: '69'
                    }
                }
            ],
            '@babel/preset-react'
        ],
        plugins: [
            [
                '@babel/plugin-proposal-decorators',
                {
                    legacy: true
                }
            ],
            [
                '@babel/plugin-proposal-class-properties',
                {
                    loose: true
                }
            ],
            '@babel/plugin-proposal-object-rest-spread',
            '@babel/plugin-transform-classes',
            'react-hot-loader/babel'
        ]
    }
}
