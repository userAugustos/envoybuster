import * as React from "react";
import { createBrowserHistory } from "history";

import { Provider } from "react-redux";
import { Router } from "react-router";

import Routes from "./routes";
import store from "./store";

function App() {
  const history = createBrowserHistory();

  return (
  <Provider store={store}>
    <Router history={history}>
      <Routes />
    </Router>
  </Provider>
  );
}

export default App;
