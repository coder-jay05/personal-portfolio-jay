import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [showMenu, setshowMenu] = useState(false);

  const handleMenu = () => {
    setshowMenu(!showMenu);
  };

  return (
    <>
      <nav className="bg-black text-white px-8  md:px-16 lg:px-24 fixed w-full z-50">
        <div className="container  py-2 flex justify-between  items-center">
          <div className="text-2xl font-bold ">JAYPRAKASH</div>

          <div
            className={`${showMenu ? "block2" : "hidden"} md:flex space-x-6`}
          >
            <a href="#home" className="hover:text-gray-400">
              Home
            </a>
            <a href="#about" className="hover:text-gray-400">
              About Me
            </a>
            <a href="#education" className="hover:text-gray-400">
              Education
            </a>
            <a href="#projects" className="hover:text-gray-400">
              Projects
            </a>
            <a href="#services" className="hover:text-gray-400">
              Services
            </a>
            <a href="#contact" className="hover:text-gray-400 mr-5">
              Contact
            </a>
          </div>

          <div className=" flex space-x-4 my-4 md:my-0 ">
            <a
              href="https://github.com/coder-jay05"
              className="text-gray-400 hover:text-white text-2xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/coder-jay05"
              className="text-gray-400 hover:text-white text-2xl bg-gradient-to-r from-blue-900 to-blue-600"
            >
              <FaLinkedin />
            </a>
          </div>

          <button className="bg-gradient-to-r from-green-400 to-blue-500 tect-white  md:inline py-2 px-4 hover:scale-105 transform transition-transform hidden duration-300 rounded-full">
            Connect Me
          </button>

          <div className="md:hidden  text-2xl">
            <button onClick={handleMenu}>
              <GiHamburgerMenu />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
