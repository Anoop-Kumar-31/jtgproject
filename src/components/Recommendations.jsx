import React from 'react';
import Carousel from './Carousel';
import style from './Recommendations.module.css';

const Recommendations = () => {
  return (
    <section id="recommendations" className={style.sectioning}>
    <article>
        <div>
          <h2>Recommendations</h2>
          <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum</p>
        </div>
        <Carousel/>
      </article>
    </section>
  );
};

export default Recommendations;
