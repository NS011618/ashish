import React, { useState } from "react";
import { motion } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.header
      className="fixed top-0 left-0 w-full bg-white shadow-md z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <nav className="container mx-auto flex justify-between items-center py-4 px-4">
        <div className="text-xl font-bold">Ashish Golla</div>
        <div className="hidden sm:flex space-x-6">
          <a href="#skills" className="hover:text-blue-600">Skills</a>
          <a href="#projects" className="hover:text-blue-600">Projects</a>
          <a href="#experience" className="hover:text-blue-600">Experience</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="sm:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="sm:hidden flex flex-col items-center bg-white shadow-md"
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          transition={{ duration: 0.3 }}
        >
          <a href="#skills" className="py-2 hover:text-blue-600">Skills</a>
          <a href="#projects" className="py-2 hover:text-blue-600">Projects</a>
          <a href="#experience" className="py-2 hover:text-blue-600">Experience</a>
          <a href="#contact" className="py-2 hover:text-blue-600">Contact</a>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
