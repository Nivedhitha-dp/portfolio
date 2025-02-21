import React from 'react';

export default function Awards() {
  const awards = [
    "Virtusa Jatayu Hackathon (India-Sri Lanka Corporate), Finalist, 2023",
    "Best Performer – 2nd Best Outgoing Student, 2020-2024",
    "ISTE State Level Best Student Award, 2023-2024",
    "ISTE State Level Best Student Award, 2022-2023",
    "Smart India Hackathon (SIH) Top 5 Finalist, March 2021",
    "Intra-department Paper Presentation Competition, First Prize, 2022 and 2023",
    "National Level Innovative Project, Bannari Amman Institute of Technology, First Prize, November 2021",
    "Product Innovation Challenge, Science and Innovation Club, First Prize, October 2021",
    "NPTEL Course on Product Design and Innovation, National Topper, March 2021"
  ];

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Honors & Awards</h2>
      <div className="bg-white rounded-lg shadow p-6">
        <ul className="space-y-2">
          {awards.map((award, index) => (
            <li key={index} className="text-gray-700">
              • {award}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}