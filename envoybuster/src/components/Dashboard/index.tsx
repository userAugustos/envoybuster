import * as React from "react";

import { AiFillStar } from "react-icons/ai";
import { GiDirectorChair } from "react-icons/gi";
import { FaLanguage } from "react-icons/fa";
import poster from "../../assets/poster.jpg";

import "../../styles/_dashboard.scss";
import { States } from "../../utils/moviesTypes";

const Dashboard = ({ movie }: States["Movies"]) => {
  return (
    <div className='container dashboard'>
      <header className='dashboard-header column-flex' data-testid="dashboard-header">
        <article className='center-flex pd-1'>
          <section className='column-flex title'>
            <h2>{movie?.name}</h2>
            <span>{movie?.subtitled ? "Legendado :)" : "Sem Legendas :("}</span>
          </section>
          {movie?.rating && (
            <section className='center-flex'>
              <AiFillStar className='mr-15 gold-svg' />
              <p>{movie.rating}</p>
            </section>
          )}
        </article>
        <section className='center-flex pd-1'>
          <GiDirectorChair className='mr-15 black-svg' />
          {movie?.director ? (
            <span>{movie.director}</span>
          ) : (
            <span>Desconhecido</span>
          )}
        </section>
        <section className='center-flex pd-1'>
          <FaLanguage className='mr-15 black-svg' />
          <span>{movie?.language}</span>
        </section>
        <section className='center-flex pd-1'>
          <span> Lançamento: {movie?.release?.split("-")[0]} </span>
        </section>
      </header>

      <main className='center-flex' data-testid="dashboard-main">
        <div className='column-flex'>
          <section className='synopsis'>
            <p> {movie?.synopsis} </p>
          </section>
          <section className=' center-flex movie-info'>
            {movie?.IMDB && (
              <a href={movie?.IMDB} className='button bt-red'>
                IMDB
              </a>
            )}
          </section>
        </div>
        <article className='dashboard-poster'>
          <img src={movie?.image ? movie?.image : poster} alt='' />
          <section className='center-flex'>
            {movie?.genres?.map((genre: any) => (
              <button className='button bt-white link-button' key={genre}>
                {genre}
              </button>
            ))}
          </section>
        </article>
      </main>
    </div>
  );
};

export default Dashboard;
