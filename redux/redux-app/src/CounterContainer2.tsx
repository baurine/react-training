import React from 'react';
import Counter2 from './Counter2';
import Counter3 from './Counter3';

type Props = {
  initialCnt: number
}

type State = {
  cnt: number
}

export default class CounterContainer2 extends React.Component<Props, State> {
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
      <div>
        <Counter2 cnt={cnt} onInc={this.incCount}/>
        <Counter3 cnt={cnt} onDec={this.decCount}/>
      </div>
    )
  }
}
