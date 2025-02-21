import React from 'react';

export default function Skills() {
  const skills = {
    "Programming & Development": "Python, C, C++, Java, SQL, Git, Javascript, HTML, CSS",
    "ML, NLP, CV": "NumPy, Pandas, Matplotlib, Sklearn",
    "Frameworks": "TensorFlow, PyTorch, Scikit-Learn, OpenCV, LLMs, VLMs, VQAs, RASA, NLTK, Hugging Face",
    "Design and Visualization": "Figma, WordPress, Tableau, Power BI, Altair, QuickSight"
  };

  const certifications = [
    {
      category: "Machine Learning",
      items: [
        "Machine Learning with Python [IBM]",
        "Machine Learning for all [Coursera]",
        "Mathematics for Machine Learning [Coursera]",
        "Support Vector Machines [Great Learning]",
        "Mastering ML and DS [Infosys Springboard]",
        "Generative AI [Coursera]"
      ]
    },
    {
      category: "Data Science",
      items: [
        "Python Basics for Data Science [Edx]",
        "Python for Data Science [NPTEL]",
        "Introduction to R Programming [Great Learning]",
        "Analysing Video with OpenCV and NumPy"
      ]
    }
  ];

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Skills & Certifications</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Technical Skills</h3>
          <div className="space-y-3">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <p className="font-medium text-gray-700">{category}:</p>
                <p className="text-gray-600">{items}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Certifications</h3>
          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <div key={index}>
                <h4 className="font-medium text-gray-700 mb-2">{cert.category}</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {cert.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}