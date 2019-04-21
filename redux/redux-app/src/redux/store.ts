import { Reducer, Action } from "./types";
import cnt from "./reducers/cnt";

export function createStore(initialState: any, reducer: Reducer) {
  let state = initialState || {}
  let listeners: (()=>void)[] = []

  function subscribe(listener: () => void) {
    listeners.push(listener)
    return () => listeners.filter(item => item != listener)
  }

  function notifyListeners() {
    listeners.forEach(item => item())
  }

  function getState() {
    return state
  }

  function incCnt() {
    state = {
      ...state,
      cnt: state.cnt + 1
    }
    notifyListeners()
  }

  function decCnt() {
    state = {
      ...state,
      cnt: state.cnt - 1
    }
    notifyListeners()
  }

  function dispatch(action: Action) {
    console.log('=======')
    console.log(state)
    console.log(action)
    state = reducer(state, action)
    notifyListeners()
  }

  return {
    getState,
    incCnt,
    decCnt,
    subscribe,
    dispatch
  }
}

const store = createStore({ cnt: 6 }, cnt)

export default store
