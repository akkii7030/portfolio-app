import React from 'react';
import myPDF from "../assets/Akhilesh_V.pdf";

const Resume = ({ resumeData = {} }) => {
  return (
    <section
      id="resume"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-12 md:px-16 lg:px-32 bg-gray-900 text-white overflow-auto"
    >
      {/* Download Resume Button */}
      <div className="text-center mb-12">
        <a
          href={myPDF || "/Akhilesh_V.pdf"}
          download="./assets/Akhilesh_V.pdf"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition duration-300"
        >
          📄 Download Resume
        </a>
      </div>

      {/* Work Experience Section */}
      <div className="mb-12 w-full">
        <h1 className="text-3xl font-bold text-center text-blue-400 mb-8">Work Experience</h1>
        <div className="space-y-6">
          {resumeData?.work?.length > 0 ? (
            resumeData.work.map((item, index) => (
              <div key={index} className="p-6 bg-gray-800 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-blue-300">{item.CompanyName}</h3>
                <p className="text-gray-400">
                  {item.specialization} <span className="text-blue-400">&bull;</span>
                  <em className="text-sm ml-1">{item.MonthOfLeaving} {item.YearOfLeaving}</em>
                </p>
                <p className="text-gray-300 mt-2">{item.Achievements}</p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-400">No work experience available.</p>
          )}
        </div>
      </div>

      {/* Skills Section */}
      <div className="mb-12 w-full">
        <h1 className="text-3xl font-bold text-center text-blue-400 mb-8">Skills</h1>
        <p className="text-center text-gray-300 mb-6">
          {resumeData?.skillsDescription || "No skills description available."}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {resumeData?.skills?.length > 0 ? (
            resumeData.skills.map((item, index) => (
              <span
                key={index}
                className="bg-gradient-to-r from-blue-500 to-green-500 px-4 py-2 rounded-lg text-white shadow-md text-sm md:text-base font-semibold"
              >
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
