import React from "react";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";

const MainDashBoard = () => {
  return (
    <div className="w-screen min-h-screen">
      <Navbar />
      <div className="w-screen pt-20">
        <Main />
      </div>
    </div>
  );
};

export default MainDashBoard;
