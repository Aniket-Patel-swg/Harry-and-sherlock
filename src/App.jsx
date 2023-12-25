import { useState, useEffect, useRef } from 'react'
import './App.css'
import MovingCircle from './Components/MovingCircle'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Letter from './Pages/Letter';
import HomePage from './Pages/HomePage';
import audioFile from './assets/hogwarts.mp3'

function App() {

  const audioRef = useRef(null);

  useEffect(() => {
    console.log('useEffect is running!')
      console.log('play Audio Function is running!')
      const audio = audioRef.current || new Audio(audioFile);
      audioRef.current = audio;

      audio.play().catch((error) => {
        // Autoplay was prevented, request user interaction
        if (error.name === 'NotAllowedError') {
          console.log('Autoplay prevented. Please interact with the page and try again.');
        }
      });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/letter' element={<Letter />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
