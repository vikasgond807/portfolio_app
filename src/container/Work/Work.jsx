import React,{useState,useEffect} from 'react'
import {AiFillEye,AiFillGithub} from 'react-icons/ai'
import {motion} from 'framer-motion';

import { image } from '../../constants';

import {AppWrap} from '../../wrapper';
import './Work.scss'


const data=[
  {
    title:'Modern UI/UX website',
    description:'A portfolio app using ReactJS & SCSS',
    ImgUrl:image.about01,
    projectLink:'https://github.com/vikasgond807',
    codeLink: 'https://github.com/vikasgond807',
    tags:['UI/UX','XYZ']
  },
  {
    title: 'UI/UX',
    description: ' UI/UX design',
    ImgUrl: image.about02,
    projectLink: 'https://github.com/vikasgond807',
    codeLink: 'https://github.com/vikasgond807',
    tags: ['Web App', 'XYZ']
  },
  {
    title: 'UI/UX',
    description: ' UI/UX design',
    ImgUrl: image.about03,
    projectLink: 'https://github.com/vikasgond807',
    codeLink: 'https://github.com/vikasgond807',
    tags: ['Mobile App', 'XYZ']
  },
  {
    title: 'UI/UX',
    description: ' UI/UX design',
    ImgUrl: image.about04,
    projectLink: 'https://github.com/vikasgond807',
    codeLink: 'https://github.com/vikasgond807',
    tags: ['React JS', 'XYZ']
  },
  {
    title: 'UI/UX',
    description: ' UI/UX design',
    ImgUrl: image.about03,
    projectLink: 'https://github.com/vikasgond807',
    codeLink: 'https://github.com/vikasgond807',
    tags: ['ABC', 'XYZ']
  },
  {
    title: 'UI/UX',
    description: ' UI/UX design',
    ImgUrl: image.about01,
    projectLink: 'https://github.com/vikasgond807',
    codeLink: 'https://github.com/vikasgond807',
    tags: ['ABC', 'XYZ']
  }
]

const Work = () => {

  const [works, setWorks] = useState([])
  const [filterWork,setFilterWork]=useState([]);
  const [animateCard, setAnimateCard] = useState({y:0,opacity:1})
  const [activeFilter, setActiveFilter] = useState('All')



  useEffect(() => {

    // Fetch Query from Database
    // Instead using setimeout to make it async 
    setTimeout(() => {

      setWorks(data)
      setFilterWork(data)

    }, 1000);

  }, [])




  const handleWorkFilter=(item)=>{

    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);

  }


  
  
  return (
    <>

      <h2 className="head-text">My Creative <span>Portfolio</span> Section</h2>

      <div className="app__work-filter">
        {['UI/UX', 'Web App', 'Mobile App', 'React JS', 'All'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div
              className="app__work-img app__flex"
            >
              <img src={work.imgUrl} alt={work.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">

                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>

              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  )
}

export default AppWrap(Work,'work');