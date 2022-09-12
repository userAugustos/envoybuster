import * as React from "react";

import { AiFillStar, AiFillDelete } from "react-icons/ai";
import { GiDirectorChair } from "react-icons/gi";
import { FaLanguage } from "react-icons/fa";
import { GrFormNextLink } from 'react-icons/gr';

import poster from "../../assets/poster.jpg";
import "../../styles/_card.scss";
import { useHistory } from "react-router";
import { CardInterface } from "../../utils/moviesTypes";
import { useDispatch } from "react-redux";
import { removeMovie } from "../../store/modules/Movies/action";

export const Card = ({ movie } : CardInterface) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleMovieDetails = () => {
    history.push(`/details/${movie.id}`);
  }

  const handleDeleteMovie = () => {
    movie.id && dispatch(removeMovie(movie.id));
  }

  return (
    <div className='card' data-testid="movie-card">
      <header>
        <h2 data-testid='movie-card-info'> {movie.name} </h2>
        {movie.rating && (
          <section className='center-flex'>
            <AiFillStar className='mr-15 gold-svg' />
            <p className="rating" data-testid='movie-card-info' >{movie.rating}</p>
          </section>
        )}
      </header>
      <div className='poster'>
        <img src={movie.image ? movie.image : poster } alt='' data-testid="movie-card-info" />
        <section className="card-absolute center-flex genres">
          { movie.genres?.map((genre: any) => ( <button className="button bt-white link-button" key={genre} data-testid="movie-card-info"> {genre} </button> )) }
        </section>
      </div>
      <main className='column-flex pd-1'>
        <section className='center-flex'>
          <GiDirectorChair className='mr-15 font-svg' />
          <p className="director" data-testid="movie-card-info">{movie.director}</p>
        </section>
        <section className="center-flex">
          <FaLanguage className='mr-15' />
          {<span className="language" data-testid="movie-card-info" >{ movie.language && `${movie.language},` }
            <span data-testid="movie-card-info">{ movie.subtitled ? "Legendado" : "Sem Legenda"}</span>
          </span>}
        </section>
      </main>
      <footer className="center-flex">
        <button className="button bt-white max-bt center-flex" onClick={handleMovieDetails}>
         <GrFormNextLink className="mr-15"/>
          Ver Mais
        </button>
        <button className="button bt-red max-bt center-flex" onClick={handleDeleteMovie}>
          <AiFillDelete className="mr-15"/>
          Excluir
        </button>
      </footer>
    </div>
  );
};

