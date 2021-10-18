import * as React from "react";

import { Switch, Route } from 'react-router-dom';
import Details from "./pages/Details";
import Home from "./pages/Home";

export default function Routes(){
  return(
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/details" component={Details} />
    </Switch>
  )
}