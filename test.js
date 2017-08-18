import test from 'ava'
import fn from './index'
import quotes from './quotes'

test('Quote Generator Test', function (t) {
  t.is(quotes.includes(fn()), true, 'should contain the generated quote')
})
