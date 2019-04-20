import React from 'react'

type HelloProps = {
  name: string
}

class HelloMessage2 extends React.Component<HelloProps> {
  render() {
    return (
      <div>Hello {this.props.name}</div>
    )
  }
}

export default HelloMessage2
