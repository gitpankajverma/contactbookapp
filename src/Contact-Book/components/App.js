import React from "react";
import Home from "./Home";
import "../home.css";
import AddContact from "./AddContact";
import EditContact from "./EditContact";
import { BrowserRouter, Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import myStore from "../store";
const App = () => {
  return (
    <Provider store={myStore}>
      <BrowserRouter>
        <Switch>
          <Route path="/contact/add" component={AddContact} />
          <Route path="/contact/edit/:id" component={EditContact} />
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};
export default App;
