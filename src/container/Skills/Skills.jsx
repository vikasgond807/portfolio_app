import React, { useState, useEffect } from 'react'
import { AiFillEye, AiFillGithub } from 'react-icons/ai'
import { motion } from 'framer-motion';
// import Tooltip from '@mui/material/Tooltip'; Have to check for it once again

import { image } from '../../constants';
import python from '../../assets/python.png';
import react from '../../assets/react.png';
import node from '../../assets/node.png';
import javascript from '../../assets/javascript.png';
import redux from '../../assets/redux.png';
import git from '../../assets/git.png';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Skills.scss';

const skillsData = [
  {
    name: 'Python',
    icon: python ,
    bgColor: '',

  }
  ,
  {
    name: 'React',
    icon: react,
    bgColor: '',

  },
  {
    name: 'JavaScript',
    icon: javascript,
    bgColor: '',

  },
  {
    name: 'Node',
    icon: node,
    bgColor: '',

  },
  {
    name: 'Redux',
    icon: redux,
    bgColor: '',

  },
  {
    name: 'Git',
    icon:git,
    bgColor: '',

  }
];

// const experienceData = [
//   {
//     year:'2021',
//     name: 'Software Tester',
//     company: 'TCET',
//     desc: 'I worked as a software testing Intern at TCET',
//   },

// ];

const experienceData=[
  {
    year:'2021',
    works:[
      {
        name:'Software Tester',
        company:'TCET',
        desc:'Working as a software Testing Intern'
      },
      {
        name:'React Developer',
        company:'Multiplexer',
        desc:'Designed & developed dashboard for parking owners'
      }

    ]
  }
]

const Skills = () => {

  const [skills, setSkills] = useState([])
  const [experiences, setExperiences] = useState([])

  useEffect(() => {

      setSkills(skillsData);
      setExperiences(experienceData);

  }, [])

  return (
    <>
      <h2 className='head-text'>Skills & Experience</h2>

      <div className="app__skills-container">

        <motion.div className='app__skills-list'>

          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}

        </motion.div>

        <div className="app__skills-exp">
          {experiences.map((experience) => (
            <motion.div
              className="app__skills-exp-item"
              key={experience.year}
            >
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
              {experience.works.map((work)=>(

              
                <>
                <motion.div
                whileInView={{opacity:[0,1]}}
                transition={{duration:0.5}}
                className='app__skills-exp-work'
                data-tip
                data-for={work.name}
                key={work.name}
                >
                  <h4 className='bold-text'>{work.name}</h4>
                  <p className='p-text'>{work.company}</p>
                  <p className='p-text'>{work.desc}</p>
                </motion.div>

                





                
                </>

              ))}
              </motion.div>
            </motion.div>
          ))}
        </div>


      </div>
    </>
  )
}

export default AppWrap(MotionWrap(Skills, 'app__skills'), 'skills', "app__whitebg");             