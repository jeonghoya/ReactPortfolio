
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './css/Navbar.css';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const location = useLocation();

  const handleMenuClick = (menu) => {
    // 클릭한 메뉴가 활성화되어 있으면 닫고, 아니면 해당 메뉴를 활성화
    setActiveMenu((prevMenu) => (prevMenu === menu ? null : menu));
  };

  const handleSubMenuClick = () => {
    setActiveMenu(null); // 서브 메뉴 클릭 시 닫기
  };

  useEffect(() => {
    setActiveMenu(null); // 라우트 변경 시 서브 메뉴 닫기
  }, [location.pathname]);

  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Home</Link>

      <div className="nav-item" onClick={() => handleMenuClick('intro')}>
        <span className="nav-link">Intro</span>
        <ul className={`submenu ${activeMenu === 'intro' ? 'visible' : ''}`}>
          <li onClick={handleSubMenuClick}><Link to="/resume">이력서</Link></li>
          <li onClick={handleSubMenuClick}><Link to="/selfintro">자기소개서</Link></li>
        </ul>
      </div>

      <div className="nav-item" onClick={() => handleMenuClick('project')}>
        <span className="nav-link">Projects</span>
        <ul className={`submenu ${activeMenu === 'project' ? 'visible' : ''}`}>
          <li onClick={handleSubMenuClick}><Link to="/project1">Project1</Link></li>
          <li onClick={handleSubMenuClick}><Link to="/project2">Project2</Link></li>
          <li onClick={handleSubMenuClick}><Link to="/project3">Project3</Link></li>
          <li onClick={handleSubMenuClick}><Link to="/project4">Project4</Link></li>
        </ul>
      </div>

      <div className="nav-item" onClick={() => handleMenuClick('contest')}>
        <span className="nav-link">Contests</span>
        <ul className={`submenu ${activeMenu === 'contest' ? 'visible' : ''}`}>
          <li onClick={handleSubMenuClick}><Link to="/contest1">Contest1</Link></li>
          <li onClick={handleSubMenuClick}><Link to="/contest2">Contest2</Link></li>
          <li onClick={handleSubMenuClick}><Link to="/contest3">Contest3</Link></li>
        </ul>
      </div>

      <div className="nav-item" onClick={() => handleMenuClick('career')}>
        <span className="nav-link">Career</span>
        <ul className={`submenu ${activeMenu === 'career' ? 'visible' : ''}`}>
          <li onClick={handleSubMenuClick}><Link to="/Career1">아르바이트 및 스펙</Link></li>
          <li onClick={handleSubMenuClick}><Link to="/Career2">사회봉사 및 연수</Link></li>
          <li onClick={handleSubMenuClick}><Link to="/Career3">자격증 및 그 외 스펙</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;






