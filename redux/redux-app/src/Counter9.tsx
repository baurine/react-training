import React from 'react'
import connect2 from './redux/connect2'

type Props = {
  cnt: number
  onInc: () => void
  onDec: () => void
  onReset: () => void
  onDelayInc: () => void
  onDelayIncBySaga: () => void
}

class Counter9 extends React.Component<Props> {
  incCount = () => {
    this.props.onInc()
  }

  decCount = () => {
    this.props.onDec()
  }

  resetCount = () => {
    this.props.onReset()
  }

  delayIncCount = () => {
    this.props.onDelayInc()
  }

  render() {
    return (
      <div style={{display: 'flex', margin: '10px'}}>
        <button onClick={this.decCount}>-</button>
        <span style={{padding: '10px', fontSize: '20px'}}>{this.props.cnt}</span>
        <button onClick={this.incCount}>+</button>
        <button onClick={this.resetCount}> RESET </button>
        <button onClick={this.delayIncCount}> Delay Inc (thunk) </button>
        <button onClick={() => this.props.onDelayIncBySaga() }> Delay Inc (saga) </button>
        <span>(Counter 9)</span>
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

function delayIncCount(dispatch: any) {
  setTimeout(() => {
    dispatch({type: 'INC_CNT'})
  }, 1000)
}

const mapDispatchToProp = (dispatch: any) => {
  return {
    onInc: () => dispatch({type: 'INC_CNT'}),
    onDec: () => dispatch({type: 'DEC_CNT'}),
    onReset: () => dispatch({type: 'RESET_CNT', payload: 1000}),
    onDelayInc: () => dispatch(delayIncCount),
    onDelayIncBySaga: () => dispatch({type: 'DELAY_INC_CNT'})
  }
}

export default connect2(mapStatetoProps, mapDispatchToProp)(Counter9)
