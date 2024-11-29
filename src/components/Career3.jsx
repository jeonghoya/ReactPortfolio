import React from 'react';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { selectCertificationsAndSpecs } from './uiSlice';
import './css/Home.css';

function Career3() {
  const certificationsAndSpecs = useSelector(selectCertificationsAndSpecs);

  return (
    <motion.div
      className="home-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <h1>자격증 및 그 외 스펙</h1>
        <fieldset>
          <legend>자격 및 스펙</legend>
          <ol>
            {certificationsAndSpecs.map((item, index) => (
              <li key={index}>
                <strong>{item.title}</strong> - {item.description}
              </li>
            ))}
          </ol>
        </fieldset>
      </div>
    </motion.div>
  );
}

export default Career3;
