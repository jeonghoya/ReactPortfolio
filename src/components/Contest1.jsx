import React from 'react';
import { motion } from 'framer-motion';
import './css/Home.css';

function Contest1() {
  return (
    <motion.div 
      className="home-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div>
      <h1>제 6회 2024 POSTHEC X OIBC CHALLENGE</h1>
      <img src={`${process.env.PUBLIC_URL}/image/Contest1.jpg`} alt="contest1" />
      <fieldset>
        <legend>공모전 개요</legend>
        <ol>
          <li><strong>참가 자격</strong>: <br/> 
          - 전국 대학생, 대학원생<br/>
          - 개인 또는 팀으로 최대 5명 참가 가능
          </li>
          <li><strong>공모 주제</strong>: <br/>
          - 기술로 전력 시장을 개방하는 기업 H Energy와 POSTHEC 오픈이노베이션 빅데이터 센터, 
          산업 인공지능 프로그램이 함께 미래 전력 시장을 이끌어갈 인재를 발굴, 지원하기 위해 
          대학 및 대학원생 대상으로 제 6회 OIBC CHALLENGE를 주최.
          </li>
          <li><strong>공모 일정</strong>: <br/>
          - 참가 신청 기간: 10월 1일 - 11월 8일 <br/>
          - 사전 참여 기간: 10월 23일 - 11월 8일 <br/>
          - 대회 기간: 11월 11일 - 11월 15일 <br/>
          - 발표평가{'('}대회 성적 상위 7팀{')'}: 11월 21일 목요일 9:30 - 12:30<br/>
          - 시상식{'('}대상 및 우수상 수상팀{')'}: 11월 29일 금요일 오후{'('}장소-POSTHEC OIBC, 교통비 별도 제공{')'}<br/>
          </li>
          <li><strong>시상 내역</strong>:<br/>
          - 대상 1팀: 400만원 <br/>
          - 우수상 2팀: 각 200만원 <br/>
          - 장려상 4팀: 각 100만원 <br/>
          - 참가상 10팀: 각 20만원
          </li>
          <li><strong>미션</strong>: 
          – "재생에너지의 안정적인 전력시장 도입을 위해 국내에서는 전력시장 선진화를 진행하고 있고, 제주 시범사업을 통해 전력시장 제도개편 방안에 대한 검증을 진행중에 있음. 해당 시범사업을 통해 개편된 제주 전력시장에서는 마이너스{'('}-{')'} 전기가격이 형성될 수 있고, 전기가격의 변동성이 기존의 전력시장 대비 클 것으로 예상됨. 이에 전기가격을 적절히 예측하는 방안을 개발하고자 함."
          </li>
        </ol>
      </fieldset>
    </div>
    </motion.div>
  );
}

export default Contest1;
