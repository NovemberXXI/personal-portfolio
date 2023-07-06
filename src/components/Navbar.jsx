import React from "react";
import { FaBars } from "react-icons/fa";
import EMSLogo from "../assets/EMSLogo.png";

const Navbar = () => {
  return (
    <div className="fixed flex w-full h-[80px] justify-between items-center px-4 text-gray-300">
      <div>
        <img src={EMSLogo} alt="my logo" style={{ width: "50px" }} />
      </div>
      <div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Skills</li>
          <li>Contact</li>
        </ul>
      </div>

      {/* h menu */}
      <div>
        <FaBars />
      </div>
      {/* mobile menu */}
      <ul className="hidden">
        <li>Home</li>
        <li>About</li>
        <li>My Work</li>
        <li>Skills</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
