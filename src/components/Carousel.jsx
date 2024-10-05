import React, { useState, useEffect } from "react";
import star from "../images/Star.png";
import CarouselData from "./CarouselData";
import style from './Recommendations.module.css';
// import "../App.css";
const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const [cardWidth, setCardWidth] = useState(350);

  useEffect(() => {
    const updateCardWidth = () => {
      if (window.innerWidth < 1000) {
        setCardWidth(window.innerWidth * 0.665);
      } else {
        setCardWidth(350);
      }
    };
    updateCardWidth();
    window.addEventListener('resize', updateCardWidth);
    return () => window.removeEventListener('resize', updateCardWidth);
  }, []);
  const handlePointClick = (index) => {
    setActiveIndex(index);
  };
  const handleScroll = (event) => {
    const isAtStart = activeIndex === 0;
    const isAtEnd = activeIndex === CarouselData.length - 1;
    if (!(isAtStart && event.deltaY < 0) && !(isAtEnd && event.deltaY > 0)) {
      event.preventDefault();
    }

    if (event.deltaY > 0) {
      if (activeIndex < CarouselData.length - 1) {
        setActiveIndex((prevIndex) => prevIndex + 1);
      }
    } else {
      if (activeIndex > 0) {
        setActiveIndex((prevIndex) => prevIndex - 1);
      }
    }
  };
  useEffect(() => {
    const carouselContainer = document.getElementById("carouselContent");
    carouselContainer.addEventListener("wheel", handleScroll);
    return () => {
      carouselContainer.removeEventListener("wheel", handleScroll);
    };
  });

  const getTranslateX = () => {
    return -((activeIndex - 2) * cardWidth);
  };

  return (
    <div className={style.slides}>
      <div className={style.recommCards} id="carouselContent">
        {CarouselData.map((data, index) => (
          <div
            className={style.recommCard}
            key={`card` + (index + 1)}
            style={{ transform: `translateX(${getTranslateX()}px)` }}
          >
            <div className={style.stars}>
              {[1, 2, 3, 4, 5].map((starIndex) => <img src={star} alt="" key={starIndex} /> )}
            </div>
            <section>
              <h4>{data.title}</h4>
              <p>{data.content}</p>
            </section>
            <section>
              <img src={data.profileImg} alt="" />
              <div>
                <h5>{data.name}</h5>
                <p>{data.role}</p>
              </div>
            </section>
          </div>
        ))}
      </div>
      <div className={style.points} id="pointsContainer">
        {CarouselData.map((data, index) => (
          <div
            className={`${style.point} ${activeIndex === index && style.pointActive}`}
            key={index}
            data-index={index}
            onClick={() => handlePointClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
