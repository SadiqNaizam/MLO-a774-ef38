import React from 'react';
import AuthLayout from '../components/layout/AuthLayout';
import LoginForm from '../components/Login/LoginForm';

/**
 * LoginPage serves as the main view for user authentication.
 * It utilizes AuthLayout to provide a consistent, centered layout
 * and embeds the LoginForm component for handling user input and submission.
 */
const LoginPage: React.FC = () => {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
};

export default LoginPage;
