import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import RegistrationForm from "./pages/RegistrationForm/RegistrationForm";

export function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/ch01">
          <RegistrationForm />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
