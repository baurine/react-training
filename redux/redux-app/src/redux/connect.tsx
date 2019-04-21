import React from 'react'
import store from './store'

export default function connect(mapStateToProps: (state: any) => any, mapDispatchToProps: (dispatch: any) => any) {
  return function(MyComponent: any) {
    class Container extends React.Component {
      subscription: any
    
      componentDidMount() {
        this.subscription = store.subscribe(()=>this.forceUpdate())
      }
    
      componentWillUnmount() {
        this.subscription()
      }

      render() {
        const myState = mapStateToProps(store.getState())
        const myActions = mapDispatchToProps(store.dispatch)
        return <MyComponent {...myState} {...myActions} {...this.props}/>
      }
    }
    return Container
  }
}
