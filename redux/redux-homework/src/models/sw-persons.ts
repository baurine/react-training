import { Model } from 'dva'
import { IPeopleWithFav, IPeople } from '../types'
import { querySwPersons } from '../services/api'

export type SwPersonsState = {
  allPersons: IPeopleWithFav[]
}

const initialState: SwPersonsState = {
  allPersons: []
}

const persons: Model = {
  namespace: 'persons',

  state: initialState,

  effects: {
    *queryPersons({ payload }, { call, put }) {
      const persons = yield call(querySwPersons)
      const personsWithFav: IPeopleWithFav[] = (persons as IPeople[]).map(item => ({...item, favorited: false}))
      yield put({
        type: 'savePersons',
        payload: personsWithFav
      })
    }
  },

  reducers: {
    savePersons(state: SwPersonsState, { payload }): SwPersonsState {
      return {
        ...state,
        allPersons: payload
      }
    },
    favPerson(state: SwPersonsState, { payload }): SwPersonsState {
      const { name } = payload
      return {
        ...state,
        allPersons: state.allPersons.map(item => item.name === name ? ({...item, favorited: true}) : item)
      }
    },
    unFavPerson(state: SwPersonsState, { payload }): SwPersonsState {
      const { name } = payload
      return {
        ...state,
        allPersons: state.allPersons.map(item => item.name === name ? ({...item, favorited: false}) : item)
      }
    }
  }
}

export default persons
