import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { Navigate } from 'react-router-dom';

const PrivateRout = ({ children }) => {
  const { user } = useAuth();
  if (!user || !user.biz) {
    return <Navigate to="/" />;
  }

  return children;
};

export default PrivateRout;
