import * as React from "react";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addMovie, updateMovie } from "../../store/modules/Movies/action";

import "../../styles/_form.scss";
import { FormProps, patchBody } from "../../utils/moviesTypes";
import { useForm } from "../../utils/useForm";


export default function Form({ show, onClose }: FormProps) {

  const dispatch = useDispatch();
  const { id } = useParams<{id: string}>();

  const data = useSelector((state: any) => state.Movies);

  React.useEffect(() => {
    if(data.success){
      window.alert(data.success.message);
      window.location.reload();
    } 
    console.log(data);
  },[data])

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

    if(!Array.isArray(form.values.genres)){
      form.values.genres = await form.values.genres.split(",");
    }

    console.log(form.values);

    dispatch(addMovie(form.values));
    
  };

  const handleUpdateMovie = async () => {

    if((!Array.isArray(form.values.genres) && (!form.values.genres === undefined))){
      form.values.genres = await form.values.genres.split(",");
    }

    const data = await form.values;

    Object.keys(data).forEach((item) => data[item] == null && delete data[item]);

    dispatch(updateMovie({ id, data}));
  }

  return (
    <div className={`modal center-flex ${show && "show"}`} onClick={onClose}>
      <button onClick={onClose} className='close-button button'>
        <IoMdClose className='red-svg' />
      </button>

      <form
        action=''
        onSubmit={e => e.preventDefault()}
        onClick={e => e.stopPropagation()}
      >
        <section className='input'>
          <label htmlFor='name'>Nome do Filme</label>
          <input
            type='text'
            name='name'
            value={form.values.name}
            onChange={form.handleChange}
          />
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
          <label htmlFor='genres'>
            Genero(s) <span>Mais de um, por favor, separe com virgula</span>
          </label>
          <input
            type='text'
            name='genres'
            value={form.values.genres}
            onChange={form.handleChange}
          />
        </section>
        <section className='input'>
          <label htmlFor='release'>Data de lançamento</label>
          <input
            type='date'
            name='release'
            value={form.values.realese}
            onChange={form.handleChange}
          />
        </section>
        <section className='input'>
          <label htmlFor='language'>Lingua</label>
          <input
            type='text'
            name='language'
            value={form.values.language}
            onChange={form.handleChange}
          />
        </section>
        <section className='input'>
          <label htmlFor='subtitled'>Posui Legenda?</label>
          <input
            type='checkbox'
            id='checkbox'
            name='subtitled'
            checked={form.values.subtitled}
            onChange={form.handleChange}
            value={form.values.subtitled}
          />
        </section>
        <section className='input'>
          <label htmlFor='director'>Nome do Diretor</label>
          <input
            type='text'
            name='director'
            value={form.values.director}
            onChange={form.handleChange}
          />
        </section>
        <section className='input'>
          <label htmlFor='IMDB'>Link do filme no IMDB</label>
          <input
            type='text'
            name='IMDB'
            value={form.values.IMDB}
            onChange={form.handleChange}
          />
        </section>
        <section className='input'>
          <label htmlFor='rating'>Avaliação</label>
          <input
            type='number'
            name='rating'
            value={form.values.rating}
            onChange={form.handleChange}
          />
        </section>
        <section className='input'>
          <label htmlFor='image'>
            Imagem <span>preferida em poster</span>
          </label>
          <input
            type='text'
            name='image'
            value={form.values.image}
            onChange={form.handleChange}
          />
        </section>

        <section>
          <button type="button" onClick={handleAddMovie}>
            Cadastrar
          </button>
          <button type="button" onClick={handleUpdateMovie}>
            Atualizar
          </button>
        </section>
      </form>
    </div>
  );
}
