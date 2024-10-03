import React from 'react';
import ProjectData from './ProjectData';
import style from './Projects.module.css';
export default function Projects(){
  return (
    <section id="projects" className={style.sectioning}>
      <article>
          <div>
              <h2>Projects</h2>
              <p>These are some projects that demonstrate my precise attention to detail in developing websites according to the provided designs.</p>
          </div>
          <div className={style.cards}>
            {ProjectData.map((item, index) => (
              <card key={index}>
                <img src={item.image} alt="cardimg"/>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                  <section className={style.tags}>
                    {item.tags.map((tag, tagIndex) => (
                      <div className={style.tag} key={tagIndex}>{tag}</div>
                    ))}
                  </section>
                </div>
              </card>
            ))}
          </div>
      </article>
    </section>
  );
};
