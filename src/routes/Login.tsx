import React from 'react';
import LoginForm from '../modules/Authentication/View/LoginForm';

const Login = () => {
  return (
    <main id="login-page">
      <h1 className="text-center">Welcome back!</h1>
      <LoginForm />
    </main>
  );
};

export default Login;