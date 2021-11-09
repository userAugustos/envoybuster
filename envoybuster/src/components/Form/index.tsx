import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addMovie, updateMovie } from "../../store/modules/Movies/action";

import "../../styles/_form.scss";
import { FormProps } from "../../utils/moviesTypes";
import { useForm } from "../../utils/useForm";
import { Input } from "../Input";

export default function Form({ update, movie }: FormProps): JSX.Element {
  const dispatch = useDispatch();
  const { id } = useParams<{ id: string }>();

  const data = useSelector((state: any) => state.Movies);

  React.useEffect(() => {
    if (data.response) {
      window.alert(data.response?.message);
      data.response?.success === true && window.location.reload();
    }
  }, [data]);

  const form = useForm({
    initialValues: movie ? movie : {
      name: null,
      synopsis: null,
      genres: null,
      release: null,
      language: null,
      subtitled: false,
      director: null,
      IMDB: null,
      rating: null,
      image: null,
    },
  });

  const handleAddMovie = async (event: React.FormEvent) => {
    if (!Array.isArray(form.values.genres) && !form.values.genres === null) {
      form.values.genres = await form.values.genres.split(",");
    }

    const data = await form.values;

    Object.keys(data).forEach(item => data[item] == null && delete data[item]);

    dispatch(addMovie(data));
  };

  const handleUpdateMovie = async () => {
    if (!Array.isArray(form.values.genres) && !form.values.genres === null) {
      form.values.genres = await form.values.genres.split(",");
    }

    const data = await form.values;

    Object.keys(data).forEach(item => data[item] == null && delete data[item]);

    dispatch(updateMovie({ id, data }));
  };

  return (
    <form
      action=''
      onSubmit={e => e.preventDefault()}
      onClick={e => e.stopPropagation()}
      className='movie-form pd-1'
    >
      {/* Movie Name */}
      <Input
        value={form.values.name}
        type='text'
        name='name'
        onChange={form.handleChange}
        required={true}
        label='Nome do Filme'
      />
      {/* Movie Synopsis <textarea> */}
      <section className='input'>
        <textarea
          name='synopsis'
          id='synopsis'
          cols={30}
          rows={10}
          placeholder='Sinopse - Obrigatória'
          value={form.values.synopsis}
          onChange={form.handleChange}
        ></textarea>
      </section>
      {/* Genries */}
      <Input
        value={form.values.genres}
        type='text'
        name='genres'
        onChange={form.handleChange}
        required={true}
        label='Genero(s)'
        info='Separe com virgula'
      />
      {/* Estreia */}
      <Input
        value={form.values.release}
        type='date'
        name='release'
        onChange={form.handleChange}
        required={true}
        label='Data de Lançamento'
      />
      {/* Lingua */}
      <Input
        value={form.values.language}
        type='text'
        name='language'
        onChange={form.handleChange}
        required={true}
        label='Lingua'
      />
      {/* Diretor */}
      <Input
        value={form.values.director}
        type='text'
        name='director'
        onChange={form.handleChange}
        required={true}
        label='Nome do Diretor'
      />
      {/* Legendado? */}
      <Input
        value={form.values.subtitled}
        type='checkbox'
        name='subtitled'
        required={true}
        onChange={form.handleChange}
        checked={form.values.subtitled}
        label='Legendado?'
      />
      {/* IMDB */}
      <Input
        value={form.values.IMDB}
        type='text'
        name='IMDB'
        onChange={form.handleChange}
        label='Link no IMDB'
      />
      {/* Avaliação */}
      <Input
        value={form.values.rating}
        type='number'
        name='rating'
        onChange={form.handleChange}
        label='Avaliação'
      />
      {/* Imagem */}
      <Input
        value={form.values.image}
        type='text'
        name='image'
        onChange={form.handleChange}
        label='Imagem'
        info='preferida em poster'
      />
      <section>
        {update ? (
          <button
            type='button'
            className='button bt-white mb-15'
            onClick={handleUpdateMovie}
          >
            Atualizar
          </button>
        ) : (
          <button
            type='button'
            className='button bt-red'
            onClick={handleAddMovie}
          >
            Cadastrar
          </button>
        )}
      </section>
    </form>
  );
}
