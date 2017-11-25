/* @flow */
import React from 'react'
import { create } from 'react-test-renderer'
import { App } from '../src'

describe('React', () => {
  test('Failed', () => {
    const tree = create(<App />)
    expect(tree.toJSON()).toMatchSnapshot()
  })
})
