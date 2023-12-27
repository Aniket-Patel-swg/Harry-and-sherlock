import React from 'react';
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Letter from './Pages/Letter';
import HomePage from './Pages/HomePage';
import Reply from './Pages/Reply';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/letter' element={<Letter />} />
          <Route path='/Reply' element={<Reply />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
