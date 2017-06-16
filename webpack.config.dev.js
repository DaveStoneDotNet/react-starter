import webpack           from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import autoprefixer      from 'autoprefixer';
import path              from 'path';

// devtool:                                        - More info: https://webpack.github.io/docs/build-performance.html#sourcemaps and https://webpack.github.io/docs/configuration.html#devtool
// entry:  './src/webpack-public-path'             - Must be the first entry to properly set the public path
// entry:  path.resolve(__dirname, 'src/index.js') - Defining path seems necessary for this to work consistently on Windows machines.
// output: path.resolve(__dirname, 'dist')         - Note: Physical files are only output by the production build task `npm run build`.
// target: 'web'                                   - Necessary per https://webpack.github.io/docs/testing.html#compile-and-test
// webpack.DefinePlugin                            - Tells React to build in either dev or prod modes. https://facebook.github.io/react/downloads.html (See bottom)
// HtmlWebpackPlugin                               - Create HTML file that includes references to bundled CSS and JS.
// webpack.LoaderOptionsPlugin - noInfo            - Set to false to see a list of every file being bundled.

// 'webpack' is fed via a configuration object.
// You only need to understand Four Core Concepts: entry, output, loaders, and plugins.

// 1) Entry
//    webpack creates a graph of all of your application's dependencies. The starting point of this graph is known as an entry point. 
//    The entry point tells webpack where to start and follows the graph of dependencies to know what to bundle.
//    You can think of your application's entry point as the contextual root or the first file to kick off your app.
// 
// 2) Output
//    Once you've bundled all of your assets together, you still need to tell webpack WHERE to bundle your application. 
//    The webpack output property tells webpack how to treat bundled code.
// 
// 3) Loaders
//    The goal is to have all of the assets in your project be webpack's concern and not the browser's. 
//    (This doesn't mean that they all have to be bundled together). webpack treats every file (.css, .html, .scss, .jpg, etc.) as a module. 
//    However, webpack only understands JavaScript.
// 
// 4) Plugins
//    Since Loaders only execute transforms on a per-file basis, plugins are most commonly used (but not limited to) performing actions and 
//    custom functionality on "compilations" or "chunks" of your bundled modules (and so much more).
//

export default {
  resolve: {
             extensions: ['*', '.js', '.jsx', '.json']
           },
  devtool: 'eval-source-map', 
  entry:   [
             './src/webpack-public-path', 
             'react-hot-loader/patch',
             'webpack-hot-middleware/client?reload=true',
             path.resolve(__dirname, 'src/index.js')
           ],
  target:  'web', 
  output:  {
             path:       path.resolve(__dirname, 'dist'), 
             publicPath: '/',
             filename:   'bundle.js'
           },
  plugins: [
             new webpack.DefinePlugin({
                                        'process.env.NODE_ENV': JSON.stringify('development'), 
                                        __DEV__:                true
                                      }),
             new webpack.HotModuleReplacementPlugin(),
             new webpack.NoEmitOnErrorsPlugin(),
             new HtmlWebpackPlugin({
                                     template: 'src/index.ejs',
                                     minify:   {
                                                 removeComments: true,
                                                 collapseWhitespace: true
                                               },
                                     inject:   true
                                   }),
             new webpack.LoaderOptionsPlugin({
                                               minimize: false,
                                               debug:    true,
                                               noInfo:   true, 
                                               options: {
                                                          sassLoader: {
                                                                        includePaths: [path.resolve(__dirname, 'src', 'scss')]
                                                                      },
                                                          context:    '/',
                                                          postcss:    () => [autoprefixer],
                                                        }
                                             })
           ],
  module:  {
             rules: [
                      { test: /\.jsx?$/,                               loader: 'babel-loader', exclude: /node_modules/ },
                      { test: /\.eot(\?v=\d+.\d+.\d+)?$/,              loader: 'file-loader' },
                      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
                      { test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/,           loader: 'url-loader?limit=10000&mimetype=application/octet-stream' },
                      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,            loader: 'url-loader?limit=10000&mimetype=image/svg+xml' },
                      { test: /\.(jpe?g|png|gif)$/i,                   loader: 'file-loader?name=[name].[ext]' },
                      { test: /\.ico$/,                                loader: 'file-loader?name=[name].[ext]' },
                      { test: /(\.css|\.scss|\.sass)$/,                loaders: ['style-loader', 'css-loader?sourceMap', 'postcss-loader', 'sass-loader?sourceMap'] }
                    ]
           }
};
