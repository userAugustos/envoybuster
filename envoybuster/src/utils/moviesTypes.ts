import { InputHTMLAttributes } from "react";

export const actions = {
  SET_MOVIES: "SET_MOVIES",
  REQ_MOVIES: "REQ_MOVIES",
  ADD_MOVIE: "ADD_MOVIE",
  REMOVE_MOVIE: "REMOVE_MOVIE",
  UPDATE_MOVIE: "UPDATE_MOVIE",
  SET_MOVIE: "SET_MOVIE",
  SET_RESPONSE: "SET_RESPONSE"
};

export interface States {
  Movies: {
    Movies?: Array<Movie>,
    movie?: Movie
  },
}

export interface ModalInterface {
  show?: boolean;
  onClose?: () => any;
  children: JSX.Element | JSX.Element[]
}

export interface InputInterface extends InputHTMLAttributes<HTMLInputElement>{
  value: string,
  onChange: (e: any) => void,
  type: string,
  required?: boolean,
  label: string,
  info?: string,
  name: string
}
export interface CardInterface {
  movie: Movie,
  deleteMovie?: () => any;
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
  type?: string;
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
  update?: boolean,
  movie?: Movie,
  path?: string;
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