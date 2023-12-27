import React, { useState, useRef } from "react";
import '../App.css';
import MovingCircle from "../Components/MovingCircle";
import audioFile from '../assets/harrytheme.mp3';

const HomePage = () => {
    const [catched, setCatched] = useState(false);
    const [start, setStart] = useState(false);
    const audioRef = useRef(null);

    const handleSnitchCatched = () => {
        console.log('Good Work Harry!')
        setCatched(true);
    }

    const handleStart = () => {
        setStart(true)

        const audio = audioRef.current || new Audio(audioFile);
        audioRef.current = audio;
    
        // Set the loop property to true for continuous playback
        audio.loop = true;

        audio.volume = 0.5;
    
        // Start playing the audio
        audio.play().catch((error) => {
          // Autoplay was prevented, request user interaction
          if (error.name === 'NotAllowedError') {
            console.log('Autoplay prevented. Please interact with the page and try again.');
          }
        });
    }
    
    return (
        <>
            <div className='main-div'>

                {catched ?
                    <>
                        <section className="heading-section">
                            <h1 className='heading-c'>Catched! Good Work "Harry"</h1>
                        </section>
                        <section className="text-section">
                            <b className='text-c'>Here's your special Christmas Letter</b>
                        </section>
                        <section className="button-section">
                            <a href="/letter">
                                <button className='button-27'>
                                    Message from Hogwarts
                                </button>
                            </a>
                        </section>
                    </> :
                    <>
                        <section className="heading-section">
                            <h1 id='catch'>Catch The Snith</h1>
                        </section>
                        <section className="text-section">
                            <button className="button-30" onClick={handleStart}>
                                <b id='special'>
                                    Click Here to Start!
                                </b>
                            </button>
                        </section>
                        <section className="button-section">
                            <p id='Snitch'>(Snitch will stop when you catch it)</p>
                        </section>

                    </>}

                <br />
                <section onClick={handleSnitchCatched}>

                    {start ? <><MovingCircle /></> : <></>}

                </section>
            </div>
        </>
    );
}

export default HomePage;