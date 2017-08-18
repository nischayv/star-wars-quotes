const quotes = require('./quotes')

module.exports = function () {
  return quotes[Math.floor(Math.random() * quotes.length)]
}
