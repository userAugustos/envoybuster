import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import Dashboard from '../../components/Dashboard';
import Form from '../../components/Form';
import { reqMovies } from '../../store/modules/Movies/action';

import "../../styles/_details.scss";

export default function Details() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams<{id: string}>();

  const [open, setOpen] = React.useState<boolean>();

  const movie = useSelector((state: any) => state.Movies.movie);

  React.useEffect(() => {
    dispatch(reqMovies(`movie/${id}`));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return(
    <main className="container column-flex details">
      { movie ? <Dashboard movie={movie}/> : <p>loading</p> }

      <Form show={open} onClose={() => setOpen(false)} />

      <button className="button" onClick={() => setOpen(true)}>
        Editar/Cadastrar Filme
      </button>
      <button className="button go-back" onClick={() => history.push("/")}>
        Volta pra home
      </button>
    </main>
  )  
}
