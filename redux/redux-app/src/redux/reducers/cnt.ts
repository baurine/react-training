import { Action } from "../types";

export default function cnt(state: any, action: Action) {
  switch(action.type) {
    case 'INC_CNT':
      return {
        ...state,
        cnt: state.cnt + 1
      }
    case 'DEC_CNT':
      return {
        ...state,
        cnt: state.cnt - 1
      }
    case 'RESET_CNT':
      return {
        ...state,
        cnt: action.payload
      }
    default:
      return state
  }
}
