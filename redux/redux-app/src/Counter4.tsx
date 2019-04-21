import React from 'react'
import store from './redux/store'

export default class Counter4 extends React.Component {
  subscription: any

  componentDidMount() {
    this.subscription = store.subscribe(()=>this.forceUpdate())
  }

  componentWillUnmount() {
    this.subscription()
  }

  incCount = () => {
    store.incCnt()
  }

  decCount = () => {
    store.decCnt()
  }

  render() {
    const { cnt } = store.getState()

    return (
      <div style={{display: 'flex', margin: '10px'}}>
        <button onClick={this.decCount}>-</button>
        <span style={{padding: '10px', fontSize: '20px'}}>{cnt}</span>
        <button onClick={this.incCount}>+</button>
        <span>(Counter 4)</span>
      </div>
    )
  }
}
