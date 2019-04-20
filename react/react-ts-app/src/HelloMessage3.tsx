import React from 'react'

type HelloProps = {
  name: string
}

const HelloMessage3 = (props: HelloProps) => <div>Hello {props.name}</div>

export default HelloMessage3
