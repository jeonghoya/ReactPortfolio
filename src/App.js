import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Resume from './components/Resume';
import SelfIntro from './components/SelfIntro';
import Project1 from './components/Project1';
import Project2 from './components/Project2';
import Project3 from './components/Project3';
import Project4 from './components/Project4';
import Contest1 from './components/Contest1';
import Contest2 from './components/Contest2';
import Contest3 from './components/Contest3';
import Career1 from './components/Career1';
import Career2 from './components/Career2';
import Career3 from './components/Career3';
import ProtectedRoute from './components/ProtectedRoute'; // 추가
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/resume" element={<ProtectedRoute><Resume /></ProtectedRoute>} />
          <Route path="/selfintro" element={<ProtectedRoute><SelfIntro /></ProtectedRoute>} />
          <Route path="/project1" element={<ProtectedRoute><Project1 /></ProtectedRoute>} />
          <Route path="/project2" element={<ProtectedRoute><Project2 /></ProtectedRoute>} />
          <Route path="/project3" element={<ProtectedRoute><Project3 /></ProtectedRoute>} />
          <Route path="/project4" element={<ProtectedRoute><Project4 /></ProtectedRoute>} />
          <Route path="/contest1" element={<ProtectedRoute><Contest1 /></ProtectedRoute>} />
          <Route path="/contest2" element={<ProtectedRoute><Contest2 /></ProtectedRoute>} />
          <Route path="/contest3" element={<ProtectedRoute><Contest3 /></ProtectedRoute>} />
          <Route path="/career1" element={<ProtectedRoute><Career1 /></ProtectedRoute>} />
          <Route path="/career2" element={<ProtectedRoute><Career2 /></ProtectedRoute>} />
          <Route path="/career3" element={<ProtectedRoute><Career3 /></ProtectedRoute>} />
          
        </Routes>
        <footer>
           Copyright 2024. all rights reserved.
           <br />
           연락처 : 010-9647-0409 <br/>
           이메일: kimjeongho466@gmail.com
        </footer>
      </div>
    </Router>
  );
}

export default App;
