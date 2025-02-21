import React from 'react';

export default function Volunteer() {
  const activities = [
    {
      title: "Gramam Schemes - Mobile Application",
      date: "Aug 2022 - Mar 2024",
      organization: "R.M.K Engineering College",
      description: "Received funding of 1 Lakh for the development of a mobile application benefiting village panchayat agricultural and rural schemes. Served as a mentor for the project, guiding the development team and ensuring successful implementation."
    },
    {
      title: "Katral Inimai",
      description: "Served as a tutor for government school students, providing innovative teaching methods at no cost to improve their technical and extended learning capabilities. Additionally, contributed to the development and implementation of a face recognition system for government schools, enabling contactless attendance during the COVID-19 pandemic."
    }
  ];

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Volunteer Work</h2>
      <div className="space-y-6">
        {activities.map((activity, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-semibold text-gray-900">{activity.title}</h3>
              {activity.date && <p className="text-gray-600">{activity.date}</p>}
            </div>
            {activity.organization && (
              <p className="text-gray-700 mb-2">{activity.organization}</p>
            )}
            <p className="text-gray-700">{activity.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}