import React from 'react'

type HelloProps = {
  name: string
  onClickBtn: (str: string) => void
}

class HelloMessage4 extends React.Component<HelloProps> {
  render() {
    return (
      <div style={{display: 'flex'}}>
        <div>Hello {this.props.name}</div>
        <button onClick={() => this.props.onClickBtn(`Hello ${this.props.name}`)}>click</button>
      </div>
    )
  }
}

export default HelloMessage4
