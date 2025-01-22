import { Routes, Route, NavLink, HashRouter } from "react-router-dom";
import CurrencyConverter from './CurrencyConverter';
import User from './User';
import Home from "./Home";

const App = () => {

  return (
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
  );
};

export default App;
