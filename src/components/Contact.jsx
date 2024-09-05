import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
        <form className="max-w-md mx-auto">
          <input
            type="text"
            className="w-full mb-4 p-2 border border-gray-300 rounded"
            placeholder="Your Name"
          />
          <input
            type="email"
            className="w-full mb-4 p-2 border border-gray-300 rounded"
            placeholder="Your Email"
          />
          <textarea
            className="w-full mb-4 p-2 border border-gray-300 rounded"
            placeholder="Your Message"
            rows="4"
          />
          <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-full">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
