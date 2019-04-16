const SW_PEOPLE_API = 'https://swapi.co/api/people/'

function getPersonPlanet(name) {
  return fetch(SW_PEOPLE_API)
           .then(res => res.json())
           .then(ret => ret.results.find(item => item.name === name))
           .then(person => {
             if (!person) {
               throw new Error('Not found')
             }
             return fetch(person.homeworld)
           })
           .then(res => res.json())
           .then(planet => {
             const { name, population } = planet
             return `${name} - ${population}`
           })
           .catch(err => err.message)
}

getPersonPlanet("Luke Skywalker").then(str => console.log(str))
getPersonPlanet("Baurine").then(str => console.log(str))
