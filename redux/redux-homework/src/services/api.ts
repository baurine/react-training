import { IPeopleList } from "../types";

const SW_PEOPLE_API = 'https://swapi.co/api/people/'

export function querySwPersons() {
  return fetch(SW_PEOPLE_API)
    .then(res => res.json())
    .then(data => (data as IPeopleList).results)
}
