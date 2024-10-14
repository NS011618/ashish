import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes, FaLaptopCode, FaProjectDiagram, FaBriefcase, FaEnvelope, FaSun, FaMoon } from "react-icons/fa";
import { ThemeContext } from "./ThemeContext";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.header
      className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-50 transition-colors duration-500"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <nav className="container mx-auto flex justify-between items-center py-4 px-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800 dark:text-white">
          <a href="/">Ashish Golla</a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden sm:flex space-x-8 text-lg font-medium">
          <a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400 flex items-center text-gray-700 dark:text-gray-300">
            <FaLaptopCode className="mr-2" /> Skills
          </a>
          <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 flex items-center text-gray-700 dark:text-gray-300">
            <FaProjectDiagram className="mr-2" /> Projects
          </a>
          <a href="#experience" className="hover:text-blue-600 dark:hover:text-blue-400 flex items-center text-gray-700 dark:text-gray-300">
            <FaBriefcase className="mr-2" /> Experience
          </a>
          <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 flex items-center text-gray-700 dark:text-gray-300">
            <FaEnvelope className="mr-2" /> Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="sm:hidden">
          <button onClick={toggleMenu} className="focus:outline-none text-gray-700 dark:text-gray-300">
            {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
        </div>

        {/* Theme Toggle Button */}
        <button onClick={toggleTheme} className="ml-4 focus:outline-none text-gray-700 dark:text-gray-300">
          {theme === "light" ? <FaMoon className="w-6 h-6" /> : <FaSun className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="sm:hidden flex flex-col items-center bg-white dark:bg-gray-900 shadow-md"
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          transition={{ duration: 0.3 }}
        >
          <a
            href="#skills"
            className="py-2 w-full text-center hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
            onClick={toggleMenu}
          >
            <FaLaptopCode className="mr-2" /> Skills
          </a>
          <a
            href="#projects"
            className="py-2 w-full text-center hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
            onClick={toggleMenu}
          >
            <FaProjectDiagram className="mr-2" /> Projects
          </a>
          <a
            href="#experience"
            className="py-2 w-full text-center hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
            onClick={toggleMenu}
          >
            <FaBriefcase className="mr-2" /> Experience
          </a>
          <a
            href="#contact"
            className="py-2 w-full text-center hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
            onClick={toggleMenu}
          >
            <FaEnvelope className="mr-2" /> Contact
          </a>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
