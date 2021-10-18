import * as React from "react";

import { AiFillStar, AiFillDelete } from "react-icons/ai";
import { GiDirectorChair } from "react-icons/gi";
import { FaLanguage } from "react-icons/fa";
import { GrFormNextLink } from 'react-icons/gr';

import poster from "../../assets/poster.jpg";
// import "../../styles/_card.scss";
import { useHistory } from "react-router";

export const Card = ({ movie, deleteMovie }: any) => {
  const history = useHistory();

  const handleMovieDetails = () => {
    history.push(`/details/${movie.id}`);
  }

  return (
    <div className='Container'>
      <header>
        <h2 className=''> {movie.name} </h2>
        {movie.rating && (
          <section className='center-flex'>
            <AiFillStar className='mr-15 gold-svg' />
            <p>{movie.rating}</p>
          </section>
        )}
      </header>
      <section className='poster'>
        <img src={movie.image ? movie.image : poster } alt='' />
        <section className="card-absolute center-flex">
          { movie.genres_id?.map((genre: any) => ( <button className="button bt-white link-button"> {genre} </button> )) }
        </section>
      </section>
      <main className='column-flex pd-1'>
        <section className='center-flex'>
          <GiDirectorChair className='mr-15 font-svg' />
          <p>{movie.director}</p>
        </section>
        <section className="center-flex">
          <FaLanguage className='mr-15' />
          <span>{movie.language}</span>

          <span className="">, { movie.subtitled ? " Legendado" : " Sem Legenda"} </span>
        </section>
      </main>
      <footer className="center-flex">
        <button className="button bt-white max-bt center-flex" onClick={handleMovieDetails}>
         <GrFormNextLink className="mr-15"/>
          Ver Mais
        </button>
        <button className="button bt-red max-bt center-flex" onClick={deleteMovie}>
          <AiFillDelete className="mr-15"/>
          Excluir
        </button>
      </footer>
    </div>
  );
};

