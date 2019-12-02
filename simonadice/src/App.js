import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Layout from "./components/Layout";
import Juego from "./pages/Juego";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/game" component={Juego}></Route>
          <Route exact path="/register" component={Register}></Route>
          {/* <Route
            exact
            path="/badges/:badgeId/edit"
            component={BadgeEdit}
          ></Route>
          <Route exact path="/badges/:badgeId" component={BadgeDetails}></Route>
          <Route component={NotFound}></Route> */}
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
