import React from "react";
import { motion } from "framer-motion";

const experience = [
  {
    title: "Software Developer Intern",
    company: "Purview Services",
    description:
      "Developed Android apps and websites for KIMS Hospital, working closely with cross-functional teams. Gained hands-on experience in Java, Python, Kotlin, Firebase, and web development.",
    date: "March 2024 – August 2024",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-100">
      <motion.div
        className="container mx-auto"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-center mb-8">Experience</h2>
        <div className="space-y-6">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-bold">{exp.title}</h3>
              <p className="text-gray-700">{exp.company}</p>
              <p className="text-gray-600">{exp.description}</p>
              <p className="text-gray-500 italic">{exp.date}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
