import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import Navlinks from './components/Navlinks';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      <Home />
      <Footer />
    </Router>
    </div>
  );
}

export default App;
