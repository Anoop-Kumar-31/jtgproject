import React from 'react';
import '../App.css';
import hero from '../images/hero.png';
import arrow from '../images/BUTTON/Vector.png';
import style from './Main.module.css';
export default function Main(){
  return (
    <section class={style.main}>
            <section>
                <div class={style.innerLeft}>
                    <h1> I'm Anoop Kumar <br/><span>Front-end</span> Developer</h1>
                    <p>I have a passion for creating elegant and innovative websites, where I often develop custom logic for animations and functionality. My curiosity drives me to understand the intricacies behind each process I work on.</p>
                    <a href="https://myportfolio-kto7.onrender.com/"><button>HIRE ME <img src={arrow} alt="arrow"/></button></a>
                </div>
            </section>
            <section id="home">
                <img src={hero} alt="hero"/>
            </section>
        </section>
  );
}
