import React from 'react';
import Counter from './Counter';

export default class CounterContainer extends React.Component {
  render() {
    return (
      <div>
        <Counter initialCnt={5}/>
        <Counter initialCnt={6}/>
      </div>
    )
  }
}
