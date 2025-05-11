
import React from 'react';
import AppLayout from '@/components/layout/AppLayout';
import LoginForm from '@/components/auth/LoginForm';

const Login = () => {
  return (
    <AppLayout>
      <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <div className="mx-auto h-12 w-12 text-ewaste-green-500">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21,15a1,1,0,0,0-1-1h-.764l-.9-2.708A1,1,0,0,0,17.439,11H16a1,1,0,0,0-1,1v2a1,1,0,0,0,1,1h2V3a1,1,0,0,0-1-1H7A1,1,0,0,0,6,3V15h.589L5.5,12.392A1,1,0,0,0,4.561,12H3a1,1,0,0,0-1,1v2a1,1,0,0,0,1,1h.92l-1.313,2.633A1,1,0,0,0,3.5,20H5a1,1,0,0,0,.8-.4L8,16.333,10.2,19.6a1,1,0,0,0,.8.4h1.5a1,1,0,0,0,.77-.37l2.73-3.413L18.2,19.6a1,1,0,0,0,.8.4h1.5a1,1,0,0,0,.894-1.447L20.081,16H20A1,1,0,0,0,21,15ZM4,14V13H4.94l.333,1Zm14,0-.333-1H18v1ZM14,7h1a1,1,0,0,1,0,2H14a1,1,0,0,1,0-2ZM8,5h8V9H14V8a3,3,0,0,0-3-3H8Zm1,12.667L7.2,16H4.5l1-2H9ZM16,11V10h1.439L18,12.333V13H16Zm3.5,7H19l-1-2h2Z" />
              </svg>
            </div>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">
              Welcome Back
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Sign in to your account to manage your e-waste recycling
            </p>
          </div>
          <LoginForm />
        </div>
      </div>
    </AppLayout>
  );
};

export default Login;
