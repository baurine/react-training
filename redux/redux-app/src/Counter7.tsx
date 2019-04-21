import React from 'react'
import connect from './redux/connect'

type Props = {
  cnt: number
  onInc: () => void
  onDec: () => void
  onReset: () => void
}

class Counter7 extends React.Component<Props> {
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
        <span>(Counter 7)</span>
      </div>
    )
  }
}

/////////

const mapStatetoProps = (state: any) => {
  return {
    cnt: state.cnt
  }
}

const mapDispatchToProp = (dispatch: any) => {
  return {
    onInc: () => dispatch({type: 'INC_CNT'}),
    onDec: () => dispatch({type: 'DEC_CNT'}),
    onReset: () => dispatch({type: 'RESET_CNT', payload: 100})
  }
}

export default connect(mapStatetoProps, mapDispatchToProp)(Counter7)
