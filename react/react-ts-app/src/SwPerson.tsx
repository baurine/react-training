import React from 'react'

type Props = {
  name: string
}

export interface IPeopleList {
  count: number
  next: string
  previous: string | null
  results: IPeople[]
}

export interface IPeople {
  name: string
  height: string
  homeworld: string
}

export interface IPlanet {
  name: string
  population: string
}

type State = {
  person: IPeople | null
  planet: IPlanet | null
  personExist: boolean
}

const SW_PEOPLE_API = 'https://swapi.co/api/people/'

export default class SwPerson extends React.Component<Props, State> {
  readonly state: State = {
    person: null,
    planet: null,
    personExist: true
  }

  componentDidMount() {
    this.queryPerson(this.props.name)
    this.updateDocumentTitle()
  }

  componentDidUpdate() {
    this.updateDocumentTitle()
  }

  updateDocumentTitle() {
    const { name } = this.props
    const { planet } = this.state
    let title = planet ? `${name} - ${planet.name}` : name
    document.title = title
  }

  queryPerson(name: string) {
    fetch(SW_PEOPLE_API)
      .then(res => res.json())
      .then(persons => (persons as IPeopleList).results.find(item => item.name === name))
      .then(person => {
        if (!person) {
          this.setState({personExist: false})
        } else {
          this.setState({personExist: true, person})
        }
      })
      .catch(err => {
        console.log(err)
        this.setState({personExist: false})
      })
  }

  queryPlanet(planetUrl: string) {
    fetch(planetUrl)
      .then(res => res.json())
      .then(planet => this.setState({planet}))
  }

  render() {
    const { person, planet, personExist } = this.state
    if (!personExist) {
      return <p>Not found this guy!</p>
    }

    if (person) {
      return (
        <div>
          <p>Name: {person.name}</p>
          <p>Height: {person.height}</p>
          <button onClick={()=>this.queryPlanet(person.homeworld)}>See my homeworld</button>

          {
            planet &&
            <div>
              <p>Homeworld name: {planet.name}</p>
              <p>Homeworld population: {planet.population}</p>
            </div>
          }
        </div>
      )
    }

    return <div>Loading...</div>
  }
}
