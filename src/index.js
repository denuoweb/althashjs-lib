var althashjs = require('bitcoinjs-lib')

Object.assign(althashjs.networks, require('./networks'))

althashjs.utils = require('./utils')

module.exports = althashjs
