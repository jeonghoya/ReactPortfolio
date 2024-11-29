import React from 'react';
import { motion } from 'framer-motion';
import './css/Home.css';
import './css/Resume.css'

function Resume() {
  return (
    <motion.div 
      className="home-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
    <div id = "resume">
	  <em>1.기초 자료</em>
	  <table>
	    <tr>
	      <td  rowspan="6" className="photo-cell">
        <img src={`${process.env.PUBLIC_URL}/image/김정호사진.jpg`} alt="증명사진" />
        </td>
	      <td  bgcolor="orange">성 명: 김정호</td>
	      <td></td>
  		  <td  bgcolor="orange">영 문: Kim jeongho</td>
		  <td></td>
	    </tr>
	    <tr>
  	 	  <td bgcolor="orange">주민등록번호: 020409-3******</td>
	 	  <td colspan="3"></td>
  	    </tr>
	    <tr>
	  	  <td bgcolor="orange">E-mail: kimjeongho466@gmail.com</td>
	  	  <td colspan="3"></td>
	    </tr>
	    <tr>
	  	  <td bgcolor="orange">전화번호: 010-9647-0409</td>
	  	  <td></td>
	  	  <td bgcolor="orange">휴대폰: 010-9647-0409</td>
	  	  <td></td>
	    </tr>
	    <tr>
	      <td bgcolor="orange">우편번호: 63062</td>
	  	  <td></td>	
	  	  <td bgcolor="orange">비상연락처: 010-1193-1123</td>
	  	  <td></td>
	  	</tr>
	  	<tr>
	  	  	<td bgcolor="orange">주소: 제주특별자치도 제주시 애월읍 광성로 215-5</td>
	  	  	<td colspan="3"></td>
	  	</tr>	
	  </table>

      <em>2.학력사항</em>
      <table id='resume'>
      <tr>
	    <th>기간</th>
	    <th>상세내용</th>
	    <th>비고</th>
      </tr>
	    <tr>
	  	  <td>초등학교: 2009~2014</td> <td>광령초등학교</td> <td></td>
	    </tr>
	    <tr>
	    	<td>중학교: 2015~2017</td> <td>노형중학교</td> <td></td>
	    </tr>
	    <tr>
	    	<td>고등학교:2018~2020</td>	<td>제주제일고등학교</td> <td></td>
	    </tr>
	    <tr>
	    	<td>대학교: 2021~ </td> <td>가천대학교</td> <td></td>
	    </tr>
    </table>

    <em>3. 경력사항</em>
    <table id='resume'>
      <tr>
        <th bgcolor="orange">기간</th>
		<th bgcolor="orange">관련</th>
      </tr>
	  <tr>
	    <td>2018~2020</td> <td>제주제일고 수학동아리 부장</td>
	  </tr>
	  <tr>
	    <td>2022~2023</td> <td>육군 3기갑여단 근무</td>
	  </tr>
	  <tr>
	    <td>2023~2024</td> <td>프리랜서 개발자</td>
	  </tr>
	  <tr>
	    <td>2024~</td> <td>가천대 코딩 동아리 PM</td>
	  </tr>
    </table>

	<em>4. 개인능력 및 장단점</em>
<table>
  <tr height="30">
    <td rowspan="2" bgcolor="orange">자격증 및 포상</td>
    <td colspan="3">정보처리기사</td>
    <td colspan="1">한국산업인력공단</td>
  </tr>
  <tr height="30"> 
    <td colspan="3">운전면허증</td>
    <td colspan="1">경찰청</td>
  </tr>
  <tr height="30"> 
    <td rowspan="1" bgcolor="orange">컴퓨터능력</td>
    <td colspan="2">상</td>
  </tr>
  <tr height="30"> 
    <td rowspan="1" bgcolor="orange">취미</td>	
    <td colspan="4">기타 연주, 풋살, 독서</td>
  </tr>
  <tr height="30"> 
    <td rowspan="1" bgcolor="orange">특기</td>
    <td colspan="4">코딩, 아이디어 공장</td>
  </tr>
</table>
		<div id="pledge">
			<br/>위의 사실이 틀림이 없음을 서약합니다.<br/>
      작성일 2023년 10월 25일<br/>
    	작성자 (인) 
		</div>
  </div>
    </motion.div>
  );
}

export default Resume;
