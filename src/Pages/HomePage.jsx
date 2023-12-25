import React, { useState } from "react";
import '../App.css';
import MovingCircle from "../Components/MovingCircle";

const HomePage = () => {
    const [catched, setCatched] = useState(false);

    const handleSnitchCatched = () => {
        console.log('Good Work Harry!')
        setCatched(true);
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
                            <b id='special'>For Special Letter</b>
                        </section>
                        <section className="button-section">
                            <p id='Snitch'>(Snitch will stop when you catch it)</p>
                        </section>

                    </>}

                <br />
                <section onClick={handleSnitchCatched}>
                    <MovingCircle />
                </section>
            </div>
        </>
    );
}

export default HomePage;