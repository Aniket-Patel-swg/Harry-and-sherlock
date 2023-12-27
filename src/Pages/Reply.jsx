import React, { useState } from "react";
import vishwa from '../assets/Vishwa.png'
import reply from '../assets/reply.png'
import './Reply.css';

const Reply = () => {

    const [text, setText] = useState('');
    const [revert, setRevert] = useState('');
    const handleTextareaChange = (event) => {
        setText(event.target.value);
    };

    const handleTextChange = (e) => {
        setRevert(e.target.value)
    }
    return (
        <>

            <div className="letter">
                <div className='main-letter-div'>
                    <div className='hogwarts-crest'>
                        <img src="https://pixy.org/src/152/1523365.png" alt="Hogwarts crest" height="100px" />
                    </div>
                    <div className='Merry-christmas'>
                        <p>
                            <img src={reply} alt="Merry Christmas" width="80%" />

                        </p>
                        <p className='dear'>Dear Aniket,</p>

                        <textarea name="upper" id="upper" className="upper-c"
                            value={text}
                            onChange={handleTextareaChange}
                        ></textarea>

                        <p>

                        </p>
                        <hr />

                        <p className='letter-text'>
                            <textarea name="" id="" className="lower-c"
                                value={text}
                                onChange={handleTextChange}
                            ></textarea>
                        </p>
                        <div className="letter-footer">
                            <div className="left-sign">
                                <img src="https://i.pinimg.com/originals/aa/cd/7a/aacd7ac2d37d003f422b2cc1834f68eb.png" alt="hogwarts letter stamp" height="100px" />
                            </div>
                            <div className="right-name">
                                <img src={vishwa} alt="calligraphy-fonts" border="0" width="100%" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="letter-button">
                    <button className="button-54" >
                        Back
                    </button>
                </div>
            </div>

        </>
    );
}

export default Reply;