import React from 'react';
import { motion } from 'framer-motion';
import './css/Home.css';

function Project2() {
  return (
    <motion.div 
      className="home-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div>
      <h1>C언어 기반 실시간 센서 데이터 수집 및 모니터링 시스템 개발</h1>
      <img src={`${process.env.PUBLIC_URL}/image/CProject1.jpg`} alt="sensor-data-monitoring-system" />
      <img src={`${process.env.PUBLIC_URL}/image/CProject2.jpg`} alt="sensor-data-monitoring-system" />
      <fieldset>
        <legend>프로젝트 개요</legend>
        <ol>
          <li><strong>프로젝트 목적</strong>: IoT 환경에서 실시간으로 센서 데이터를 수집하고, 이를 기반으로 모니터링 및 분석할 수 있는 시스템 개발. 특히 제한된 리소스 환경에서 성능 최적화를 목표로 함.</li>
          <li><strong>기술 스택</strong>: C, Embedded C, FreeRTOS, UART 통신, SPI/I2C 인터페이스, SQLite.</li>
          <li><strong>주요 기능</strong>: 데이터 수집 및 필터링, 오류 감지 및 알림, 데이터 저장 및 분석, LCD 디스플레이에 실시간 시각화.</li>
          <li><strong>프로젝트 과정</strong>:<br/>
            - 임베디드 시스템 환경에서의 리소스 제약을 고려하여 FreeRTOS 기반 실시간 운영체제를 활용한 멀티태스킹 구현.<br/>
            - UART 통신을 통해 센서에서 수집된 데이터를 실시간으로 수신하고, SPI/I2C 프로토콜을 사용해 각 모듈 간 통신 설계.<br/>
            - 수집된 데이터를 SQLite에 저장하여 내장형 데이터베이스 관리 및 조회 기능을 제공.<br/>
            - LCD 디스플레이를 통해 센서 상태 및 데이터 변화 추이를 시각화하여 직관적인 UI 제공.
          </li>
          <li><strong>성과</strong>: 시스템의 데이터 처리 속도를 기존 대비 25% 개선, 메모리 사용량을 15% 절감하여 저사양 환경에서도 안정적 동작을 보장.</li>
        </ol>
      </fieldset>
    </div>
    </motion.div>
  );
}

export default Project2;
