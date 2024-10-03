import React from 'react';
import style from './Footer.module.css';
import Frame from './Frame';
import logo from '../images/logo.png';
import LastBand from './LastBand';
import trademark from '../images/tm.png';
const Footer = () => {
    return (
        <footer id="footer" style={{overflow:'hidden'}} className={style.footer}>
            <Frame/>
            <div style={{width:'100vw',padding:"50px 95px"}}>
                <img src={logo} alt="logo"/>
            </div>
            <LastBand/>
            <div className={style.trademark}>
                <img src={trademark} alt="trademarl"/>
                <p>&nbsp;&nbsp;2024 Copyright, All right reserved</p>
            </div>
        </footer>
    );
}
export default Footer;