import React from "react";

export default function Resume() {
  const skills = [
    { name: "HTML", level: "90%" },
    { name: "CSS / Tailwind", level: "85%" },
    { name: "JavaScript", level: "80%" },
    { name: "React", level: "75%" },
    { name: "Node.js", level: "70%" },
  ];

  return (
    <div
      id="resume"
      className="min-h-screen bg-gray-900 text-white px-6 md:px-10 py-16 flex items-center"
    >
      <div className="w-full grid md:grid-cols-3 gap-10">

        {/* Skills */}
        <div className="flex flex-col justify-center">
          <h3 className="mb-6 font-bold text-blue-200 text-4xl underline">
            TECH STACK
          </h3>

          {skills.map((skill, i) => (
            <div key={i} className="mb-4">
              <p className="mb-1">{skill.name}</p>
              <div className="w-full h-2 bg-gray-700 rounded">
                <div
                  style={{ width: skill.level }}
                  className="h-2 bg-blue-500 rounded transition-all duration-500"
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Experience */}
        <div className="flex flex-col justify-center">
          <h3 className="mb-6 font-bold text-blue-200 text-4xl underline">
            EXPERIENCE
          </h3>

          <ul className="space-y-4 text-gray-300">
            <li>Frontend Developer - Freelance</li>
            <li>React Developer - Projects</li>
            <li>UI Developer - Personal Work</li>
          </ul>
        </div>

        {/* What I Do */}
        <div className="flex flex-col justify-center">
          <h3 className="mb-6 font-bold text-blue-200 text-4xl underline">
            WHAT I DO
          </h3>

          <ul className="space-y-2 text-gray-400">
            <li>Responsive Web Design</li>
            <li>Frontend Development</li>
            <li>API Integration</li>
            <li>UI/UX Optimization</li>
          </ul>
        </div>

      </div>
    </div>
  );
}