import React from 'react';
import style from './Footer.module.css';
import img1 from '../images/frames/Frame1.png';
import img2 from '../images/frames/Frame2.png';
import img3 from '../images/frames/Frame3.png';
import img4 from '../images/frames/Frame4.png';

const Frame = () => {
    return (
        <section className={style.band}>
            <div>
                <img src={img1} alt="image1" />
                <img src={img2} alt="image2" />
                <img src={img3} alt="image3" />
                <img src={img4} alt="image4" />
            </div>
        </section>
    );
}
export default Frame;