import React, { useState } from "react";
import TopNavBar from "../common/TopNavBar";
import SideNav from "../common/SideNav";
import Main from "../common/Main";
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { user, userData } = useAuth();

  return (
    <div className="app-body">
      <SideNav />
      <div className="mainWrapper">
        <TopNavBar />
        <Main />
      </div>
    </div>
  );
};

export default Dashboard;
