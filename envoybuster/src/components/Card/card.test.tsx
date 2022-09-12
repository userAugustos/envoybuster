import { fireEvent, render, screen } from '@testing-library/react';
import { createBrowserHistory } from "history";

import * as api from "../../services/api";
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import store from '../../store';

import { Card } from './index';

jest.mock('../../services/api');

const history = createBrowserHistory();

const mockedMovie = {
  id: 1,
  name: 'Um Filme Teste',
  rating: 4,
  genres: ['Ação'],
  // director: '',
  image: 'some image',
  subtitled: true,
  director: 'Felipe Augustos',
  language: 'Português',
  synopsis: 'nossa acontece coisa hein',
}

describe("Card Component", () => {
  test("Movies infos", () => {
    render(
      <Provider store={store}>
        <Card movie={mockedMovie}/> 
      </Provider>
    );

    const CardComponent = screen.findByTestId("movie-card");
    const childArray = screen.queryAllByTestId("movie-card-info")
    
    expect(CardComponent).toBeTruthy();
    expect(childArray).toHaveLength(7);
    // childArray.map((child: any) => {

    // })
  });
  test("Redirect Buttons", () => {
    render(
      <Provider store={store}>
      <Router history={history}>
        <Card movie={mockedMovie}/>
      </Router>
    </Provider>
    );

    const showMoreBtn = screen.getByText('Ver Mais');
    const deleteBtn = screen.getByText('Excluir');

    expect(showMoreBtn).toBeTruthy();
    expect(deleteBtn).toBeTruthy();

    fireEvent.click(deleteBtn);

    expect(api.remove).toHaveBeenCalledTimes(1);
    
    fireEvent.click(showMoreBtn);

    expect(screen.findByTestId('details-main')).toBeTruthy()
  })
})

