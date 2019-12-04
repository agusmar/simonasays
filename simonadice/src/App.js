import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Layout from "./components/Layout";
// import Juego from "./pages/Juego";
import Register from "./pages/Register";
import Goodbye from "./pages/GoodBye";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          {/* <Route exact path="/game" component={Juego}></Route> */}
          <Route exact path="/register" component={Register}></Route>
          <Route exact path="/goodbye" component={Goodbye}></Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
