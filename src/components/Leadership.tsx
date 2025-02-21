import React from 'react';

export default function Leadership() {
  const positions = [
    {
      role: "President",
      organization: "Department of Artificial Intelligence & Data Science",
      affiliation: "in association with the Analytics Society of India (ASI) and the Artificial Intelligence Centre of Excellence Laboratory",
      period: "Sept 2022 – May 2024"
    },
    {
      role: "Student Secretary",
      organization: "Science and Innovation Club",
      details: "Led and conducted the 'Prod-Innova' project presentation competition for the Department of Artificial Intelligence & Computer Science, November 2023"
    },
    {
      role: "Student Secretary",
      organization: "Coding Club",
      department: "Department of Artificial Intelligence and Computer Science",
      period: "2020 – 2022"
    },
    {
      role: "Institute Student Representative",
      organization: "Institute's Internal Quality Assurance Cell (IQAC)",
      period: "2021 – 2024"
    }
  ];

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Leadership</h2>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="space-y-4">
          {positions.map((position, index) => (
            <div key={index} className="border-b last:border-b-0 pb-4 last:pb-0">
              <h3 className="text-lg font-semibold text-gray-900">{position.role}</h3>
              <p className="text-gray-700">{position.organization}</p>
              {position.affiliation && (
                <p className="text-gray-600 text-sm">{position.affiliation}</p>
              )}
              {position.department && (
                <p className="text-gray-600">{position.department}</p>
              )}
              {position.period && (
                <p className="text-gray-600">{position.period}</p>
              )}
              {position.details && (
                <p className="text-gray-700 mt-1">{position.details}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}