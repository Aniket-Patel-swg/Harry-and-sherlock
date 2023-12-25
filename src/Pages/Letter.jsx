import React from "react";
import './Letter.css';
import img from '../assets/aplogoy.png';

const Letter = () => {

    

    return (
        <>
            <div className="letter">
                <div className='main-letter-div'>
                    <div className='hogwarts-crest'>
                        <img src="https://pixy.org/src/152/1523365.png" alt="Hogwarts crest" height="100px" />
                    </div>
                    <div className='Merry-christmas'>
                        <p>
                            <img src={img} alt="Merry Christmas" width="80%" />

                        </p>
                        <p className='dear'>Dear Friend,</p>
                        <p>
                            After a thorough inspection where we couldn't find any suspicion of  cheating, we are happy to give you your test score. This test scores comes from Hogwarts School       of Witchcraft and Wizardry.
                        </p>
                        <hr />

                        <p className='letter-text'>
                            Text goes here!
                        </p>
                        <div className="letter-footer">
                            <div className="left-sign">
                                <img src="https://i.pinimg.com/originals/aa/cd/7a/aacd7ac2d37d003f422b2cc1834f68eb.png" alt="hogwarts letter stamp" height="100px" />
                            </div>
                            <div className="right-name">
                                <img src="https://fontmeme.com/permalink/210106/48367f9fb0ba4ceaabbc8d0020e8c094.png" alt="calligraphy-fonts" border="0" width="100%" />
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        </>
    );
}

export default Letter;