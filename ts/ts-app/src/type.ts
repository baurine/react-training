export interface IPeopleList {
  count: number
  next: string
  previous: string | null
  results: IPeople[]
}

export interface IPeople {
  name: string
  homeworld: string
}

export interface IPlanet {
  name: string
  population: string
}
