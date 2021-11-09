import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import Dashboard from '../../components/Dashboard';
import Form from '../../components/Form';

import { reqMovies } from '../../store/modules/Movies/action';

import { TiArrowBack } from "react-icons/ti";
import "../../styles/_details.scss";
import { States } from '../../utils/moviesTypes';
import Modal from '../../components/Modal';

export default function Details() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams<{id: string}>();

  const [open, setOpen] = React.useState<boolean>();

  const data = useSelector((state: States) => state.Movies);

  const handleGoBack = async () => {
    history.push("/");
  }

  React.useEffect(() => {
    dispatch(reqMovies(`movie/${id}`));
    // console.log(data);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return(
    <main className="container column-flex details">
      { data?.movie ? <Dashboard movie={data.movie}/> : <p>loading</p> }

      <Modal show={open} onClose={() => setOpen(false)}>
        <Form update movie={data?.movie}/> 
      </Modal>

      <button className="button movie bt-red" onClick={() => setOpen(true)}>
        Editar Filme
      </button>
      <button className="button go-back center-flex" onClick={handleGoBack}>
        <TiArrowBack /> Home
      </button>
    </main>
  )  
}
