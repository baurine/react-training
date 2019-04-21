import React from 'react'

type Props = {
  cnt: number
  onInc: () => void
  onDec: () => void
  onReset: () => void
}

export default class Counter6 extends React.Component<Props> {
  incCount = () => {
    this.props.onInc()
  }

  decCount = () => {
    this.props.onDec()
  }

  resetCount = () => {
    this.props.onReset()
  }

  render() {
    return (
      <div style={{display: 'flex', margin: '10px'}}>
        <button onClick={this.decCount}>-</button>
        <span style={{padding: '10px', fontSize: '20px'}}>{this.props.cnt}</span>
        <button onClick={this.incCount}>+</button>
        <button onClick={this.resetCount}> RESET </button>
        <span>(Counter 6)</span>
      </div>
    )
  }
}
