import React from 'react';
import {assets} from '../assets/assets';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <img src={assets.logo} width="30" height="30" className="d-inline-block align-top" alt="" />
        React Bootstrap
      </a>
    </nav>
  );
}

export default Navbar;