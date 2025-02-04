import React from 'react';
import {assets} from '../assets/assets';

const Navbar = () => {
  return (
    <div className='shadow py-4'>
      <div className='container px-4 2xl:px-20 mx-auto flex justify-between items-center'>
         <img src={assets.logo} width="200" height="100" className="d-inline-block align-top" alt="" />
<div className='flex gap-4 max-sm:text-xs'> 
  <button className='text-gray-600'> Recruiter Login  </button>
    <button className='bg-orange-600 text-black px-6 sm:px-9 py-2 rounded-full'>  Login  </button>  </div>
    </div>
    </div>






  );
}

export default Navbar;