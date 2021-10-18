import * as yup from "yup";

export const movieSchema = yup.object({
  name: yup.string().required(),
  synopsis: yup.string().required(),
  genres: yup.array().of(yup.string()).required(), //is an array? so it's a array of numbers; what? isn't a array? so it's just a number :)
  release: yup.string(), 
  language: yup.string().required(),
  subtitled: yup.boolean().required(),
  director: yup.string(),
  IMDB: yup.string(),
  rating: yup.number()
});

