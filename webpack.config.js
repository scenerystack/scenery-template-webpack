import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath( import.meta.url );
const __dirname = path.dirname( __filename );

export default {
  entry: './src/main.ts',
  output: {
    filename: 'main.js',
    path: path.resolve( __dirname, 'dist' ),
    clean: true,
  },
  mode: 'production',
  resolve: {
    extensions: [ '.ts', '.js' ],
    extensionAlias: {
      '.js': ['.js', '.ts'],
    },
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin( {
      template: 'index.html',
      filename: 'index.html',
    } ),
  ],
};