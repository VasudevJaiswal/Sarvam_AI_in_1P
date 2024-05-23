// src/components/Header.js
import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import logo from '../assets/logo.png'; // Import the logo image

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img  className="logo" src={logo} alt="Logo" className="logo" />
        <h1 className="title">Sarvam AI - Discover the Best AI Tools </h1>
      </div>
      <nav className="header-right">
        {/* <a href="#home">Home</a>
        <a href="#explore">Explore</a>
        <a href="#contact">Contact Us</a> */}
        {/* <a href="#newsletter">Join Newsletter</a> */}
        {/* <div className="social-icons">
          <a href="#" className="social-icon"><FaFacebookF /></a>
          <a href="#" className="social-icon"><FaTwitter /></a>
          <a href="#" className="social-icon"><FaLinkedinIn /></a>
          <a href="#" className="social-icon"><FaInstagram /></a>
        </div> */}
      </nav>
    </header>
  );
};

export default Header;
