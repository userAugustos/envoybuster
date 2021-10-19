export const actions = {
  SET_MOVIES: "SET_MOVIES",
  REQ_MOVIES: "REQ_MOVIES",
  ADD_MOVIE: "ADD_MOVIE",
  REMOVE_MOVIE: "REMOVE_MOVIE",
  UPDATE_MOVIE: "UPDATE_MOVIE",
  SET_MOVIE: "SET_MOVIE",
  SET_SUCCESS: "SET_SUCCESS"
};

export interface DB {
  movie: Movie
}
export interface Movie {
  id?: number;
  name: string;
  synopsis: string;
  genres: Array<string>;
  release?: string;
  language: string;
  subtitled: boolean;
  director?: string;
  IMDB?: string;
  rating?: number;
  image?: string;
  type: string;
}

export type patch = {
  id: string;
  data: {
    name?: string;
    synopsis?: string;
    genres?: Array<string>;
    release?: string;
    language?: string;
    subtitled: boolean;
    director?: string;
    IMDB?: string;
    rating?: number;
    image?: string;
    type: any;
  };
};

export type deleteProps = {
  id: number,
  type: string;
}

export type successParams = {
  success: boolean,
  message: string
}

export interface FormProps {
  show?: boolean;
  onClose?: () => any;
};

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