import React from 'react';

const Resume = ({ resumeData = {} }) => {
  return (
    <section id="resume" className="px-6 py-12 md:px-16 lg:px-32 bg-gray-900 text-white">

      {/* Projects Section */}
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-center text-blue-400 mb-8">Projects</h1>
        <div className="space-y-6">
          {resumeData?.projects?.length > 0 ? (
            resumeData.projects.map((project, index) => (
              <div key={index} className="p-6 bg-gray-800 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-blue-300">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
                <ul className="list-disc list-inside mt-2 text-gray-300">
                  {project.features.map((feature, i) => (
                    <li key={i} className="text-green-400">{feature}</li>
                  ))}
                </ul>
                <p className="text-gray-300 mt-2">
                  <span className="font-semibold text-blue-300">Tech Used:</span> {project.technologies.join(", ")}
                </p>
                <p className="text-green-400 font-medium mt-2">{project.outcome}</p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-400">No projects available.</p>
          )}
        </div>
      </div>

      {/* Skills Section */}
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-center text-blue-400 mb-8">Skills</h1>
        <p className="text-center text-gray-300 mb-6">
          {resumeData?.skillsDescription || "No skills description available."}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {resumeData?.skills?.length > 0 ? (
            resumeData.skills.map((item, index) => (
              <span key={index} className="bg-gradient-to-r from-blue-500 to-green-500 px-4 py-2 rounded-lg text-white shadow-md text-sm md:text-base font-semibold">
                {item.skillname}
              </span>
            ))
          ) : (
            <p className="text-center text-gray-400">No skills available.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Resume;
