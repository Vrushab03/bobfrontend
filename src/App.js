import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Dashboard from './components/DashBoard';
import JobCreation from './components/JobCreation';
// test addition

function App() {
  return (
    <Router>
      <Topbar />
      <div className="d-flex">
  <Sidebar />
  <div className="flex-grow-1" style={{ marginLeft: '120px', marginTop: '70px', padding: '24px' }}>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/jobcreation" element={<JobCreation />} />
      
    </Routes>
  </div>
</div>

    </Router>
  );
}

export default App;
