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

  const data = useSelector((state: any) => state.Movies);


  React.useEffect(() => {
    dispatch(reqMovies(`movie/${id}`));
    if (data.response) {
      window.alert(data.response?.message);
      data.response?.success === true && window.location.reload();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data.response])

  const handleGoBack = async () => {
    history.push("/");
  }

  return(
    <main className="container column-flex details" data-testid="details-main">
      { data?.movie ? <Dashboard movie={data.movie}/> : <p>loading</p> }

      <Modal show={open} onClose={() => setOpen(false)}>
        <Form update movie={data?.movie}/> 
      </Modal>

      <button className="button movie bt-red" onClick={() => setOpen(true)} data-testid="edit-movie-button">
        Editar Filme
      </button>
      <button className="button go-back center-flex" onClick={handleGoBack} data-testid="home-button">
        <TiArrowBack /> Home
      </button>
    </main>
  )  
}
