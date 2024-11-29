import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { login, logout } from './uiSlice';
import './css/Home.css';

function Home() {
  const dispatch = useDispatch();

  // 로그인 관련 상태
  const [username, setUsername] = useState('');
  const isAuthenticated = useSelector((state) => state.login.isAuthenticated);
  const user = useSelector((state) => state.login.user);

  // 로그인 핸들러
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(username));
    setUsername('');
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <motion.div
      className="home-section2"
      initial={{ opacity: 0, y: 50, pointerEvents: 'none' }}
      whileInView={{ opacity: 1, y: 0, pointerEvents: 'auto' }}
      transition={{ duration: 0.5 }}
      onClick={(e) => e.stopPropagation()}
    >

      {/* 로그인 상태가 아닌 경우 */}
      {!isAuthenticated ? (
        <div className="login-section">
          <h1>!WARNING!</h1>
          <h3>로그인 하지 않으면 아무것도 볼 수 없음.</h3>
          <h2>Please Login</h2>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
            className="login-input"
          />
          <button onClick={handleLogin} className="login-button">
            Login
          </button>
        </div>
      ) : (
        // 로그인 상태일 때 포트폴리오 화면
        <div className="title-overlay">
          <h1>끈기 있고 창의적인 개발자</h1>
          <h1>{user}의 포트폴리오</h1>
          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
        </div>
      )}
    </motion.div>
  );
}

export default Home;
