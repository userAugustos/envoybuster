
export interface DBdata{
  movies: Movies,
  genries: Genries
}

export interface Genries {
  id: number,
  name: string,
}

export interface Movies {
  id: number;
  name: string,
  synopsis: string,
  image?: string;
  genres: Array<string>,
  release?: string, 
  language: string,
  subtitled: boolean,
  director?: string,
  IMDB?: string,
  rating?: number
}

export const patchBody = {
  name: '',
  synopsis: '',
  genres: [],
  release: '', 
  language: '',
  subtitled: '',
  director: '',
  IMDB: '',
  rating: '',
  image: ''
}