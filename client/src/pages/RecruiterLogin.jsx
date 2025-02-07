import React, { useState, useContext } from 'react';
import { assets } from '../assets/assets'; // Ensure you have your logo in assets
import { AppContext } from '../context/AppContext'; // Import AppContext
import axios from 'axios'; // Assuming you are using axios for API calls
import { toast } from 'react-toastify';

const RecruiterLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegister, setIsRegister] = useState(false);

  // Access the login function from AppContext
  const { login } = useContext(AppContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make an API call to authenticate the recruiter
      const response = await axios.post('/api/auth/recruiter-login', { email, password });

      // If the login is successful, store the token in localStorage and update context
      if (response.data.success) {
        login(response.data.token); // This will call the login function from AppContext
      } else {
        toast.error(response.data.message); // Show error if login failed
      }
    } catch (error) {
      toast.error('Login failed. Please try again.');
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center py-12 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${assets.recruiterLoginBackground || 'https://via.placeholder.com/1920x1080'})` }}
    >
      <img src={assets.logo} alt="Logo" className="absolute top-6 left-6 w-40" />

      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md w-full backdrop-blur-sm backdrop-filter border border-orange-500">
        <h2 className="text-2xl font-semibold text-center mb-4 text-orange-600">
          {isRegister ? 'Register' : 'Login'} as Recruiter
        </h2>
        <p className="text-center text-gray-600 mb-6">
          We can help you hire the best talent.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-200 focus:border-orange-500 outline-none"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-200 focus:border-orange-500 outline-none"
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 rounded-md transition duration-300">
            {isRegister ? 'Register' : 'Login'}
          </button>
        </form>
        <div className="mt-4 text-center">
          <button
            type="button"
            onClick={() => setIsRegister(!isRegister)}
            className="text-orange-600 hover:text-orange-800 transition duration-300"
          >
            {isRegister ? 'Already have an account? Login' : 'Don’t have an account? Register'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecruiterLogin;
