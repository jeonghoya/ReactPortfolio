import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function ProtectedRoute({ children }) {
  const isAuthenticated = useSelector((state) => state.login.isAuthenticated);

  // 인증되지 않은 경우 로그인 페이지로 리다이렉트
  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  // 인증된 경우 자식 컴포넌트 렌더링
  return children;
}

export default ProtectedRoute;
