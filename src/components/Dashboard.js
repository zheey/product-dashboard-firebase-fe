import React from "react";
import TopNavBar from "../common/TopNavBar";
import SideNav from "../common/SideNav";
import Main from "../common/Main";

const Dashboard = () => {
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
