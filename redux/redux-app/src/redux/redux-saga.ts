export default function addReduxSagaMiddleware(store: any, sagas: any) {
  const oldDispatch = store.dispatch

  store.dispatch = function(action: any) {
    sagas(action, oldDispatch)

    oldDispatch(action)
  }
}
