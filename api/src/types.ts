
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
  genres_id: Array<string>,
  release?: string, 
  language: string,
  subtitled: boolean,
  director?: string,
  IMDB?: string,
  rating?: number
}

export const patchProps = {
  name: '',
  synopsis: '',
  genres_id: [],
  release: '', 
  language: '',
  subtitled: '',
  director: '',
  IMDB: '',
  rating: ''
}