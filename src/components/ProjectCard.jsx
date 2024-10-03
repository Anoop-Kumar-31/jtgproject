import React from 'react';
import '../App.css';
import style from './Projects.module.css';

export default function ProjectCard({ project }){
  return (
    <div className={style.card}>
      <img src={project.image} alt="Project"/>
      <div>
        <h4>{project.title}</h4>
        <p>{project.description}</p>
        <section className={style.tags}>
          {project.tags.map((tag, index) => (
            <div className={style.tag} key={index}>{tag}</div>
          ))}
        </section>
      </div>
    </div>
  );
};
