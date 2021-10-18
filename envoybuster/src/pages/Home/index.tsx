import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { reqMovies, removeMovie } from "../../store/modules/Movies/action";
import "../../styles/_home.scss";
import logo from '../../assets/logo.png';
import { Movie } from "../../utils/moviesTypes";
import { Card } from "../../components/Card";

export default function Home() {
  const dispatch = useDispatch();

  const data = useSelector((state: any) => state.Movies);

  React.useEffect(() => {
    dispatch(reqMovies());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const handleDeleteMovie = (movie: any) => {
    console.log(movie)
    dispatch(removeMovie(movie));
  }

  return(
    <div className="container">
      <header>
        <section className="center-flex">
          <img src={logo} alt="logo" className="logo mr-15" />
          <h1>Envoybutser</h1>
        </section>
        <h4>A locadora que a <span>Netflix</span> não derrubou!</h4>
        <span>  </span>
      </header>
      {Array.isArray(data) ? <p>Loading...</p> : (
        <main>
          <ul className="center-flex">
            {data.movies.map((item: any) => (
              <li>
                <Card movie={item} deleteMovie={() => handleDeleteMovie(item.id)}></Card>
              </li>
            ))}
          </ul>
        </main>
      ) }
    </div>
  )
}