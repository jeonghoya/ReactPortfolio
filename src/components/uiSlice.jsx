import { createSlice, configureStore } from '@reduxjs/toolkit';
const initialState = {
  experiences: [
    {
      title: '백엔드 개발 인턴',
      company: 'BHX Tech',
      duration: '2021.06 - 2022.08',
      description: [
        { key: '프로젝트 목적', value: '중소기업의 효율적인 자원 관리를 위한 ERP 시스템 개발에 기여' },
        { key: '주요 역할', value: 'Java와 Spring Framework를 활용한 백엔드 로직 구현 및 MySQL 데이터베이스 설계' },
        { key: '업무 내용', value: `- RESTful API 활용하여 데이터 흐름 최적화
        - MySQL 쿼리를 통해 데이터 가공 및 통계 제공
        - 시스템 성능 튜닝 작업 진행` },
        { key: '성과', value: '시스템 반응 속도 15% 개선' }
      ]
    },
    {
      title: '프론트엔드 개발자',
      company: '로컬 카페',
      duration: '2023.02 - 2023.04',
      description: [
        { key: '프로젝트 목적', value: '웹사이트 리뉴얼로 사용자 경험 개선 및 매출 증대' },
        { key: '주요 역할', value: 'HTML, CSS, JavaScript를 사용한 웹 페이지 구현 및 UI 개선' },
        { key: '업무 내용', value: `- UI/UX 디자인 개선
        - 웹사이트 모바일 최적화
        - 페이지 로딩 속도 개선` },
        { key: '성과', value: '월 방문자 수 30% 증가' }
      ]
    },
    {
      title: '데이터 분석 인턴',
      company: 'DataX Solutions',
      duration: '2023.07 - 2023.09',
      description: [
        { key: '프로젝트 목적', value: '고객 이탈 예측을 위한 데이터 분석' },
        { key: '주요 역할', value: 'Python과 Pandas를 활용한 데이터 전처리 및 분석' },
        { key: '업무 내용', value: `- 고객 행동 데이터 분석 및 머신러닝 모델 지원
        - 데이터 시각화 및 통계 분석` },
        { key: '성과', value: '90% 정확도의 예측 모델 개발' }
      ]
    }
  ],
  volunteerAndTraining: [
    {
      title: '봉사활동',
      description: [
        '지역 사회복지관에서의 교육 봉사',
        '어린이와 청소년을 대상으로 한 학습 멘토링을 진행하여, 개별 학습 수준에 맞춘 맞춤형 학습 계획을 수립.',
        '아이들과 신뢰를 쌓으며 자존감을 높여주는 동시에 학습 동기를 유도하는 커뮤니케이션 스킬을 익힘.',
        '팀원들과 협력하여 봉사 프로그램의 효과를 분석하고, 프로그램 개선을 위한 피드백을 정리하여 복지관에 제출.'
      ],
    },
    {
      title: '해외 연수',
      description: [
        '글로벌 리더십 워크숍 참여',
        '국내외 다양한 배경의 참가자들과의 협업을 통해 문화 간 이해와 의사소통 능력을 키움.',
        '리더십 이론을 기반으로 팀워크 프로젝트를 수행하며 팀원들과의 갈등 해결, 책임 분배, 효율적인 시간 관리 등의 경험을 쌓음.',
        '워크숍 이후 개인 및 그룹으로 주어진 과제에 대한 발표를 통해, 프레젠테이션 능력과 타당한 근거를 바탕으로 논리적 주장을 펼치는 방법을 익힘.'
      ],
    },
  ],
  certificationsAndSpecs: [
    { title: '정보처리기사', description: '국가공인 자격증, IT 직무의 핵심 기초 지식을 쌓고 실무에서 필요한 데이터 처리 및 시스템 관리 기술 습득.' },
    { title: '컴퓨터 활용능력 1급', description: 'Excel 및 Access 고급 기능 숙지, 데이터 분석 및 데이터베이스 관리 능력 강화.' },
    { title: 'SQLD (SQL 개발자 자격)', description: 'SQL 최적화 및 데이터 모델링, 데이터 분석 업무에 필수적인 SQL 프로그래밍 능력 검증.' },
    { title: 'Python for Data Science (Coursera 수료)', description: '데이터 전처리와 머신러닝 기본 알고리즘 학습, Pandas, NumPy 등 데이터 과학 필수 라이브러리 활용.' },
    { title: 'TOEIC 850점', description: '해외 협업과 커뮤니케이션에 필요한 영어 독해 및 청취 능력 검증.' },
    { title: '공모전 입상', description: '대학생 대상 전국 데이터 분석 공모전에서 "최우수상" 수상, 데이터 분석 프로젝트로 실질적인 인사이트 도출 경험 축적.' },
    { title: '네트워크관리사2급', description: '데이터 통신 및 서버 관리에 대한 기본적인 실무 능력 검증' }
  ]
};

const CareerSlice = createSlice({
  name: 'career',
  initialState,
  reducers: {}
}); 
///////////////////////////////////////////////////////
const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({
        id: Date.now(),
        text: action.payload,
        completed: false,
      });
    },
    toggleTodo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});
///////////////////////////////////////////////////////
const loginSlice = createSlice({
  name: 'login',
  initialState: { isAuthenticated: false, user: null },
  reducers: {
    login: (state, action) => {
      if (action.payload === "kimjeongho") { // 실제 데이터 검증
        state.isAuthenticated = true;
        state.user = action.payload;
      }
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});
/////////////////////////////////////////////////////////
const store = configureStore({
  reducer: {
    todos: todoSlice.reducer,
    login: loginSlice.reducer,
    career: CareerSlice.reducer,
  },
});


export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;
export const { login, logout } = loginSlice.actions;
export const selectExperiences = (state) => state.career.experiences;
export const selectVolunteerAndTraining = (state) => state.career.volunteerAndTraining;
export const selectCertificationsAndSpecs = (state) => state.career.certificationsAndSpecs;
export default store;
