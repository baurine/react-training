import React from 'react'
import { connect } from 'dva'
import { IPeopleWithFav } from '../types'

type Props = {
  persons: IPeopleWithFav[]

  dispatch: any
}

class SwPersonsFav extends React.Component<Props> {
  removeFavPerson = (person: IPeopleWithFav) => {
    this.props.dispatch({
      type: 'persons/unFavPerson',
      payload: { name: person.name }
    })
  }

  render() {
    const { persons } = this.props
    return (
      <div>
        <h2>Favorited SW Perons</h2>
        <ul>
          { persons.filter(item => item.favorited).map(person =>
              <li key={person.name}>
                <span>{person.name}</span>
                <button onClick={()=>this.removeFavPerson(person)}>
                  remove
                </button>
              </li>) }
        </ul>
      </div>
    )
  }
}

////////////////////

function mapStateToProps(state: any) {
  return {
    persons: state.persons.allPersons
  }
}

// connect() 会把 store.dispatch 作为 props 传递给包裹的 component
export default connect(mapStateToProps)(SwPersonsFav)
