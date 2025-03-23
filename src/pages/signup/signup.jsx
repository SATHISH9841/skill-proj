import React, { useState } from "react";
import Assets from "../../assets/assets";
import "./signup.css";

const Signup = () => {
  const [currState, setCurrState] = useState("Sign Up");
  const [userType, setUserType] = useState("Student"); // Default user type

  return (
    <div className="login">
      <img src={Assets.logo_big} alt="" className="logo" />
      <form className="login-form">
        {/* Header with User Type Selection */}
        <div className="login-header">
          <h2>{currState}</h2>
          <select
            className="user-type-select"
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
          >
            <option value="Student">Student</option>
            <option value="Recruiter">Recruiter</option>
          </select>
        </div>

        {/* Fields for Sign Up */}
        {currState === "Sign Up" && (
          <>
            <input type="text" placeholder="Enter Your Name" className="form-input" required />
            <input type="text" placeholder="Username" className="form-input" required />
            
            {userType === "Student" ? (
              <input type="text" placeholder="College Name" className="form-input" required />
            ) : (
              <>
                <input type="text" placeholder="Organization Name" className="form-input" required />
                <input type="text" placeholder="Type of Organization" className="form-input" required />
                <div className="recruiter-check">
                  <label>Are you a recruiter?</label>
                  <input type="checkbox" />
                </div>
              </>
            )}

            <input type="email" placeholder="Email address" className="form-input" required />
            <input type="password" placeholder="Password" className="form-input" required />
          </>
        )}

        {/* Fields for Login */}
        {currState === "Login" && (
          <>
            <input type="text" placeholder="Username / Email" className="form-input" required />
            <input type="password" placeholder="Password" className="form-input" required />
          </>
        )}

        <button type="submit">{currState === "Sign Up" ? "Create Account" : "Login"}</button>

        {/* Terms Checkbox for Signup */}
        {currState === "Sign Up" && (
          <div className="login-term">
            <input type="checkbox" required />
            <p>Agree to the terms of use & privacy policy</p>
          </div>
        )}

        {/* Toggle between Signup/Login */}
        <div className="login-forgot">
          {currState === "Sign Up" ? (
            <p className="login-toggle">
              Already Have An Account? <span onClick={() => setCurrState("Login")}>Click Here</span>
            </p>
          ) : (
            <p className="login-toggle">
              Don't Have An Account? <span onClick={() => setCurrState("Sign Up")}>Click Here</span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Signup;
