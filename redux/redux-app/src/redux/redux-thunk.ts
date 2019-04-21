export default function addReduxThunkMiddleware(store: any) {
  const oldDispatch = store.dispatch
  store.dispatch = function(action: any) {
    console.log(typeof action)
    if (typeof action === 'function') {
      action(oldDispatch)
    } else {
      oldDispatch(action)
    }
  }
}
