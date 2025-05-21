import React, { useState } from 'react';
import '../styles/JobCreation.css';

const JobCreation = () => {
  const [option, setOption] = useState('');
  const [file, setFile] = useState(null);

  const handleDrop = (e) => {
    e.preventDefault();
    setFile(e.dataTransfer.files[0]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Option:', option);
    console.log('File:', file);
  };

  return (
    <div className="job-creation-full d-flex">
      {/* Left Side: Form Section */}
      <div className="left-form card p-4 shadow-sm">
        <h4 className="mb-4">Create New Job</h4>

        {/* Radio Options */}
        <div className="d-flex gap-4 mb-4 flex-wrap">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="jobOption"
              id="uploadReq"
              value="upload"
              onChange={(e) => setOption(e.target.value)}
            />
            <label className="form-check-label" htmlFor="uploadReq">
              Upload Recruitment Request Document(s)
            </label>
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="jobOption"
              id="goToForm"
              value="form"
              onChange={(e) => setOption(e.target.value)}
            />
            <label className="form-check-label" htmlFor="goToForm">
              Go to Job Requisition Form
            </label>
          </div>
        </div>

        {/* Drag & Drop */}
        <div
          className="drag-drop-area mb-3"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          {file ? (
            <p className="text-success">Uploaded: {file.name}</p>
          ) : (
            <p>Drag & drop job description file here</p>
          )}
        </div>

        {/* Submit */}
        <button type="submit" className="btn btn-orange-filled mt-3" onClick={handleSubmit}>
          Submit Job
        </button>
      </div>

      {/* Right Side: Chatbot */}
      <div className="right-chatbot card p-4 shadow-sm">
        <h6 className="mb-3">🤖 Chatbot Assistant</h6>
        <div className="chat-placeholder">
          <p>This space is reserved for chatbot integration.</p>
        </div>
      </div>
    </div>
  );
};

export default JobCreation;
