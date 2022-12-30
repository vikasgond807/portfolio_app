import React,{useState,useEffect} from 'react';
import { motion } from 'framer-motion';
import './About.scss';
import { image } from '../../constants';
import { AppWrap ,MotionWrap } from '../../wrapper';

const About = () => {
  const abouts =[
    {title:'Web Development',description:'Im a React Developer',ImgUrl:image.about01},
    { title: 'Python Development', description: 'Im a React Developer', ImgUrl:image.about02},
    { title: 'Machine Learning', description: 'Im a React Developer', ImgUrl:image.about03},
    { title: 'Machine Learning', description: 'Im a React Developer', ImgUrl:image.about04 },


  ]
  return (
    <div>
      <h2 className='head-text'> I Know That
      
      <span style={{color:'navy'}}> Good Development </span><br/>
      Means
      <span style={{color:'navy'}}> Good Business</span>
      
       </h2>


       <div className="app__profiles">

        {abouts.map((about,index) => (
          <motion.div 
          whileHover={{scale:1.4}}
          transition={{duration:0.5,type:'tween'}}

          className='app__profile-item'
          key={about.title+index}
          >
          <img src={about.ImgUrl} alt={about.title}/>

          <h2 className='bold-text' style={{marginTop:20}}>{about.title}</h2>
          <p className='p-text' style={{marginTop:20}}>{about.description}</p>

          </motion.div>
      ))}

       </div>
    </div>
  )
}

export default AppWrap(MotionWrap(About,'app__about'),'about',"app__whitebg");