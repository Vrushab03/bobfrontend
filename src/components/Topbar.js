import React from 'react';
import { FaSearch, FaCog, FaBell, FaUser, FaGlobe } from 'react-icons/fa';
import logo from '../images/boblogo.png';
import '../styles/Topbar.css';

const Topbar = () => {
  return (
    <div className="bg-orange topbar-container">
      {/* Left: Logo & Search */}
      <div className="d-flex align-items-center flex-grow-1">
        <div className="me-4">
          <img src={logo} alt="BOB Logo" className="logo-img" />
        </div>
        <div className="position-relative search-bar-wrapper">
          <FaSearch className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted" />
          <input
            type="text"
            className="form-control ps-5 rounded-pill"
            placeholder="Search here"
          />
        </div>
      </div>

      {/* Right: Icons */}
      <div className="d-flex align-items-center gap-3">
        <div className="icon-circle"><FaGlobe /></div>
        <div className="icon-circle"><FaCog /></div>
        <div className="icon-circle"><FaBell /></div>
        <div className="icon-circle"><FaUser /></div>
      </div>
    </div>
  );
};

export default Topbar;
