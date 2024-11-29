import React from 'react';
import { motion } from 'framer-motion';
import './css/Home.css';

function Project1() {
  return (
    <motion.div 
      className="home-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div>
      <h1>Java 기반 온라인 쇼핑몰 시스템 개발</h1>
      <img src={`${process.env.PUBLIC_URL}/image/JavaProject2.jpg`} alt="online-shopping-system" />
      <img src={`${process.env.PUBLIC_URL}/image/JavaProject1.jpg`} alt="online-shopping-system" />
      <fieldset>
        <legend>프로젝트 개요</legend>
        <ol>
          <li><strong>프로젝트 목적</strong>: 고객이 원하는 상품을 검색하고, 장바구니에 추가하며, 결제까지 완료할 수 있는 통합 온라인 쇼핑몰 시스템 개발.</li>
          <li><strong>기술 스택</strong>: Java, Spring Framework, MySQL, Thymeleaf, JavaScript.</li>
          <li><strong>주요 기능</strong>: 상품 검색, 카테고리 분류, 사용자 인증 및 권한 관리, 장바구니 시스템, 결제 모듈 통합.</li>
          <li><strong>프로젝트 과정</strong>:
            - Spring Boot를 이용해 RESTful API 설계.<br/>
            - MySQL을 통한 데이터베이스 설계 및 관리로 제품, 사용자, 주문 정보를 체계적으로 처리.<br/>
            - Thymeleaf와 JavaScript를 사용해 반응형 프론트엔드 UI를 구축.
          </li>
          <li><strong>성과</strong>: 사용자 피드백을 반영하여 사용자 편의성 개선, 데이터 처리 속도 30% 향상.</li>
        </ol>
      </fieldset>
    </div>
    </motion.div>
  );
}

export default Project1;
