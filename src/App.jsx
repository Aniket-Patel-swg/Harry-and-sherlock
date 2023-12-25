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

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/letter' element={<HomePage />} />
          <Route path='/' element={<Letter />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
