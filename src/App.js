import React from 'react';
import Login from './Layouts/Login';
import Default from './Layouts/Default';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Login/>} />
          <Route path="home" element={<Default />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
