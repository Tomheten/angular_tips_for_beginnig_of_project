// this example was taken from  https://alligator.io/angular/custom-webpack-config/
// the page of the custom-webpack-builders plugin https://github.com/just-jeb/angular-builders/tree/master/packages/custom-webpack

const MomentLocalesPlugin = require('moment-locales-webpack-plugin');
const RemovePlugin = require('remove-files-webpack-plugin');

module.exports = {
  plugins: [
    new MomentLocalesPlugin(),
    // new RemovePlugin({
    //   after: {
    //     exclude: [
    //       'dist/tmp/assets/_development'
    //     ]
    //   }
    // })
  ]
};
