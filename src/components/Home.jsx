import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section className="h-screen bg-black text-white flex flex-col justify-center items-center text-center relative overflow-hidden">
      {/* Left Image */}
      <motion.div
        className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src="/path/to/profile.png"
          alt="Left Visual"
          className="h-40 w-40 object-contain"
        />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10">
        <motion.h1
          className="text-4xl sm:text-6xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Turning Vision Into Reality With Code And Design.
        </motion.h1>
        <motion.p
          className="mt-4 text-lg sm:text-xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications.
        </motion.p>
        <motion.div
          className="mt-6 flex space-x-4 justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <a
            href="#resume"
            className="px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition duration-300"
          >
            Resume
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border-2 border-white rounded-full font-semibold hover:bg-gray-800 transition duration-300"
          >
            Contact
          </a>
        </motion.div>
      </div>

      {/* Bottom Left "Hire Me" Button */}
      <motion.div
        className="absolute bottom-10 left-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <a
          href="#hire-me"
          className="bg-black text-white rounded-full px-6 py-3 border-2 border-white font-semibold hover:bg-gray-800 transition duration-300"
          aria-label="Hire Me"
        >
          Hire Me
        </a>
      </motion.div>

    </section>
  );
};

export default Home;
