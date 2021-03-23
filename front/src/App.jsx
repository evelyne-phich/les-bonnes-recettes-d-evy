import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import RecipePage from "./pages/RecipePage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/recipe/:id" exact>
          <Header searchBarIsHidden={true} filterButtonIsHidden={true} />
          <RecipePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
