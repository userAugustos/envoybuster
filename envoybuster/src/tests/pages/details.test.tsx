import { render, screen } from '@testing-library/react';
import { createBrowserHistory } from "history";

import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import Details from '../../pages/Details';
import store from '../../store';

const history = createBrowserHistory();

describe("Details pages", () => {
  test("Have statics buttons", async () => {
    render(
    <Provider store={store}>
      <Router history={history}>
        <Details />
      </Router>
    </Provider>
    );

    const updateButton = await screen.findByTestId('edit-movie-button');
    const goHomeButton = await screen.findByTestId('home-button');

    expect(updateButton).toBeTruthy();
    expect(goHomeButton).toBeTruthy();
  })
})