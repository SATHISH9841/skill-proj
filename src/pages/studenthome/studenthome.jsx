import React, { useState } from "react";
import { FaTrash, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import "./studenthome.css";

const Studenthome = () => {
  const [activeTab, setActiveTab] = useState("Take Test");
  const [showPopup, setShowPopup] = useState(false);
  const [newSkill, setNewSkill] = useState("");

  const [skills, setSkills] = useState([
    { name: "Java", passed: false },
    { name: "Python", passed: true },
    { name: "React", passed: false },
  ]);

  // Function to add a new skill
  const handleAddSkill = () => {
    if (newSkill.trim() !== "") {
      setSkills([...skills, { name: newSkill, passed: false }]);
      setNewSkill("");
      setShowPopup(false);
    }
  };

  // Function to delete a skill
  const handleDeleteSkill = (index) => {
    const updatedSkills = skills.filter((_, i) => i !== index);
    setSkills(updatedSkills);
  };

  return (
    <div className="dashboard-container">
      {/* Header */}
      <header>
        <h1>My Website</h1>
        <button className="account-btn">Account</button>
      </header>

      {/* Tabs Section */}
      <div className="tab-buttons">
        {["Take Test", "Apply Jobs", "Status"].map((tab) => (
          <button
            key={tab}
            className={`tab-btn ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Dashboard Content */}
      <div className="dashboard-content">
        {activeTab === "Take Test" && (
          <div className="column">
            <h2>Take Test</h2>
            {skills.map((skill, index) => (
              <div className="list-item" key={index}>
                <span className="skill-name">{skill.name}</span>

                {/* Pass/Fail Icon */}
                {skill.passed ? (
                  <FaCheckCircle className="status-icon pass" />
                ) : (
                  <FaTimesCircle className="status-icon fail" />
                )}

                {/* Show "Take Test" button only if failed */}
                {!skill.passed && <button className="test-btn">Take Test</button>}

                {/* Delete Button */}
                <button className="delete-btn" onClick={() => handleDeleteSkill(index)}>
                  <FaTrash />
                </button>
              </div>
            ))}

            {/* Add Test Button */}
            <button className="add-test-btn" onClick={() => setShowPopup(true)}>
              +
            </button>
          </div>
        )}

        {activeTab === "Apply Jobs" && (
          <div className="column">
            <h2>Apply Jobs</h2>
            <p>Job application feature coming soon!</p>
          </div>
        )}

        {activeTab === "Status" && (
          <div className="column">
            <h2>Status</h2>
            <p>View application and test status here.</p>
          </div>
        )}
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h3>Add New Skill</h3>
            <div className="search-box-container">
              <input
                type="text"
                placeholder="Enter skill..."
                className="search-box"
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
              />
            </div>
            <button className="add-btn" onClick={handleAddSkill}>
              Add
            </button>
            <button className="close-btn" onClick={() => setShowPopup(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Studenthome;
