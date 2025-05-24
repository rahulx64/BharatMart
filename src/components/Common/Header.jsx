import React from "react";
import Topbar from "../Layout/Topbar";
import Navbar from "./Navbar";
const Header = () => {
  return (
    <>
      <header className="border-b border-gray-200">
        {/* // topbar */}
        <Topbar />
        {/* // navbar  */}
        <Navbar />
        {/* // search box */}
        {/* // cart icon */}

        {/* // cart drawer */}
      </header>
    </>
  );
};

export default Header;
