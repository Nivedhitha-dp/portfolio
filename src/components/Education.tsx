import React from 'react';

export default function Education() {
  const education = [
    {
      school: "University of Michigan, Ann Arbor",
      degree: "Master of Science, Computer Science and Engineering",
      date: "May 2026",
      location: "Ann Arbor, MI",
      gpa: "3.66/4",
      courses: "Human Computer Interaction, Data Visualization, NLP, AI, Data Analytics, UI & Front-end Development"
    },
    {
      school: "R.M.K. Engineering College",
      degree: "Bachelor of Technology, Artificial Intelligence and Data Science",
      date: "May 2024",
      location: "Chennai, India",
      gpa: "3.98/4",
      distinction: "2nd Rank in the Department",
      achievements: [
        "Virtusa Jatayu India-Sri Lanka Corporate Hackathon 2023 Finalist",
        "The Best Performer – 2nd Best Outgoing Student Award 2020-2024",
        "ISTE State Level Best Student Award 2023-2024",
        "ISTE State Level Best Student Award 2022-2023"
      ]
    }
  ];

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Education</h2>
      <div className="space-y-6">
        {education.map((edu, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{edu.school}</h3>
                <p className="text-lg text-gray-700">{edu.degree}</p>
              </div>
              <div className="text-right">
                <p className="text-gray-600">{edu.date}</p>
                <p className="text-gray-600">{edu.location}</p>
              </div>
            </div>
            <p className="text-gray-700 mt-2">GPA: {edu.gpa}</p>
            <p className="text-gray-700 mt-1">Relevant Coursework: {edu.courses}</p>
            {edu.distinction && (
              <p className="text-gray-700 mt-1">Distinction: {edu.distinction}</p>
            )}
            {edu.achievements && (
              <ul className="list-disc list-inside mt-2 text-gray-700">
                {edu.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}