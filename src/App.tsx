import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import AboutMe from './Components/AboutMe';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <AboutMe />
      <Footer />
    </div>
  );
}

export default App;
