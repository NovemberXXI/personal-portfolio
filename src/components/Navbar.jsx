import React, {useState} from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import EMSLogo from "../assets/EMSLogo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false)

  const handleClick = () => setNav(!nav)

  return (
    <div className="fixed flex w-full h-[80px] justify-between items-center px-4 bg-gradient-to-b from-orange-900 to-sky-900 text-gray-100">
      <div>
        <img src={EMSLogo} alt="my logo" style={{ width: "50px" }} />
      </div>

      {/* menu */}
      
        <ul className="hidden md:flex">
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Skills</li>
          <li>Contact</li>
        </ul>


      {/* h menu */}
      <div onClick={handleClick} className="md:hidden z-10" >
        {!nav ? <FaBars /> : <FaTimes/> }
      </div>


      {/* mobile menu */}
      <ul className={!nav ? 'hidden' : "absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-orange-900 to-sky-900 flex flex-col justify-center items-center"}>
        <li className="py-6 text-4xl">Home</li>
        <li className="py-6 text-4xl">About</li>
        <li className="py-6 text-4xl">My Work</li>
        <li className="py-6 text-4xl">Skills</li>
        <li className="py-6 text-4xl">Contact</li>
      </ul>

      {/* social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 rounded-t-lg">
            <a href="https://www.linkedin.com/in/edmond-marumo-setati-451642192/" className="flex justify-between items-center w-full text-gray-200">
              LinkedIn <FaLinkedin size={30}/>
            </a>
          </li>

          <li className="w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-800">
            <a href="https://GitHub.com/NovemberXXI" className="flex justify-between items-center w-full text-gray-200">
              Github <FaGithub size={30}/>
            </a>
          </li>
          <li className="w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-700">
            <a href="mailto:SirEMSetati@gmail.com" className="flex justify-between items-center w-full text-gray-200">
              Email <HiOutlineMail size={30}/>
            </a>
          </li>
          <li className="w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-500 rounded-b-lg">
            <a href="/public/EdmondMarumoSetati.pdf" className="flex justify-between items-center w-full text-gray-200">
              Resume <BsFillPersonLinesFill size={30}/>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
