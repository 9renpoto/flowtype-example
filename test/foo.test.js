import assert from 'assert'

import { sum } from '../src/foo'

describe('foo', function () {
  it('load', function () {
    assert(typeof sum === 'function')
    assert(sum(1, 2) === 3)
  })
})
