import React, { useState, useRef } from "react";
import './Letter.css';
import img from '../assets/christmas.png';
import aniket from '../assets/aniket.png';
import audioFile from '../assets/Relaxing.mp3';

const Letter = () => {

    const [text, setText] = useState(false);
    const audioRef = useRef(null);

    const scrollToSection = () => {
        const targetSection = document.getElementById("spell-section");

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: "smooth",
            });
        }

    };

    const handleRevealClick = () => {
        setText(true);

        const audio = audioRef.current || new Audio(audioFile);
        audioRef.current = audio;
    

        console.log(audio)
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
            <div className="letter-main">
                <div className="letter">
                    <div className='main-letter-div'>
                        <div className='hogwarts-crest'>
                            <img src="https://pixy.org/src/152/1523365.png" alt="Hogwarts crest" height="100px" />
                        </div>
                        <div className='Merry-christmas'>
                            <p>
                                <img src={img} alt="Merry Christmas" width="80%" />

                            </p>
                            <p className='dear'>Dear Vishwa,</p>

                            <p className="msg">This is an special letter wishing you merry christmas from Hogwarts by your special friend "Gajar". Also
                                this letter is special because, Is letter me kafi jagah pr hindi bhi use kari gayi hai and intentionally grammar and seplling mistakes hai 😂.
                            </p>
                            <p>

                            </p>
                            <hr />

                            <p className='letter-text'>
                                <div className="click-me" onClick={handleRevealClick}>
                                    {text ? <>
                                        <p className="actual">
                                            Dear Nautanki,
                                            We've been friends for more than a year now, baat krte krte 1 saal kahatam ho gaya sacchi pata hi nahi chala.
                                            And I'm glad that we become friends. We Had some really great time together, yaad hai ek saal pehle ham robofest ki preparation kr rhe the.
                                            jab jaivik ne teri surname "Patel" rakh di thi 😂? There are soo many memories we laughed, learnt and become better person.

                                            <br /> <br />
                                            Aur me tujhe dil sorry kehna cahta hun, Sorry ki mene narajgi me kabhi tera point nahi dekha, bina matlab ke taunt mare,
                                            sarcasm me baat kari, bina soche samje bol diya. I know mera baat krne ka tarika galat tha and mujhe is way 
                                            me apni narajgi express nahi krni thi. Vishwa please mujhe maaf krde aur tujhe jitna daatna ho please daat de, lekin tu ese naraz mt reh.
                                            you know jab tu ese naraz/sad hoti hai na mujhe apne aap pata chal jaata hai, aur wo mereko bilkul accha nahi lagta. vishwa chal ab pehle jese normal hoja, and sabse pehle
                                            mujhe jor se meri galti pe daatna. I know me pagal hun, bina soche samje bol diya, sorry. But sacchi vishwa <b> I adore you a lot, care for you
                                            a lot and respect you a lot. </b>
                                            <br /><br />

                                            I Know you thinking that, I'm already okay and chill. Also you don't have to do all this. See I just realized my mistake and I felt to share it with you.
                                            Vishwa ye mera first time hai "ye rishta kya kehlata hai" wala relation, to narazgi me mene galat way me express kar diya. Me hamesah cahta hun ki tu ekdam free 
                                            bird rahe, jo marzi ho wo kare. I know ki mujhe thoda hurt hua tha iska matlab ye nahi hai ki me tujhe sidha blame karu ki esa hi hona chaye, esa tujhe nahi krna tha, etc.
                                            Mera way of expressing is wrong and I'm sorry for that. 
                                            <br /><br />
                                            Also Vishwa when I say I trust you, I literally mean it. Last time bas bohat confusion aur ghusse me sab mix ho rha tha and galat way me bahar aa gaya aur mere actions 
                                            words se alag the. Meri wajah se tujhe hurt hua and I'm sorry for that. Vishwa this is the first time for me ki kisika itna accha friend bana hu and then thoda hurt hua ho, 
                                            to Wo hi sab confusion me galat tarike se bahar aa gaya, wrna me koi taunt and sarcasm mean nahi krta hun. And I'm glad ki hamare beech understanding kafi acchi hai,
                                            we've already kind of figured it out, and with this problem I hope our understanding and bonding will be more strong :)

                                            <br /><br />
                                            Also, I accept ki meri galti hai. jab mene nupur se share kiya tha, I should have told you ki mene sab bata diya hai and samajna chaye ki agar tujhe baad me pata chala to aur
                                            bura lag sakta hai. I'm sorry vishwa, esi situation me mene unintentionally hi sahi par tujse juth kaha, mene ese baat baat me ye keh diya tha ki "Mene sirf ye pucha tha ki, if she (you) is 
                                            okay or not". I know esi situation me mujhe esa nahi krna chaye tha, I'm sorry. Kyuki uske baad baat bohat badh sakti thi, but I'm glad ki tum sab (you, Nupur and Gungun) bohat acche ho ki sab 
                                            sambhal liya. 

                                            And yes us moment pe mujhe laga ki Nupur ko help ke liye puch sakta hun (to know if you're okay) isliye use message kiya tha, and sorry again tujhe bata dena chaye tha vishwa. 
                                            Thik wo sab to hota rehta hai ... 

                                            <br /><br />
                                           <b>Chal ek mast vaat kau </b> First mass bunk se le kar ab tak, we had hundreds of learnings and thousands of beautiful memories and grown together. tujhe yaad hai, jab me pehli baar
                                            tujhse ruth gaya tha and then tereko ek card diya tha, mujhe tab hi samaj jana chaye the ki naraz hoke ese baat nahi bandh krni hoti, jo bhi baat ho
                                            clear bata dena chaye. yaad hai mene kya likha tha us card me? vishwa, I want to thank you for making me better person and collage life more beautiful. All the time we had talked, movies,
                                            chess, garba, os-project, review paper, paneer chilli, waffle, long phone calls, endless chats, pata nahi kya kya . This is the literaly meaning of word 'Beautiful Memories' and
                                            you are the literal meaning of word 'Beautiful'.

                                            <br /> <br />
                                            You made me much better person, learned soo many lessons, Still abhi bhi me thoda pagal hi hun 🤦. And age koi pagalpan karu then ab to hi maar dena. 
                                            But sacche ... yarrr ... <b>It has been more than one year</b>. ... kya bol mei ....

                                            <br />
                                            Abhi bhi ham pagal hi hai 😂, aur pagal hi rahenge. Wese to meri har memories favourite hi hai lekin ye wali memory I found unique. yaad hai jab Tanmay sir hamara DP ka viva le rhe the,
                                            Sirf hamara viva baki tha. Pehle tera viva hua tb mene tereko shayad "Composite" pattern di thi and then mene tereko ishare me kaha ki "Facade" design pattern dena. And at that moment I realize ki
                                            mera to Facade ka assignment hi baki tha, fir sir ke saamne beht ke assignment kr rhe the ham. you know sir ne kaha tha "Kya farak padega, tum logo wese bhi bata doge" and acche marks rakh diye the. 
                                            
                                            <br /><br />
                                            I just wish ki age bhi ese hi acchi memories banti rahe, and when we look back <b>we can laugh and smile</b>  like this one. Btw tera koi favorite unique memories ho to batana, 
                                            chal bye abhi bohat lamba letter ho gaya lagta hai, aur ye christmas gift dekhna mat bhulna. 
                                        </p>
                                    </>
                                        :
                                        <>
                                            Click Here to reveal text!
                                        </>}
                                </div>
                            </p>
                            <div className="letter-footer">
                                <div className="left-sign">
                                    <img src="https://i.pinimg.com/originals/aa/cd/7a/aacd7ac2d37d003f422b2cc1834f68eb.png" alt="hogwarts letter stamp" height="100px" />
                                </div>
                                <div className="right-name">
                                    <img src={aniket} alt="calligraphy-fonts" border="0" width="100%" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="letter-button">
                        <button className="button-54" >
                            Want to give reply? Click Here!
                        </button>
                    </div> */}
                    <div className="letter-button">
                        <button className="button-54" onClick={scrollToSection}>
                            Your Christmas Gift!
                        </button>
                    </div>
                </div>
                <div className="spell-section" id="spell-section">
                    <h1>Speciall Crafted Spell for you</h1>


                    <main>


                        <div class="spell-card">
                            <div class="spell-card__inner">
                                <div class="spell-card__shape">
                                    <div class="spell-card__trace"></div>

                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 182.37 169.75">
                                        <clipPath id="clip-expecto">
                                            <path d="M218.62,114.53q0-2-.09-3.87c0-.46,0-.72,0-.72h0a53,53,0,0,0-1.22-9.76h0c-6.51-41.7-44.33-73.7-90-73.7-50.26,0-91,38.73-91,86.5,0,29.21,15.24,55,38.56,70.68q2,1.4,4.11,2.62l.35.2c.28.17,9.64,5.23,12.77,6.27.67.27,6.78,1.88,8.85,2.24,24.88,4.39,48.69-2.58,64-26.22A71.2,71.2,0,0,0,171.46,149c3.9-22.1-2.76-43.25-16-56.77,8.48,12.87,12.3,29.81,9.46,47.42-5.58,28.59-34.78,47.26-65.73,41.8a61,61,0,0,1-21.18-8A77.72,77.72,0,0,1,54.81,146.4c-.31-.77-2.94-7-3.69-9.43,0,.26-4.39-15.33-4.39-24,0-42.28,36.1-76.56,80.63-76.56,39.69,0,72.64,27.22,79.36,63.07a50.17,50.17,0,0,1,1.59,7.88c.68,3.45,1.54,8.42,2.14,14.09C211.39,148.75,195,183,195,183c3-2,10-7,10-7C218.13,165.33,218.8,127.69,218.62,114.53Z" />
                                        </clipPath>
                                        <path clip-path="url(#clip-expecto)" class="trace-motion" fill="none" stroke="#ddfffb" stroke-miterlimit="10" stroke-width="10" d="M155,92s49,94-49,97c0,0-62-6-65-78,0,0,7-63,54-73,0,0,29-18,76,4,0,0,58,26,41,111,0,0-9,31-17,30" transform="translate(-36.27 -26.47)" /></svg>

                                </div>
                                <div class="spell-card__name">
                                    <h5>Episkey Philla</h5>
                                    <section>
                                         <p><b>Episkey:</b> Heals minor injuries</p>
                                    <p><b>Phirlla:</b> It is an greek word for friend</p>
                                    <p>It's an special spell which heals for making bond stronger in frienship.
                                        As Episkey heals minor injuries, in the same way this spell helps healing minor ups and downs 
                                        in friendship.
                                        just say "Episkey Philla" 😂. 
                                     </p>
                                     <b>How to use:</b> <p>Just thik of memory of our friendship that make you smile or laugh and say
                                        "Episkey Philla".
                                     </p>
                                      <p>
                                        I Hope tujhe ye pasand aya ho, Kesa Laga wo batana! 
                                      </p>
                                    </section>
                                </div>
                            </div>
                        </div>


                    </main>
                </div>
            </div>
        </>
    );
}

export default Letter;