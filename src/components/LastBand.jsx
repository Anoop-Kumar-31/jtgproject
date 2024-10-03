import React from 'react';
import style from './Footer.module.css';
import RatingsData from './RatingsData';
import fb from '../images/media/Facebook.png';
import insta from '../images/media/Instagram.png';
import linkedin from '../images/media/LinkedIn.png';
const LastBand = () => {
    return (
        <section className={style.footersBottom}>
            <div className={style.ratings}>
                {RatingsData.map((item,index)=>
                <div key={index}>
                <img src={item.image} alt={`${item.name}`}/>
                <p>{item.rating}/{item.total} Rating on {item.name}</p>
                </div>
                )}
            </div>
            <div className={style.details}>
                <ul>
                    <h2>Quick Links</h2>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#education">Education</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#recommendations">Recommendations</a></li>
                </ul>
                <ul>
                    <h2>Portfolio</h2>
                    <li>Frontend Development</li>
                    <li>Backend Development</li>
                    <li>Website Design</li>
                    <li>Machine Learning</li>
                    <li>Problem Solving & DSA</li>
                </ul>
                <ul>
                    <h2>Connect</h2>
                    <li><img src={linkedin} alt="linkedIN" /></li>
                    <li><img src={insta} alt="instagram" /></li>
                    <li><img src={fb} alt="facebook" /></li>
                </ul>

            </div>
        </section>
    );
}

export default LastBand;