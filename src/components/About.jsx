import React from 'react';
import myImage from "../assets/img.jpg"
const About = () => {
  const resumeData = {
    name: "Akhilesh Vishwakarma",
    aboutme:
      "Enthusiastic and detail-oriented Web Developer with a strong foundation in React, JavaScript, HTML, CSS, and Firebase. Recent Computer Science graduate from Nirmala Memorial Foundation College, eager to leverage my expertise in front-end development to build responsive and user-friendly web applications. Skilled in integrating Firebase for authentication and real-time data management. Developed a Netflix Clone using React and Firebase, implementing user authentication, dynamic movie listings using TMDB API, and a responsive UI for an enhanced user experience. Passionate about continuous learning and contributing to innovative projects within a dynamic team environment, delivering high-quality solutions that enhance user experiences.",
    address: "Kandivali, Mumbai",
    website: "https://github.com/akkii7030" 
  };

  return (
    <section id="about" className="px-6 py-12 md:px-16 lg:px-32 bg-gray-900 text-white">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Profile Image */}
        <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-blue-400 shadow-lg">
          <img className="w-full h-full object-cover" src={myImage} alt="Akhilesh Vishwakarma" />
        </div>

        {/* About Content */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-blue-400 mb-4">About Me</h2>
          <p className="text-gray-300 leading-relaxed">
            {resumeData.aboutme}
          </p>

          {/* Contact Details */}
          <div className="mt-8 p-6 bg-gray-800 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-blue-400 mb-3">Contact Details</h2>
            <p className="text-gray-300">
              <span className="block text-lg font-medium">{resumeData.name}</span>
              <span className="block">{resumeData.address}</span>
              <a
                href={resumeData.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline mt-2 inline-block"
              >
                {resumeData.website}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
