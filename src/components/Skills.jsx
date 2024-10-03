import React from 'react';
import style from './Skills.module.css';
import SkillCard from './SkillCard';
import { SkillsData as initialSkills } from './SkillsData';
import { useState } from 'react';
const Skills = () => {
    const [skills, setSkills] = useState(initialSkills);
    const [visible, setVisible] = useState(false);

    const handleAddSkill = (event) => {
        event.preventDefault();
        const newSkill = {obj: []};
        for (let i = 1; i <= initialSkills.length; i++) {
            const skillName = document.getElementById(`skill${i}Name`).value;
            const skillPercentage = document.getElementById(`skill${i}Percentage`).value;
            if (skillName && !skillPercentage) {
                alert(`Proficiency level is required for ${skillName}.`);
                return;
            }
            if (skillName && skillPercentage) {
                newSkill.obj.push({ skillName, percentage: skillPercentage, skillType: document.getElementById('skilltype').value });
            }
        }
        if(newSkill.obj.length === 0) {
            alert('Please enter at least one skill.');
            return;
        }
        setSkills([...skills, newSkill]);
        setVisible(false);
    };
    return (
        [ visible && 
        <div className={style.popup}>
            <form onSubmit={handleAddSkill}>
                <h1>Add Skill</h1>
                <label htmlFor="text">Domain</label>
                <input type="text" id="skilltype" name="text"  required/>
                <label htmlFor="text">Skills</label>
                <section className={style.skillForm}>
                    <p>Skill</p>
                    <p>Proficiency (<i>%</i>)</p>
                    <input type="text" id='skill1Name' />
                    <input type="text" id="skill1Percentage"/>
                    <input type="text" id='skill2Name'/>
                    <input type="text" id="skill2Percentage"/>
                    <input type="text" id='skill3Name'/>
                    <input type="text" id="skill3Percentage"/>
                    <input type="text" id='skill4Name'/>
                    <input type="text" id="skill4Percentage"/>
                    <input type="text" id='skill5Name'/>
                    <input type="text" id="skill5Percentage"/>
                </section>
                <section className={style.buttons}>
                    <button onClick={() => setVisible(!visible)}>CANCEL</button>
                    <button type="submit">ADD SKILL</button>
                </section>
            </form>
        </div>
        ,<section id="skills" className={style.sectioning}>
            <article>
                <div>
                    <h2>Skills & Langauges</h2>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum</p>
                </div>
                <div className={style.cards}>
                    {skills.map((skill, index) => (
                        <SkillCard key={index} skills={skill.obj} />
                    ))}
                </div>
            </article>
            <button onClick={()=>setVisible(!visible)}>ADD SKILL</button>
        </section>
        ]
    )
}

export default Skills;