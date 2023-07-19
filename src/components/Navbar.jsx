import React, {useState} from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {Link} from 'react-scroll'

const Navbar = () => {
  const [nav, setNav] = useState(false)

  const handleClick = () => setNav(!nav)

  return (
    <div className="fixed flex w-full h-[70px] justify-between items-center px-4 bg-gradient-to-b from-orange-900 to-sky-900 text-gray-100">
      <div>
        <h1 className="text-2xl text-gray-300">Edmond.M.Setati</h1>
      </div>

      {/* menu */}
      
        <ul className="hidden md:flex">
          <li>
            <Link  to="home"  smooth={true}  duration={500} >
            Home
            </Link>
          </li>
          <li>
            <Link  to="about"  smooth={true}  duration={500} >
            About
            </Link>
          </li>
          <li>
            <Link  to="projects"  smooth={true}  duration={500} >
            Projects
            </Link>
          </li>
          <li>
            <Link  to="skills"  smooth={true}  duration={500} >
            Tech Stack
            </Link>
          </li>
          <li>
            <Link  to="contact"  smooth={true}  duration={500} >
            Contact
            </Link>
          </li>
        </ul>


      {/* h menu */}
      <div onClick={handleClick} className="text-gray-300 md:hidden z-10" >
        {!nav ? <FaBars size={20} /> : <FaTimes size={20}/> }
      </div>


      {/* mobile menu */}
      <ul className={!nav ? 'hidden' : "absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-orange-900 to-sky-900 flex flex-col justify-center items-center"}>
        <li className="py-6 text-3xl">
          <Link onClick={handleClick} to="home"  smooth={true}  duration={500} >
          Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about"  smooth={true}  duration={500} >
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="projects"  smooth={true}  duration={500} >
            Projects
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills"  smooth={true}  duration={500} >
            Tech Stack
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact"  smooth={true}  duration={500} >
            Contact
          </Link>
        </li>
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
