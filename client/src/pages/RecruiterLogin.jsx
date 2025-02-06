import React, { useState } from 'react';
import { assets } from '../assets/assets'; // Ensure you have your logo in assets

const RecruiterLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegister, setIsRegister] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password, isRegister });
  };

  return (
    <div 
      className="min-h-screen flex flex-col justify-center items-center py-12 bg-cover bg-center relative" 
      style={{ backgroundImage: "url('https://via.placeholder.com/1920x1080')" }} 
    >
      {/* Logo at top-left */}
      <img src={assets.logo} alt="Logo" className="absolute top-6 left-6 w-40" />

      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md w-full border-4 border-orange-500">
        <h2 className="text-2xl font-semibold text-center mb-6">
          {isRegister ? 'Register' : 'Login'} as Recruiter
        </h2>
        <p className="text-center text-gray-600 mb-6">
          We can help you hire the best talent.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <button type="submit" className="w-full bg-orange-600 text-white py-2 rounded-md">
            {isRegister ? 'Register' : 'Login'}
          </button>
        </form>
        <div className="mt-4 text-center">
          <button
            type="button"
            onClick={() => setIsRegister(!isRegister)}
            className="text-blue-600 hover:text-blue-800"
          >
            {isRegister ? 'Already have an account? Login' : 'Don’t have an account? Register'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecruiterLogin;
