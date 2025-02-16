import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

const ContactUs = () => {
  const resumeData = {
    linkedinId: "https://www.linkedin.com/in/akkii7030/",
    githubId: "https://github.com/akkii7030",
    email: "akhileshvishwakarma2002@gmail.com",
    phone: "+91 7758085393"
  };

  return (
    <section id="contact" className="bg-gray-900 text-white py-16 px-6 md:px-16 lg:px-32">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-400 mb-4">Get in Touch</h2>
        <p className="text-gray-300 text-lg mb-8">
          Feel free to contact me for any work or suggestions. I am always open to networking and collaboration.
        </p>

        {/* Contact Information */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md space-y-6">
          {/* LinkedIn */}
          <div className="flex items-center space-x-4">
            <FaLinkedin className="text-blue-500 text-2xl" />
            <a
              href={resumeData.linkedinId}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-500 hover:underline transition duration-300 text-lg"
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
              className="text-blue-400 hover:text-blue-500 hover:underline transition duration-300 text-lg"
            >
              GitHub
            </a>
          </div>

          {/* Email */}
          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-red-400 text-2xl" />
            <a
              href={`mailto:${resumeData.email}`}
              className="text-blue-400 hover:text-blue-500 hover:underline transition duration-300 text-lg"
            >
              {resumeData.email}
            </a>
          </div>

          {/* Phone */}
          <div className="flex items-center space-x-4">
            <FaPhone className="text-green-400 text-2xl" />
            <p className="text-gray-300 text-lg">{resumeData.phone}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
