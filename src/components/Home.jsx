import React from "react";
import { motion } from "framer-motion";
import resume from "../assests/resume.pdf";

const Home = () => {
  return (
    <section className="h-screen bg-gradient-to-b from-black to-gray-900 text-white flex flex-col justify-center items-center text-center relative overflow-hidden">
      {/* Main Content */}
      <div className="relative z-10">
        <motion.h1
          className="text-5xl sm:text-7xl font-extrabold leading-tight"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          Aspiring Software Developer 🚀
        </motion.h1>
        <motion.p
          className="mt-6 text-lg sm:text-2xl font-light leading-relaxed"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1.2, ease: "easeOut" }}
        >
          Future Systems Engineer at Tata Consultancy Services (TCS)
        </motion.p>
        <motion.div
          className="mt-10 flex space-x-6 justify-center"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          {/* Link to Resume PDF */}
          <a
            href={resume}
            target="_blank"      // Opens the PDF in a new tab
            rel="noopener noreferrer" // Security measures
            className="px-8 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition duration-300 shadow-lg"
          >
            Resume
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-white rounded-full font-semibold hover:bg-gray-700 transition duration-300"
          >
            Contact
          </a>
        </motion.div>
      </div>

      {/* Bottom Left "Hire Me" Button */}
      <motion.div
        className="absolute bottom-16 left-16"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1.2 }}
      >
        <a
          href="#hire-me"
          className="bg-gradient-to-r from-gray-700 to-black text-white rounded-full px-6 py-3 border-2 border-white font-semibold hover:bg-gray-800 transition duration-300"
          aria-label="Hire Me"
        >
          Hire Me
        </a>
      </motion.div>
    </section>
  );
};

export default Home;
