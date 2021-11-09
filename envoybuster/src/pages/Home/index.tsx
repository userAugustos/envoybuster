import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { reqMovies } from "../../store/modules/Movies/action";
import "../../styles/_home.scss";
import logo from "../../assets/logo.png";
import { Card } from "../../components/Card";
import { Movie } from "../../utils/moviesTypes";
import Modal from "../../components/Modal";
import Form from "../../components/Form";

export default function Home() {
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState<boolean>();

  const data = useSelector((state: any) => state.Movies);

  React.useEffect(() => {
    dispatch(reqMovies("movies"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <div className='container home'>
      <header>
        <section className='center-flex'>
          <img src={logo} alt='logo' className='logo mr-15' />
          <h1>Envoybutser</h1>
        </section>
        <h4>
          A locadora que a <span>Netflix</span> não derrubou!
        </h4>
      </header>
      <main>
        {Array.isArray(data) ? (
          <p>Loading...</p>
        ) : (
          <ul className='center-flex'>
            {data.movies?.map((item: Movie) => (
              <li key={item.id}>
                <Card movie={item}></Card>
              </li>
            ))}
          </ul>
        )}
        <button className='button register-movie bt-red' onClick={() => setOpen(true)}>
          Cadastrar Filme
        </button>
      </main>

      <Modal show={open} onClose={() => setOpen(false)}>
        <Form /> 
      </Modal>
    </div>
  );
}
