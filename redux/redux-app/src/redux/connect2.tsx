import React from 'react'
import { StoreContext } from './StoreContext'

export default function connect2(mapStateToProps: (state: any) => any, mapDispatchToProps: (dispatch: any) => any) {
  return function(MyComponent: any) {
    class Container extends React.Component {
      subscription: any
      store: any
    
      componentDidMount() {
        this.subscription = this.store.subscribe(()=>this.setState({}))
      }

      componentWillUnmount() {
        this.subscription()
      }

      wrapComponnet(store: any) {
        console.log('store ===>')
        console.log(store)
        console.log(store.getState())
        this.store = store
        const myState = mapStateToProps(store.getState())
        const myActions = mapDispatchToProps(store.dispatch)
        return <MyComponent {...myState} {...myActions} {...this.props}/>
      }

      render() {
        return (
          <StoreContext.Consumer>
            {(store) => this.wrapComponnet(store)}
          </StoreContext.Consumer>
        )
      }
    }
    return Container
  }
}
