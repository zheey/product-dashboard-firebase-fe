import React from "react";
import { useAuth } from "../context/AuthContext";

const TopNavBar = () => {
  const { userData, logout } = useAuth();

  return (
    <nav className="top-navbar">
      <h2>Welcome, {userData && userData.name}</h2>
      <div className="flex">
        <div className="action-text" onClick={() => logout()}>
          {" "}
          Logout{" "}
        </div>
      </div>
    </nav>
  );
};

export default TopNavBar;
