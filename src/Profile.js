import React, { useState } from "react";
import "./Profile.css";  // Ensure Profile.css is correctly linked.

const Profile = ({ user, onLogout }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="profile-icon">
      <img
        src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
        alt="profile"
        onClick={() => setOpen(!open)}  // Toggles the dropdown when clicked
        style={{ cursor: "pointer", width: "40px", height: "40px" }}  // Optional: style the image size
      />
      {open && (
        <div className="profile-popup">
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <button onClick={onLogout}>Logout</button> {/* Calls onLogout on click */}
        </div>
      )}
    </div>
  );
};

export default Profile;
