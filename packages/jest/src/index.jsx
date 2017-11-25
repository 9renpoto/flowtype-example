/* @flow */
import React, { Component } from 'react'

export class App extends Component<{}, void> {
  render () {
    return <div>{'success'}</div>
  }
}

export class AppFailedOver extends Component<{}, void> {
  constructor (props) {
    super(props)
    this.state = { hasError: false }
  }

  componentDidCatch (_, info) {
    this.setState({ hasError: true })
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>
    }
    return this.props.children
  }
}
