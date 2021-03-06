import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import AboutMe from './Components/AboutMe';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/aboutme">
          <AboutMe />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
