import React from "react";
import { motion } from "framer-motion";

const projects = [
  { name: "Ecourse for Students", description: "Online course platform using Django and Python." },
  { name: "Patient Disease Prediction", description: "ML-based disease prediction app using React and Flask." },
  { name: "Surgi View", description: "Web platform for KIMS Hospital using Firebase and React." },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-900 text-white">
      <motion.div
        className="container mx-auto text-center px-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold mb-8">Projects</h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400">{project.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
