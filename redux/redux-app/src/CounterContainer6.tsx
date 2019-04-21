import React from 'react'
import store from './redux/store'
import Counter6 from './Counter6'

export default class CounterContainer6 extends React.Component {
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
    return <Counter6 cnt={cnt} onInc={this.incCount} onDec={this.decCount} onReset={this.resetCount}/>
  }
}
