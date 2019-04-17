import { IPeopleList, IPlanet } from "../type"

const SW_PEOPLE_API = 'https://swapi.co/api/people/'

function getPersonPlanet(name: string): Promise<string> {
  return fetch(SW_PEOPLE_API)
           .then(res => res.json())
           .then(ret => (ret as IPeopleList).results.find(item => item.name === name))
           .then(person => {
             if (!person) {
               throw new Error('Not found')
             }
             return fetch(person.homeworld)
           })
           .then(res => res.json())
           .then(planet => planetInfo(planet as IPlanet))
           .catch(err => err.message)
}

function planetInfo(planet: IPlanet): string {
  const { name, population } = planet
  return `${name} ${population}`
}

export { getPersonPlanet }
