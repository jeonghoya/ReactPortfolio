import React from 'react';
import { motion } from 'framer-motion';
import './css/Home.css';

function Contest() {
  return (
    <motion.div 
      className="home-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Welcome to My Black & White Site</h1>
      <p>This is the home section of a stunning React site in grayscale.</p>
    </motion.div>
  );
}

export default Contest;
