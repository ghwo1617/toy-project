import React, { useState } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "../routes/Register";
import Home from "../pages/index";

const AppRouter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Router>
      <Switch>
        {isLoggedIn ? (
          <>
            <Route exact path="/">
              <Home />
            </Route>
          </>
        ) : (
          <Route exact path="/Login">
            <Auth />
          </Route>
        )}
      </Switch>
    </Router>
  );
};
export default AppRouter;