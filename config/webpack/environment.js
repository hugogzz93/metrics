const { environment } = require('@rails/webpacker')
const FlowWebpackPlugin = require('flow-webpack-plugin')

environment.plugins.prepend(
  'Flow',
  new FlowWebpackPlugin()
)

module.exports = environment
