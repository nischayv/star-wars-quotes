#!/usr/bin/env node

const chalk = require('chalk')
const pkg = require('./package.json')
const fn = require('./index')

if (process.argv.indexOf('-v') !== -1 || process.argv.indexOf('--version') !== -1) {
  return console.log(chalk.yellow(pkg.version))
}

console.log(chalk.yellow(fn()))
