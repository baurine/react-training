import React from 'react'

type State = {
  width: number
}

export default class WindowWidthViewer extends React.Component<{}, State> {
  readonly state: State = {
    width: 0
  }

  resizeHandler = () => {
    this.setState({width: window.innerWidth})
  }

  componentDidMount() {
    this.resizeHandler()

    window.addEventListener('resize', this.resizeHandler)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeHandler)
  }

  render() {
    const { width } = this.state

    return (
      <div style={{margin: '10px', fontSize: '24px'}}>
        { width }
      </div>
    )
  }
}
