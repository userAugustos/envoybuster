import * as React from "react";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addMovie, updateMovie } from "../../store/modules/Movies/action";

import "../../styles/_form.scss";
import { FormProps } from "../../utils/moviesTypes";
import { useForm } from "../../utils/useForm";

export default function Form({ show, onClose }: FormProps) {
  const dispatch = useDispatch();
  const { id } = useParams<{ id: string }>();

  const data = useSelector((state: any) => state.Movies);

  React.useEffect(() => {
    if (data.success) {
      window.alert(data.success.message);
      window.location.reload();
    }
    console.log(data);
  }, [data]);

  const form = useForm({
    initialValues: {
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

  if (!show) {
    return null;
  }

  const handleAddMovie = async (event: React.FormEvent) => {
    if (!Array.isArray(form.values.genres)) {
      form.values.genres = await form.values.genres.split(",");
    }

    console.log(form.values);

    dispatch(addMovie(form.values));
  };

  const handleUpdateMovie = async () => {
    if (
      !Array.isArray(form.values.genres) &&
      !form.values.genres === undefined
    ) {
      form.values.genres = await form.values.genres.split(",");
    }

    const data = await form.values;

    Object.keys(data).forEach(item => data[item] == null && delete data[item]);

    dispatch(updateMovie({ id, data }));
  };

  return (
    <div className={`modal center-flex ${show && "show"}`} onClick={onClose}>
      <button onClick={onClose} className='close-button button'>
        <IoMdClose className='red-svg' />
      </button>

      <form
        action=''
        onSubmit={e => e.preventDefault()}
        onClick={e => e.stopPropagation()}
        className="movie-form pd-1"
      >
        <section className='input'>
          <input
            type='text'
            name='name'
            value={form.values.name}
            onChange={form.handleChange}
          />
          <label htmlFor='name'>Nome do Filme</label>
        </section>
        <section className='input'>
          <textarea
            name='synopsis'
            id='synopsis'
            cols={30}
            rows={10}
            placeholder='Sinopse'
            value={form.values.synopsis}
            onChange={form.handleChange}
          ></textarea>
        </section>
        <section className='input'>
          <input
            type='text'
            name='genres'
            value={form.values.genres}
            onChange={form.handleChange}
          />
          <label htmlFor='genres'>
            Genero(s) <span className="mini-info">Mais de um, por favor, separe com virgula</span>
          </label>
        </section>
        <section className='input'>
          <input
            type='date'
            name='release'
            value={form.values.realese}
            onChange={form.handleChange}
            placeholder="Data de Lançamento"
          />
          <label htmlFor='release'>Data de lançamento</label>
        </section>
        <section className='input'>
          <input
            type='text'
            name='language'
            value={form.values.language}
            onChange={form.handleChange}
          />
          <label htmlFor='language'>Lingua</label>
        </section>
        <section className='input'>
          <input
            type='checkbox'
            id='checkbox'
            name='subtitled'
            checked={form.values.subtitled}
            onChange={form.handleChange}
            value={form.values.subtitled}
          />
          <label htmlFor='subtitled'>Posui Legenda?</label>
        </section>
        <section className='input'>
          <input
            type='text'
            name='director'
            value={form.values.director}
            onChange={form.handleChange}
          />
          <label htmlFor='director'>Nome do Diretor</label>
        </section>
        <section className='input'>
          <input
            type='text'
            name='IMDB'
            value={form.values.IMDB}
            onChange={form.handleChange}
          />
          <label htmlFor='IMDB'>Link do filme no IMDB</label>
        </section>
        <section className='input'>
          <input
            type='number'
            name='rating'
            value={form.values.rating}
            onChange={form.handleChange}
          />
          <label htmlFor='rating'>Avaliação</label>
        </section>
        <section className='input'>
          <input
            type='text'
            name='image'
            value={form.values.image}
            onChange={form.handleChange}
          />
          <label htmlFor='image'>
            Imagem <span className="mini-info">preferida em poster</span>
          </label>
        </section>

        <section>
          <button type='button' className="button bt-red" onClick={handleAddMovie}>
            Cadastrar
          </button>
          <button type='button' className="button bt-white mb-15" onClick={handleUpdateMovie}>
            Atualizar
          </button>
        </section>
      </form>
    </div>
  );
}
