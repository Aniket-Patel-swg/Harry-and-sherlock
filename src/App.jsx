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
      <BrowserRouter basename='https://merry-christmas-harry.vercel.app'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/letter' element={<Letter />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
