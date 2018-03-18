/* @flow */
import React, { Component } from 'react'

export class App extends Component<{}, void> {
  render () {
    return <div>{'success'}</div>
  }
}

type Props = {
  children: Function
}

type State = { hasError: boolean }

export class AppFailedOver extends Component<Props, State> {
  constructor (props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  componentDidCatch (_: any, info: any) {
    this.setState({ hasError: true })
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>
    }
    return this.props.children
  }
}
