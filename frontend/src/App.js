import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InputPage from './InputPage';
import NextPage from './NextPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InputPage />} />
        <Route path="/next" element={<NextPage />} />
      </Routes>
    </Router>
  );
}

export default App;
