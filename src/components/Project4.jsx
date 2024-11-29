import React from 'react';
import { motion } from 'framer-motion';
import './css/Home.css';

function Project4() {
  return (
    <motion.div 
      className="home-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <h1>AI 기반 추천 시스템 개발</h1>
        <img src={`${process.env.PUBLIC_URL}/image/AIProject1.jpg`} alt="ai-recommendation-system" />
        <img src={`${process.env.PUBLIC_URL}/image/AIProject2.jpg`} alt="ai-recommendation-system" />
        <fieldset>
          <legend>프로젝트 개요</legend>
          <ol>
            <li><strong>프로젝트 목적</strong>: 사용자의 선호도와 행동을 분석하여 맞춤형 추천을 제공하는 시스템 개발. 개인화된 추천을 통해 사용자 만족도를 높이고, 사이트의 트래픽과 참여도를 증가시키는 것을 목표.</li>
            <li><strong>기술 스택</strong>: Python, TensorFlow, Keras, Scikit-learn, Flask, React.</li>
            <li><strong>주요 기능</strong>: 실시간 데이터 수집 및 분석, 추천 알고리즘 기반 상품/콘텐츠 추천, 사용자 피드백을 통한 알고리즘 학습 및 성능 최적화.</li>
            <li><strong>프로젝트 과정</strong>:<br/>
              - TensorFlow와 Keras를 이용하여 딥러닝 기반 추천 알고리즘 설계 및 학습. 협업 필터링과 컨텐츠 기반 필터링을 혼합한 하이브리드 모델 사용.<br/>
              - Scikit-learn을 통해 데이터 전처리 및 모델 평가 수행. 추천 정확도 및 사용자 참여도를 높이기 위해 지속적인 하이퍼파라미터 튜닝.<br/>
              - Flask를 사용해 백엔드 서버 구축 및 API 개발, React 프론트엔드를 통해 사용자 인터페이스와 실시간 추천 결과를 시각화.<br/>
              - 사용자 피드백을 바탕으로 모델 성능 개선을 위한 반복 학습 설계, A/B 테스트를 통한 추천 품질 향상.
            </li>
            <li><strong>성과</strong>: 추천 정확도 15% 향상, 사용자 이탈률 20% 감소. 실시간 피드백 시스템을 통해 개인화된 추천이 가능하며, 사용자 클릭률이 프로젝트 초기 대비 30% 증가.</li>
          </ol>
        </fieldset>
      </div>
    </motion.div>
  );
}

export default Project4;
