import React from 'react';

export default function ClubsSocieties() {
  const clubs = [
    {
      name: "BLUElab DATA",
      role: "Data Analysis Team Member",
      date: "Sep 2024 - Present",
      location: "University of Michigan, United States",
      description: "Collection and analysis of data in partnership with M Dining and East Quad, aiming to reduce food waste by automating the tracking system and integrating predictions and recommendations to the existing system."
    },
    {
      name: "Artificial Intelligence and Data Science Student Club",
      role: "President"
    },
    {
      name: "Bluelab Data Analysis",
      role: "Senior Data Analyst"
    },
    {
      name: "ISTE - Indian Society for Technical Education",
      role: "Member"
    },
    {
      name: "IEEE - Institute of Electrical and Electronics Engineers",
      role: "Member"
    },
    {
      name: "Institute's Internal Quality Assurance Cell (IQAC)",
      role: "Student Representative"
    },
    {
      name: "Science and Innovation Club",
      role: "Student Coordinator"
    },
    {
      name: "Coding Club",
      role: "Student Coordinator"
    }
  ];

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Clubs & Societies</h2>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="space-y-6">
          {clubs.map((club, index) => (
            <div key={index} className={index !== 0 ? "pt-4 border-t" : ""}>
              <h3 className="text-lg font-semibold text-gray-900">{club.name}</h3>
              <p className="text-gray-700">{club.role}</p>
              {club.date && (
                <p className="text-gray-600 text-sm">{club.date}</p>
              )}
              {club.location && (
                <p className="text-gray-600 text-sm">{club.location}</p>
              )}
              {club.description && (
                <p className="text-gray-700 mt-2">{club.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}