import React from 'react';
import style from './Skills.module.css';
const SkillCard = ({skills}) => {
  return (
    <div className={style.skillContainer}>
      {skills.length > 0 && <h3>{skills[0].skillType}</h3>}
      {
        skills.map((skill,index)=>(
          <div className={style.skill} key={index}>
            <div className={style.skillHeader}>
              <span>{skill.skillName}</span>
              <span>{skill.percentage}%</span>
            </div>
            <div className={style.progressBar}>
              <div className={style.progress} style={{width:`${skill.percentage}%`}}></div>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default SkillCard;