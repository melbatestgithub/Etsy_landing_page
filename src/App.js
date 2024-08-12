import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import DetailPage from './pages/Detail';
const App = () => {


  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/product-detail" element={<DetailPage/>}/>
      </Routes>
    
    </Router>
  );
};

export default App;
