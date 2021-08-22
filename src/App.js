import React from "react";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import { Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <>
      <Switch>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/">
          <SignUp />
        </Route>
      </Switch>
    </>
  );
}
