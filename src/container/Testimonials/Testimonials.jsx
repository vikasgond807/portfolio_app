import React, { useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { motion } from 'framer-motion';

import spotify from '../../assets/spotify.png'
import adidas from '../../assets/adidas.png'
import amazon from '../../assets/amazon.png'
import bolt from '../../assets/bolt.png'


import { AppWrap, MotionWrap } from '../../wrapper';
import './Testimonials.scss'

const testimonials=[

]

const Testimonials = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([
    {
      name:'Vikas',
      company:'Amazon',
      feedback:'Great Work ',
      imgurl:amazon
    },
    {
      name: 'Alex',
      company: 'adidas',
      feedback: 'Secret of code lies in Errors ',
      imgurl: adidas
    }
  ]);
  const [brands, setBrands] = useState([{
    imgUrl:spotify
  },
  {
    imgUrl:adidas
  },{
    imgUrl:amazon
  },{
    imgUrl:bolt
  }
]);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };
  return (
    <>
      {testimonials.length && (
        <>
          <div className="app__testimonial-item app__flex">
            <img src={(testimonials[currentIndex].imgurl)} alt={testimonials[currentIndex].name} />
            <div className="app__testimonial-content">
              <p className="p-text">{testimonials[currentIndex].feedback}</p>
              <div>
                <h4 className="bold-text">{testimonials[currentIndex].name}</h4>
                <h5 className="p-text">{testimonials[currentIndex].company}</h5>
              </div>
            </div>
          </div>

          <div className="app__testimonial-btns app__flex">
            <div className="app__flex" onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
              <HiChevronLeft />
            </div>

            <div className="app__flex" onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

      <div className="app__testimonial-brands app__flex">
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: 'tween' }}
            key={brand._id}
          >
            <img src={(brand.imgUrl)} alt={brand.name} />
          </motion.div>
        ))}
      </div>

    </>
  )
}

export default AppWrap(
  MotionWrap(Testimonials, 'app__testimonial'),
  'testimonials',
  'app__primarybg',
);