import React from 'react'

type Props = {
  initialCnt: number
}

type State = {
  cnt: number
}

export default class Counter extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      cnt: props.initialCnt
    }
  }

  incCount = () => {
    this.setState({cnt: this.state.cnt + 1})
  }

  decCount = () => {
    this.setState({cnt: this.state.cnt - 1})
  }

  render() {
    const { cnt } = this.state

    return (
      <div style={{display: 'flex', margin: '10px'}}>
        <button onClick={this.decCount}>-</button>
        <span style={{padding: '10px', fontSize: '20px'}}>{cnt}</span>
        <button onClick={this.incCount}>+</button>
        <span>(Counter 1)</span>
      </div>
    )
  }
}
