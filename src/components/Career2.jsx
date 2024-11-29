import React from 'react';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { selectVolunteerAndTraining } from './uiSlice';
import './css/Home.css';

function Career2() {
  const volunteerAndTraining = useSelector(selectVolunteerAndTraining);

  return (
    <motion.div
      className="home-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <h1>사회봉사 및 연수 경험</h1>
        <fieldset>
          <legend>경력 사항</legend>
          <ol>
            {volunteerAndTraining.map((item, index) => (
              <li key={index}>
                <h2>
                  <strong>{item.title}</strong>
                </h2>
                <ul>
                  {item.description.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </fieldset>
      </div>
    </motion.div>
  );
}

export default Career2;
