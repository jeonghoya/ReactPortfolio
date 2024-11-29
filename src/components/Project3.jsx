import React from 'react';
import { motion } from 'framer-motion';
import './css/Home.css';

function Project3() {
  return (
    <motion.div 
      className="home-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div>
      <h1>Python 기반 데이터 분석 및 시각화 플랫폼 개발</h1>
      <img src={`${process.env.PUBLIC_URL}/image/PythonProject1.jpg`} alt="data-analysis-visualization" />
      <img src={`${process.env.PUBLIC_URL}/image/PythonProject2.jpg`} alt="data-analysis-visualization" />
      <fieldset>
        <legend>프로젝트 개요</legend>
        <ol>
          <li><strong>프로젝트 목적</strong>: 대규모 데이터를 실시간으로 수집 및 분석하고, 데이터를 직관적으로 시각화할 수 있는 플랫폼을 개발하여 의사 결정 과정 지원.</li>
          <li><strong>기술 스택</strong>: Python, Pandas, NumPy, Matplotlib, Plotly, Flask, SQLAlchemy, PostgreSQL.</li>
          <li><strong>주요 기능</strong>: 데이터 전처리 및 분석, 시계열 데이터 시각화, 대시보드 기반 사용자 인터페이스, SQL 데이터베이스 연동 및 데이터 관리.</li>
          <li><strong>프로젝트 과정</strong>:<br/>
            - Pandas와 NumPy를 사용하여 대규모 데이터 전처리 및 통계 분석 수행.<br/>
            - Plotly와 Matplotlib을 이용한 실시간 데이터 시각화 및 대시보드 제작.<br/>
            - Flask 웹 프레임워크를 통해 데이터 대시보드를 웹 인터페이스로 구현, SQLAlchemy로 PostgreSQL과 연동하여 사용자별 데이터 접근 관리.<br/>
            - 대시보드 상에서 필터 기능을 추가하여 유저가 원하는 특정 기간이나 변수에 따라 데이터 조회 및 시각화 가능하게 함.
          </li>
          <li><strong>성과</strong>: 데이터 분석 및 시각화 자동화로 리포트 작성 시간 40% 단축, 데이터 기반 인사이트 제공으로 업무 효율성 30% 향상.</li>
        </ol>
      </fieldset>
    </div>
    </motion.div>
  );
}

export default Project3;
