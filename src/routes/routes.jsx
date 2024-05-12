import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecursosHumanos from '../Views/RercursosHumanos';
import Login from '../Views/Login';

const CustomRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/RecursosHumanos" element={<RecursosHumanos/>} />
      </Routes>
    </Router>
  );
};

export default CustomRouter;