import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      {/* Navbar */}
      <nav className="bg-gray-800 p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <a
              className="text-blue-400 mx-3 hover:underline"
              href="https://www.linkedin.com/in/akkii7030/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="text-blue-400 mx-3 hover:underline"
              href="https://github.com/akkii7030"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex-grow flex flex-col justify-center items-center text-center px-6">
        <h2 className="text-4xl font-bold text-blue-400">Portfolio</h2>
        <p className="mt-4 text-lg text-gray-300">
          Web Developer | React | Firebase | Tailwind CSS
        </p>

        {/* Work Experience */}
        <div className="mt-8 bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-3xl">
          <h3 className="text-2xl font-semibold text-blue-300 mb-4">Work & Projects</h3>
          <p className="text-gray-300">
            I have worked on various projects including NetflixGPT, a movie recommendation platform
            powered by ChatGPT, Firebase authentication, and TMDB API. My portfolio website is built
            with modern UI/UX principles using React and Tailwind CSS.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
