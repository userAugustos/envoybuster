import React from 'react';
import { createBrowserHistory } from "history";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";

import * as api from "../../services/api";
import Home from "../../pages/Home";
import store from "../../store";
import { Router } from 'react-router';

jest.mock('../../services/api');

const history = createBrowserHistory();

describe("Home page", () => {
  test("Should render movies list", async () => {
    const mockedApi = api as jest.Mocked<typeof api>;
    const movies = [
      {
        subtitled: false,
        image:
          "https://lumiere-a.akamaihd.net/v1/images/690x0w_br_9e5801a5.jpeg?region=0%2C0%2C690%2C1035",
        name: "Vingadores: Ultimato",
        synopsis:
          "Após Thanos eliminar metade das criaturas vivas, os Vingadores têm de lidar com a perda de amigos e entes queridos. Com Tony Stark vagando perdido no espaço sem água e comida, Steve Rogers e Natasha Romanov lideram a resistência contra o titã louco.",
        genres: ["Heróis", " Ação"],
        release: "2021-08-11",
        language: "Inglês",
        director: "Felipe Augustos",
        id: 3,
        IMDB: "https://www.imdb.com/title/tt4154796/",
      },
    ];

    mockedApi.get.mockResolvedValueOnce({data: { movies }});

    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    const movieList = await screen.findByTestId("movie-list");

    expect(movieList).toBeTruthy();

    expect(mockedApi.get).toHaveBeenCalled();
  });
  test("Need movie register button", async () => {
    render(
    <Provider store={store}>
      <Router history={history}>
        <Home/>
      </Router>
    </Provider>
    );

    const registerButton = screen.getByTestId("movie-register-button");

    expect(registerButton).toBeTruthy();

    fireEvent.click(registerButton);

    const form = await screen.findByTestId('form');

    expect(form).toBeTruthy();
  });
});
