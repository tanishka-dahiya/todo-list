import React from 'react';
import Todo from './MainComponents/loginPage'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Register from './MainComponents/RegistrationPage';
import './App.css';
import Navbar from './components/Navbar';


function App() {

  return (
    <Router >
      <Switch>

        <Route path="/Register">
          <Register />
        </Route>
        <Route path="/">
          <Todo />
        </Route>

      </Switch>

    </Router>

  );
}

export default App;
;