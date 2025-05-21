import React from 'react';
import '../styles/DashBoard.css';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

// Sample chart data
const chartData = [
  { name: 'Week 1', Applications: 100, Interviews: 30, Offers: 10 },
  { name: 'Week 2', Applications: 120, Interviews: 40, Offers: 20 },
  { name: 'Week 3', Applications: 140, Interviews: 50, Offers: 25 },
  { name: 'Week 4', Applications: 160, Interviews: 60, Offers: 35 },
];

const Dashboard = () => {
  return (
    <div className="flex-grow-1 p-4">
      <div className="container-fluid">
        <div className="row">
          {/* Left Column: 3 big cards */}
          <div className="col-md-8 d-flex flex-column gap-4">
            
            {/* Job Postings Overview */}
            <div className="card p-4 shadow-sm dashboard-card">
              <h5 className="mb-4">Job Postings Overview</h5>
              <div className="row g-3">
                <div className="col-6 col-md-3">
                  <div className="sub-card text-center p-3 shadow-sm">
                    <h6>New Applications</h6>
                    <p className="stat-value text-primary">14</p>
                  </div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="sub-card text-center p-3 shadow-sm">
                    <h6>Total Applications</h6>
                    <p className="stat-value text-success">128</p>
                  </div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="sub-card text-center p-3 shadow-sm">
                    <h6>Interview Today</h6>
                    <p className="stat-value text-warning">5</p>
                  </div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="sub-card text-center p-3 shadow-sm">
                    <h6>Offer Letter</h6>
                    <p className="stat-value text-info">3</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Application Metrics with Line Chart */}
            <div className="card p-4 shadow-sm dashboard-card">
              <h5 className="mb-4">Application Metrics</h5>
              <div style={{ width: '100%', height: '300px' }}>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="Applications" stroke="#8884d8" strokeWidth={2} />
                    <Line type="monotone" dataKey="Interviews" stroke="#82ca9d" strokeWidth={2} />
                    <Line type="monotone" dataKey="Offers" stroke="#ffc658" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Shortlisting Progress */}
            <div className="card p-4 shadow-sm dashboard-card">
              <h5 className="mb-4">Shortlisting Progress</h5>
              <div className="row g-3">
                <div className="col-6 col-md">
                  <div className="sub-card text-center p-3 shadow-sm">
                    <h6>New Applications</h6>
                    <p className="stat-value text-primary">40</p>
                  </div>
                </div>
                <div className="col-6 col-md">
                  <div className="sub-card text-center p-3 shadow-sm">
                    <h6>Screening</h6>
                    <p className="stat-value text-info">22</p>
                  </div>
                </div>
                <div className="col-6 col-md">
                  <div className="sub-card text-center p-3 shadow-sm">
                    <h6>Interviews</h6>
                    <p className="stat-value text-warning">12</p>
                  </div>
                </div>
                <div className="col-6 col-md">
                  <div className="sub-card text-center p-3 shadow-sm">
                    <h6>Offers</h6>
                    <p className="stat-value text-success">7</p>
                  </div>
                </div>
                <div className="col-6 col-md">
                  <div className="sub-card text-center p-3 shadow-sm">
                    <h6>Rejected</h6>
                    <p className="stat-value text-danger">19</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 4 small stacked cards */}
          <div className="col-md-4 d-flex flex-column gap-3">
            {/* ✅ Updated Quick Actions */}
            <div className="card p-3 shadow-sm right-card">
              <h6 className="mb-3">Quick Actions</h6>
              <div className="d-flex flex-column gap-2">
                <button className="btn btn-orange-filled">➕ Create New Job</button>
                <button className="btn btn-orange-outline">📅 Schedule Interview</button>
                <button className="btn btn-orange-outline">📤 Send Offer</button>
              </div>
            </div>

            <div className="card p-3 shadow-sm right-card">
              <h6>Upcoming Interviews</h6>
              <p>Next interviews listed here...</p>
            </div>
            <div className="card p-3 shadow-sm right-card">
              <h6>Offer Status</h6>
              <p>Pending or sent offers...</p>
            </div>
            <div className="card p-3 shadow-sm right-card">
              <h6>Recent Notifications</h6>
              <p>Recent updates or alerts...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
