import React from 'react';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { selectExperiences } from './uiSlice';
import './css/Home.css';

function Career1() {
  const experiences = useSelector(selectExperiences);

  return (
    <motion.div 
      className="home-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <h1>Career Experiences</h1>
        {experiences.map((exp, index) => (
          <div key={index}>
            <h2>{exp.title}</h2>
            <fieldset>
              <legend>{exp.company} ({exp.duration})</legend>
              <ol>
                {exp.description.map((desc, idx) => (
                  <li key={idx}>
                    <strong>{desc.key}</strong>: {desc.value}
                  </li>
                ))}
              </ol>
            </fieldset>
            <br />
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default Career1;
