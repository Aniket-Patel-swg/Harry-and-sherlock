import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <div className='main-div'>
          <h1>Investigate Harry Potter Scenario's</h1>
          <br />
      </div>

      <div className='situation'>
        <h1>Situation: The Vanishing Broomstick</h1>
        <p>
          In the Gryffindor common room, during the events leading up to the 
          Quidditch match between Gryffindor and Slytherin, Harry Potter's prized 
          Firebolt broomstick suddenly goes missing. The room was locked, and only 
          a few people had access.
        </p>
      </div>
      <div className='information'>
          <h2>Information:</h2>
          <h3>1. Suspects:</h3>
          <ul>
            <li>Ron Weasley, who might be jealous and could have borrowed it without asking.</li>
            <li>Draco Malfoy, Slytherin's Seeker, who may have stolen it to hinder Gryffindor's chances in the upcoming match.</li>
            <li>  </li>
          </ul>
      </div>
    </>
  )
}

export default App
