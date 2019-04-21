import React from 'react'
import { connect } from 'dva'
import { IPeopleWithFav } from '../types'

type Props = {
  persons: IPeopleWithFav[]

  dispatch: any
}

class SwPersons extends React.Component<Props> {
  componentDidMount() {
    this.loadPersons()
  }

  loadPersons() {
    this.props.dispatch({
      type: 'persons/queryPersons'
    })
  }

  toggleFavPerson = (person: IPeopleWithFav) => {
    if (person.favorited) {
      this.props.dispatch({
        type: 'persons/unFavPerson',
        payload: { name: person.name }
      })
    } else {
      this.props.dispatch({
        type: 'persons/favPerson',
        payload: { name: person.name }
      })
    }
  }

  render() {
    const { persons } = this.props
    return (
      <div>
        <h2>SW Perons</h2>
        <ul>
          { persons.map(person =>
              <li key={person.name}>
                <span>{person.name}</span>
                <button onClick={()=>this.toggleFavPerson(person)}>
                  {person.favorited ? 'unfav' : 'fav'}
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

// connect() 会把 dispatch 作为 props 传递给包裹的 component
export default connect(mapStateToProps)(SwPersons)
