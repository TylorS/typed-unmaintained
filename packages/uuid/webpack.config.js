module.exports = {
  // Do not pull in node dependencies for browser tests
  externals: [require('webpack-node-externals')()]
}
