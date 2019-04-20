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
    // this.setState(prevState => ({cnt: prevState.cnt+1}))
    // this.updateDocumentTitle()
  }

  decCount = () => {
    this.setState({cnt: this.state.cnt - 1})
    // this.setState(prevState => ({cnt: prevState.cnt - 1}))
    // this.updateDocumentTitle()
  }

  updateDocumentTitle() {
    document.title = `${this.state.cnt}`
  }

  componentDidMount() {
    this.updateDocumentTitle()
  }

  componentDidUpdate() {
    this.updateDocumentTitle()
  }

  render() {
    const { cnt } = this.state

    return (
      <div style={{display: 'flex', margin: '10px'}}>
        <button onClick={this.decCount}>-</button>
        <span style={{padding: '10px', fontSize: '20px'}}>{cnt}</span>
        <button onClick={this.incCount}>+</button>
      </div>
    )
  }
}
