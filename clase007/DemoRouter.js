import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

const Routes = () => {
  return (
    <Router>
      <h1>Nuestra App</h1>
        <Link to='/'>
            Inicio
        </Link>
        <Link to='/contacto'>
            Contacto
        </Link>
        <Link to='/nosotros'>
            Nosotros
        </Link>

      <Switch>
        <Route exact path="/">Inicio...</Route>
        <Route path="/contacto">Contacto...</Route>
        <Route path="/nosotros">Nosotros...</Route>
        
      </Switch>
    </Router>
  );
};
