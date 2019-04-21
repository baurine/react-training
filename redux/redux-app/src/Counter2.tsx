import React from 'react'

type Props = {
  cnt: number
  onInc: () => void
}

export default class Counter2 extends React.Component<Props> {
  incCount = () => {
    this.props.onInc()
  }

  render() {
    return (
      <div style={{display: 'flex', margin: '10px'}}>
        <span style={{padding: '10px', fontSize: '20px'}}>{this.props.cnt}</span>
        <button onClick={this.incCount}>+</button>
        <span>(Counter 2)</span>
      </div>
    )
  }
}
