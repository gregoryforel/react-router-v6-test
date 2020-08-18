const path = require('path')

// const WebpackBar = require('webpackbar');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const CracoAntDesignPlugin = require('craco-antd')
const CracoLessPlugin = require('craco-less')

module.exports = {
    // webpack: {
    //     plugins: [
    //         new WebpackBar({ profile: true }),
    //         ...(process.env.NODE_ENV === 'development'
    //             ? [new BundleAnalyzerPlugin({ openAnalyzer: false })]
    //             : []),
    //     ],
    // },
    plugins: [
        {
            options: {
                //   customizeTheme: getThemeVariables({
                //     dark: true,
                //   }),
                customizeThemeLessPath: path.join(
                    __dirname,
                    'src/customTheme.less'
                )
            },
            plugin: CracoAntDesignPlugin
        },
        {
            options: {
                cssLoaderOptions: {
                    modules: { localIdentName: '[local]_[hash:base64:5]' }
                }
            },
            plugin: CracoLessPlugin
        },
        {
            options: {
                cssLoaderOptions: {
                    modules: { localIdentName: '[local]_[hash:base64:5]' }
                },
                modifyLessRule: function(lessRule, context) {
                    lessRule.test = /\.(module)\.(less)$/
                    lessRule.exclude = path.join(__dirname, 'nsode_modules')
                    return lessRule
                }
            },
            plugin: CracoLessPlugin
        }
    ],
    webpack: {
        alias: {
            '@': path.resolve(__dirname, 'src/'),
            '@assets': path.resolve(__dirname, 'src/assets/'),
            '@components': path.resolve(__dirname, 'src/components/'),
            '@infrastructure': path.resolve(__dirname, 'src/infrastructure/'),
            '@screens': path.resolve(__dirname, 'src/screens/'),
            '@store': path.resolve(__dirname, 'src/store/'),
            '@styles': path.resolve(__dirname, 'src/styles/'),
            '@types': path.resolve(__dirname, 'src/types/')
        }
    }
}
