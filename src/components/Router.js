import React, { useState } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import App from "../components/App";
import Login from "../routes/Login";

const AppRouter = ({ isLoggedIn }) => {
  return (
    <Router>
      <Switch>
        {isLoggedIn ? (
          <>
            <Route exact path="/">
              <App />
            </Route>
          </>
        ) : (
          <Route exact path="/Login">
            <Login />
          </Route>
        )}
      </Switch>
    </Router>
  );
};
export default AppRouter;