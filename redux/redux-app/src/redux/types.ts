export interface Action {
  type: string
  payload?: any
}

export interface Reducer {
  (state: any, action: Action): any
}
