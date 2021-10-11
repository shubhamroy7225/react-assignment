import React, { useState } from "react";
import Home from "./Home";
import "./App.css";
import Login from "./Login";
import SignUp from "./SignUp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
function App() {
  const history = createBrowserHistory();
  const [token, setToken] = useState("");
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route exact path="/" render={(props) => <SignUp {...props} />} />

          <Route exact path="/login" render={(props) => <Login {...props} />} />

          <Route
            exact
            path="/dashboard"
            render={(props) => <Home {...props} />}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
