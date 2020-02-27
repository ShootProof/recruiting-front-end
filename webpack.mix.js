let mix = require('laravel-mix')
const HtmlWebpackPlugin = require('html-webpack-plugin')

mix
  .babelConfig({
    presets: ['@vue/babel-preset-jsx'],
  })
  .ts('src/react/App.tsx', '/dist/react-app.js')
  .js('src/vue/App', '/dist/vue-app.js')

mix.webpackConfig({
  output: {
    publicPath: '',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html',
    }),
  ],
})
