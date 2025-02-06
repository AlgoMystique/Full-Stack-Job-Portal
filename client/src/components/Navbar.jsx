import React from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="shadow bg-white">
      <div className="container px-4 2xl:px-20 mx-auto flex justify-between items-center py-2">
        {/* Logo - Bigger & Moved Up */}
        <Link to="/" className="mt-[-10px]">
          <img 
            src={assets.logo} 
            width="200" 
            height="100" 
            alt="Company Logo" 
            className="max-w-full"
          />
        </Link>

        {/* Navigation Buttons */}
        <div className="flex gap-4">
          <Link 
            to="/recruiter-login" 
            className="border border-gray-600 text-gray-600 px-6 sm:px-9 py-2 rounded-full hover:bg-gray-600 hover:text-white transition"
          >
            Recruiter Login
          </Link>
          <Link 
            to="/login" 
            className="bg-orange-600 text-white px-6 sm:px-9 py-2 rounded-full hover:bg-orange-700 transition"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
