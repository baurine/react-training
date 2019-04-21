export interface IPeople {
  name: string
  height: string
}

export interface IPeopleList {
  results: IPeople[]
}

export interface IPeopleWithFav extends IPeople {
  favorited: boolean
}
