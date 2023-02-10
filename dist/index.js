
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./reactjs-s4y.cjs.production.min.js')
} else {
  module.exports = require('./reactjs-s4y.cjs.development.js')
}
