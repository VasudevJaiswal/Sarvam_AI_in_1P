// src/components/Header.jsx
import React from 'react';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img className="logo" src={logo} alt="Logo" />
        <h1 className="title">Sarvam AI in 1P - Discover the Best AI Tools</h1>
      </div>
      <nav className="header-right">
        {/* Navigation links can go here */}
      </nav>
    </header>
  );
};

export default Header;
