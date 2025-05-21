import { Link } from 'react-router-dom';
import React from 'react';
import {
  FaTachometerAlt,
  FaBriefcase,
  FaClipboardList,
  FaUserCheck,
  FaUniversity,
  FaCalendarAlt,
  FaEnvelope
} from 'react-icons/fa';
import '../styles/Sidebar.css';

const Sidebar = () => {
  const menuItems = [
    { icon: <FaTachometerAlt />, label: 'Dashboard', path: '/dashboard' },
    { icon: <FaBriefcase />, label: 'Job Creation', path: '/jobcreation' },
    { icon: <FaClipboardList />, label: 'Job Postings', path: '/job-postings' },
    { icon: <FaUserCheck />, label: 'Candidate Shortlist', path: '/candidate-shortlist' },
    { icon: <FaUniversity />, label: 'IBPS Integration', path: '/ibps' },
    { icon: <FaCalendarAlt />, label: 'Schedule Interview', path: '/schedule-interview' },
    { icon: <FaEnvelope />, label: 'Mail', path: '/mail' }
  ];

  return (
    <div className="sidebar">
      <ul className="sidebar-menu">
        {menuItems.map((item, index) => (
          <li key={index} className="sidebar-item text-center">
            <Link to={item.path} className="sidebar-link">
              <div className="sidebar-icon">{item.icon}</div>
              <div className="sidebar-label">{item.label}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
