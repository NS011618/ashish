import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <motion.div
        className="container mx-auto text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold mb-8">Contact Me</h2>
        <form className="max-w-lg mx-auto bg-white rounded-lg shadow-lg p-8 text-black">
          <input
            type="text"
            className="w-full mb-4 p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            placeholder="Your Name"
          />
          <input
            type="email"
            className="w-full mb-4 p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            placeholder="Your Email"
          />
          <textarea
            className="w-full mb-4 p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            placeholder="Your Message"
            rows="5"
          />
          <button
            type="submit"
            className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
