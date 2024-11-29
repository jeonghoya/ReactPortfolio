import React from 'react';
import { motion } from 'framer-motion';
import './css/Home.css';

function Contest2() {
  return (
    <motion.div 
      className="home-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div>
      <h1>신한과 함께하는 AI 챌린지, AI IDEATHON 공모전</h1>
      <img src={`${process.env.PUBLIC_URL}/image/Contest2.jpg`} alt="contest2" />
      <fieldset>
        <legend>공모전 개요</legend>
        <ol>
          <li><strong>참가 자격</strong>: <br/> 
          -AI를 활용한 미래금융에 관심 있는 청년{'('}대학생, 대학원생, 취업준비생 등{')'}
          </li>
          <li><strong>공모 주제</strong>: <br/>
          - 미래금융부문 '혁신적이고 고객이 편리한 AI' <br/>
          - 금융소비자보호 부문 '신뢰할 수 있고 고객을 보호하는 AI'
          </li>
          <li><strong>공모 일정</strong>: <br/>
          - 참가 신청 기간: 10월 2일 - 10월 31일 오후 6시까지 <br/>
          - 1차 합격자 발표: 2024년 11월 5일<br/>
          - 멘토링: 2024년 11월 8일<br/>
          - 최종 본선: 2024년 11월 21일<br/>
          </li>
          <li><strong>시상 내역</strong>:<br/>
          - 대상 1 : 1,500만원 <br/>

          - 최우수상 2  : 600만원 <br/>

          - 우수상 1 : 300만원 <br/>

          ※ 대상팀 채용 특전 <br/>

          * 신한은행, 신한카드, 신한투자증권, 신한라이프 신입 채용 서류심사전형 면제 <br/>

          * 2025년 1회 한함 - 우대 가능 채용전형 별도 공지
          </li>
        </ol>
      </fieldset>
    </div>
    </motion.div>
  );
}

export default Contest2;
