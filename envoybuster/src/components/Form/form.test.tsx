import { fireEvent, render, screen } from "@testing-library/react";
import { createBrowserHistory } from "history";

import * as api from "../../services/api";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import Form from ".";
import store from "../../store";

const history = createBrowserHistory();

jest.mock("../../services/api");

const mockedMovie = {
  name: "fake info",
  synopsis: "fake info",
  genres: ["fake, info"],
  release: "fake info",
  language: "fake info",
  subtitled: false,
  director: "fake info",
  IMDB: "fake info",
  rating: 4,
  image: "fake info",
};

const inputOptions = [
  "name",
  "genres",
  "release",
  "language",
  "director",
  "sibtitled",
  "IMDB",
  "rating",
  "image",
];

describe("Details pages", () => {
  test("Should show movie infos on the fields", async () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <Form movie={mockedMovie} />
        </Router>
      </Provider>
    );

    inputOptions.map(async (option: string) => {
      let optionInput = await screen.findByRole("input", { name: option });
      expect(optionInput).toBeTruthy();
    });
  });
  test("Should register movie", () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <Form movie={mockedMovie} />
        </Router>
      </Provider>
    );

    const registerButton = screen.getByText("Cadastrar");

    expect(registerButton).toBeTruthy();

    // fireEvent.click(registerButton);
  });
  test("Should update movie", () => {
    const alertMock = jest.spyOn(window, "alert").mockImplementation();
    render(
      <Provider store={store}>
        <Router history={history}>
          <Form movie={mockedMovie} update />
        </Router>
      </Provider>
    );

    const updateButton = screen.getByText("Atualizar");

    expect(updateButton).toBeTruthy();

    // fireEvent.click(updateButton);
  });
});
