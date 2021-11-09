import { render, screen } from "@testing-library/react";

import Home from '../../pages/Home';

describe("Home page", () => {
  test("Should render movies list", () => {
    render(<Home />);

    const moviesList = screen.queryAllBy
  })
})