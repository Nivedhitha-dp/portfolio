import React from 'react';

export default function Publications() {
  const publications = [
    {
      title: "Smart Attendance System",
      type: "Patent",
      details: "Indian Patent [202241019799]; March 2022"
    },
    {
      title: "Smart Attendance System using DLIB Pre-Trained Neural Network",
      publisher: "IEEE Xplore Digital Library",
      date: "14th March 2023",
      doi: "10.1109/ICSSIT55814.2023.10060958",
      pages: "1258-1261"
    },
    {
      title: "Conversational AI for Healthcare to Improve Member Efficiency",
      conference: "International Conference on Science Technology Engineering and Management (ICSTEM)",
      location: "Coimbatore, India",
      year: "2024",
      doi: "10.1109/ICSTEM61137.2024.10561046"
    }
  ];

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Patents & Publications</h2>
      <div className="space-y-6">
        {publications.map((pub, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold text-gray-900">{pub.title}</h3>
            <div className="mt-2 space-y-1 text-gray-700">
              {pub.type && <p>Type: {pub.type}</p>}
              {pub.publisher && <p>Published in: {pub.publisher}</p>}
              {pub.conference && <p>Conference: {pub.conference}</p>}
              {pub.location && <p>Location: {pub.location}</p>}
              {pub.date && <p>Date: {pub.date}</p>}
              {pub.year && <p>Year: {pub.year}</p>}
              {pub.doi && (
                <p>
                  DOI:{' '}
                  <a 
                    href={`https://doi.org/${pub.doi}`}
                    className="text-blue-600 hover:text-blue-800"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {pub.doi}
                  </a>
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}