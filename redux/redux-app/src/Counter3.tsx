import React from 'react'

type Props = {
  cnt: number
  onDec: () => void
}

export default class Counter3 extends React.Component<Props> {
  decCount = () => {
    this.props.onDec()
  }

  render() {
    return (
      <div style={{display: 'flex', margin: '10px'}}>
        <span style={{padding: '10px', fontSize: '20px'}}>{this.props.cnt}</span>
        <button onClick={this.decCount}>-</button>
        <span>(Counter 3)</span>
      </div>
    )
  }
}
