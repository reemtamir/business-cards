import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CardLogOut = () => {
  const navigate = useNavigate();
  const { LogOut } = useAuth();
  useEffect(() => {
    LogOut();
    navigate('/');
  }, []);

  return null;
};

export default CardLogOut;
