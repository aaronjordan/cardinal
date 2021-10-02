import React from 'react';
import LoginForm from '../modules/Authentication/View/LoginForm';

const RegisterPage = () => {
  return (
    <main id="login-page">
      <h1 className="text-center">Welcome to Cardinal!</h1>
      <LoginForm intent="register" />
      <p className="privacy-disclaimer">
        By registering, you agree to our totally written Privacy Policy.
      </p>
    </main>
  );
};

export default RegisterPage;