import React from 'react'

interface CatsRes {
  statusCode: number
  data: {
    name: string
    email: string
    pics: string[]
  }
}

type State = {
  catUrl: string
}

export default class CuteCat extends React.Component<{}, State> {
  readonly state: State = {
    catUrl: ''
  }

  componentDidMount() {
    const apiUrl = 'http://www.mocky.io/v2/5cb45b43330000921711b9c9'
    fetch(apiUrl)
      .then(res => res.json())
      .then(catsRes => (catsRes as CatsRes).data.pics[0])
      .then(catUrl => this.setState({catUrl}))
  }

  render() {
    const { catUrl } = this.state

    return (
      catUrl ?
      <img width='600' src={catUrl}/> :
      'miao~'
    )
  }
}
