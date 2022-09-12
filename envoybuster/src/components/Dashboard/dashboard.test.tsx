import { fireEvent, render, screen } from '@testing-library/react';

import * as api from "../../services/api";
import { Provider } from 'react-redux';
import store from '../../store';
import Dashboard from '.';

const mockedMovie = {
  name: 'Um Filme Teste',
  rating: 4,
  genres: ['Ação'],
  image: 'some image',
  subtitled: true,
  director: 'Felipe Augustos',
  language: 'Português',
  synopsis: 'nossa acontece coisa hein',
}

describe("Dashboard", () => {
  test("Displaying movies info", async () => {
    render(
      <Provider store={store}>
        <Dashboard movie={mockedMovie}/> 
      </Provider>
    );
      
    const dashboardHeader = await screen.findByTestId('dashboard-header');
    const dashboardMain = await screen.findByTestId('dashboard-main');

    expect(dashboardHeader).toBeTruthy();
    expect(dashboardMain).toBeTruthy();

   //testing based in the moviemock data
    const name = await screen.findByText(mockedMovie.name);
    expect(name).toBeTruthy(); //movie.
    const subtitled = await screen.findByText("Legendado :)");
    expect(subtitled).toBeTruthy(); //subtitled true

    //or

    for (let info in mockedMovie) {
      if(typeof info === 'string'){
        let item = await screen.findByText(mockedMovie.name);
        expect(item).toBeTruthy(); //for each string in movimock, search for this string in te dashboard
      }
    }
  })
})