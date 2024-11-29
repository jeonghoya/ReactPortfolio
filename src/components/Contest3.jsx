import React from 'react';
import { motion } from 'framer-motion';
import './css/Home.css';

function Contest3() {
  return (
    <motion.div 
      className="home-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div>
      <h1>2024 제 24회 대학생 프로그래밍 경시대회</h1>
      <img src={`${process.env.PUBLIC_URL}/image/Contest3.jpg`} alt="contest3" />
      <fieldset>
        <legend>공모전 개요</legend>
        <ol>
          <li><strong>참가 자격</strong>: <br/> 
          - 대한민국 소재 대학교{'('}원{')'} 재학생으로 구성된 3명 이하의 1팀 + 코치 교수 1명
          </li>
          <li><strong>공모 주제</strong>: <br/>
          - 논리적 사고능력을 기반으로 하는 알고리즘 구현 <br/>
          </li>
          <li><strong>공모 일정</strong>: <br/>
          - 접수: 2024.09.13 ~ 2024.09.27 <br/>
          - 예선: 2024.10.25 ~ 10.26<br/>
          - 본선: 2024.11.22 리허설<br/>
          - 최종 본선: 2024년 11월 23일<br/>
          </li>
          <li><strong>시상 내역</strong>:<br/>
          - 대상 1 : 대통령상 / 상장 및 상금 500만원
          - 금상 1 : 국무총리상 / 상장 및 상금 300만원
          - 은상 3 : 과학기술정보통신부장관상 / 상장 및 상금 100만원
          - 동상 : 상장 및 상금 70만원
          * 한국지능정보사회진흥원장상 3 
          * 한국정보과학회장상 1
          - 장려상 : 상장 및 상금 50만원
          * 한국지능정보사회진흥원장상 4
          * 한국정보과학회장상 1
          </li>
        </ol>
      </fieldset>
    </div>
    </motion.div>
  );
}

export default Contest3;
