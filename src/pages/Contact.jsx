import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaUser } from "react-icons/fa";

const ContactUs = () => {
  const resumeData = {
    linkedinId: "https://www.linkedin.com/in/akkii7030/",
    githubId: "https://github.com/akkii7030",
    email: "akhileshvishwakarma2002@gmail.com",
    phone: "+91 7758085393",
  };

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_unlr6cg", 
        "template_dr2qjza", 
        formData,
        "OEGjWbukCzxAIbqf2" 
      )
      .then(() => {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("Email send error:", error);
        alert("Failed to send the message. Please try again.");
      });
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-6 py-12 md:px-16 lg:px-32"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Section - Contact Information */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-md flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-blue-400 mb-4 text-center md:text-left">Get in Touch</h2>
          <p className="text-gray-300 text-lg mb-6 text-center md:text-left">
            Feel free to contact me for any work or suggestions. I am always open to networking and collaboration.
          </p>

          <div className="space-y-6">
            {/* LinkedIn */}
            <div className="flex items-center space-x-4">
              <FaLinkedin className="text-blue-500 text-2xl" />
              <a
                href={resumeData.linkedinId}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-500 hover:underline transition duration-300 text-lg font-medium"
              >
                LinkedIn
              </a>
            </div>

            {/* GitHub */}
            <div className="flex items-center space-x-4">
              <FaGithub className="text-gray-400 text-2xl" />
              <a
                href={resumeData.githubId}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-500 hover:underline transition duration-300 text-lg font-medium"
              >
                GitHub
              </a>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-red-400 text-2xl" />
              <a
                href={`mailto:${resumeData.email}`}
                className="text-blue-400 hover:text-blue-500 hover:underline transition duration-300 text-lg font-medium"
              >
                {resumeData.email}
              </a>
            </div>

            {/* Phone */}
            <div className="flex items-center space-x-4">
              <FaPhone className="text-green-400 text-2xl" />
              <p className="text-gray-300 text-lg font-medium">{resumeData.phone}</p>
            </div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-md flex flex-col justify-center">
          <h3 className="text-2xl font-semibold text-blue-300 mb-4 text-center md:text-left">Send a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div className="flex items-center space-x-3 bg-gray-700 p-3 rounded-lg">
              <FaUser className="text-gray-400 text-xl" />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-transparent text-white outline-none placeholder-gray-400"
                required
              />
            </div>

            {/* Email */}
            <div className="flex items-center space-x-3 bg-gray-700 p-3 rounded-lg">
              <FaEnvelope className="text-gray-400 text-xl" />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent text-white outline-none placeholder-gray-400"
                required
              />
            </div>

            {/* Message */}
            <div className="flex flex-col bg-gray-700 p-3 rounded-lg">
              <textarea
                name="message"
                rows="4"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-transparent text-white outline-none placeholder-gray-400 resize-none"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
