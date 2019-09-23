/* @flow */
import assert from 'assert'
import { describe, it } from 'mocha'

import { sum } from '../src/foo'

describe('foo', function () {
  it('load', function () {
    assert(typeof sum === 'function')
    assert(sum(1, 2) === 3)
  })
})
