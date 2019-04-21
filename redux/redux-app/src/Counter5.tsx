import React from 'react'
import store from './redux/store'

export default class Counter5 extends React.Component {
  subscription: any

  componentDidMount() {
    this.subscription = store.subscribe(()=>this.forceUpdate())
  }

  componentWillUnmount() {
    this.subscription()
  }

  incCount = () => {
    store.dispatch({
      type: 'INC_CNT'
    })
  }

  decCount = () => {
    store.dispatch({
      type: 'DEC_CNT'
    })
  }

  resetCount = () => {
    store.dispatch({
      type: 'RESET_CNT',
      payload: 100
    })
  }

  render() {
    const { cnt } = store.getState()

    return (
      <div style={{display: 'flex', margin: '10px'}}>
        <button onClick={this.decCount}>-</button>
        <span style={{padding: '10px', fontSize: '20px'}}>{cnt}</span>
        <button onClick={this.incCount}>+</button>
        <button onClick={this.resetCount}> RESET </button>
        <span>(Counter 5)</span>
      </div>
    )
  }
}
