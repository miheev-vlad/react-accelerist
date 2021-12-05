import React from 'react';
import { Link } from 'react-router-dom';

export const LoginPage = () => {
  return (
    <div>
      LoginPage
      <Link to="/auth/register">Register</Link>
    </div>
  );
};
