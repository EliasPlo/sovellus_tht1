<<<<<<< HEAD
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InputPage from './InputPage';
import NextPage from './NextPage';
=======
import { Routes, Route, NavLink, HashRouter } from "react-router-dom";
import CurrencyConverter from './CurrencyConverter';
import User from './User';
import Home from "./Home";

const App = () => {
>>>>>>> c49afdb1fce0b2a1c5186bee1d6a3f0a7a519e6e

  return (
<<<<<<< HEAD
    <Router>
      <Routes>
        <Route path="/" element={<InputPage />} />
        <Route path="/next" element={<NextPage />} />
      </Routes>
    </Router>
=======
    <HashRouter>
      <div>
        <ul>
        <li><NavLink exact="true" to="/">Koti</NavLink></li>
        <li><NavLink to="/currency">Muunna</NavLink></li>
        <li><NavLink to="/user">Käyttäjä</NavLink></li>
      </ul>
      </div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/currency" element={<CurrencyConverter />} />
            <Route path="/user" element={<User />} />
          </Routes>
    </HashRouter>
>>>>>>> c49afdb1fce0b2a1c5186bee1d6a3f0a7a519e6e
  );
};

export default App;
