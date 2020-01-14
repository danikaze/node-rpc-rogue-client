const { join } = require('path');
const { BannerPlugin, DefinePlugin } = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = env => {
  const isProduction = env === 'production';
  const defines = {
    NODE_ENV: isProduction ? 'production' : 'development',
    IS_PRODUCTION: isProduction,
  };

  return {
    mode: isProduction ? 'production' : 'development',

    devtool: isProduction ? undefined : 'inline-source-map',

    entry: {
      index: './src/index.ts',
    },

    output: {
      path: join(__dirname, 'app'),
    },

    watch: !isProduction,

    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'ts-loader',
            options: {
              configFile: 'tsconfig.json',
            },
          },
        },
      ],
    },

    plugins: [
      new DefinePlugin(
        (() => {
          const c = { ...defines };
          Object.keys(c).forEach(k => {
            c[k] = JSON.stringify(c[k]);
          });
          return c;
        })()
      ),
      new BannerPlugin({
        raw: true,
        banner: `const __non_webpack_module__ = module;`,
      }),
    ].concat(isProduction ? [new CleanWebpackPlugin()] : []),

    target: 'node',
    node: {
      __dirname: false,
      __filename: false,
    },

    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.json'],
      plugins: [new TsconfigPathsPlugin({ configFile: 'tsconfig.json' })],
    },

    optimization: {
      minimize: isProduction,
      namedModules: !isProduction,
    },

    stats: {
      children: false,
      modules: false,
      children: false,
    },
  };
};
