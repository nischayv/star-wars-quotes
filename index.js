const quotes = require('./quotes')

export default function () {
  return quotes[Math.floor(Math.random() * quotes.length)]
}
