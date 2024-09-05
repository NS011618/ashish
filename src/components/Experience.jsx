import React from "react";

const experience = [
  {
    title: "Software Developer Intern",
    company: "Purview Services",
    description: "Developed Android apps and websites for KIMS Hospital.",
    date: "03/2024 – 08/2024",
  },
];

const Experience = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Experience</h2>
        <div className="space-y-6">
          {experience.map((exp) => (
            <div key={exp.title} className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold">{exp.title}</h3>
              <p className="text-gray-700">{exp.company}</p>
              <p className="text-gray-600">{exp.description}</p>
              <p className="text-gray-500 italic">{exp.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
