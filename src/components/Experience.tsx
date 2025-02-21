import React from 'react';
import { ExternalLink } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      company: "Laboratory of Perceptive Robotics and Grounded Reasoning Systems",
      role: "Research Assistant, Under Prof. Odest Chadwicke Jenkins, Dept. of Robotics, University of Michigan",
      date: "Jan'25 - Present",
      achievements: [
        "Implemented Visual Language Models (VLM) in robotic manipulation tasks, enhancing perception, dynamic simulation, and manipulation planning capabilities.",
        "Developed data-driven models to boost semantic understanding and affordance perception in robotic systems using physics-based Gaussian methods and neural networks.",
        "Led experiments with Fetch robots for Undo-Redo manipulation tasks, including handling delicate objects such as flowers and pillows, demonstrating precision and adaptability in dynamic environments.",
        "Collaborated with Amazon's Lab126 CoRo Astro team, aligning research objectives with industry standards under the guidance of PI Prof. Jenkins.",
        "Utilized a diverse tech stack, including Python, ROS (Robot Operating System), PyBullet, CLIP model, Google Colab, TensorFlow, and PyTorch, ensuring robust model development and deployment."
      ],
      image: "https://progress.eecs.umich.edu/images/slideshow/chad_fetch.jpg",
      companyUrl: "https://progress.eecs.umich.edu/"
    },
    {
      company: "Forge Innovation and Ventures",
      role: "Graduate Innovation Engineer",
      date: "Jan'24 – June'24",
      achievements: [
        "Enhanced Programming Skills: Developed and optimized software solutions using Python and Java, streamlining industrial automation processes.",
        "Innovative Robotics Solutions: Designed and implemented robotics systems using ROS and Arduino, leading to an increase in operational efficiency.",
        "Smart Mesh Automated System: Led a team to develop and deploy a Smart Mesh Automated System using IoT technology, resulting in a 30% increase in energy efficiency and a 20% reduction in operational expenses.",
        "Comprehensive Web/App Development: Created dynamic web and mobile applications, enhancing user experience and platform usability."
      ],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800&h=400",
      companyUrl: "https://forgeinnovation.tech"
    },
    {
      company: "Prismatic Software Pvt Ltd",
      role: "Software Engineer Intern",
      location: "Pune",
      date: "Sep'23 – Nov'23",
      achievements: [
        "Conversational AI Development: Developed a conversational AI for healthcare support, utilizing ML, NLP – LSTM and DIET Classifier, to optimize customer interaction and enhance patient care.",
        "Prescription Handling System: Implemented an automatic handwritten prescription handling system, improving the accuracy and efficiency of prescription processing.",
        "User-centered Healthcare Application: Led design and development efforts for a healthcare application, incorporating user requirements and feedback to ensure a user-centered approach, ultimately improving user engagement and satisfaction."
      ],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800&h=400",
      companyUrl: "https://prismaticsoftware.com"
    }
  ];

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Work Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-white rounded-lg shadow overflow-hidden">
            {exp.image && (
              <img 
                src={exp.image} 
                alt={exp.company}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {exp.company}
                    {exp.companyUrl && (
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center ml-2 text-blue-600 hover:text-blue-800"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </h3>
                  <p className="text-lg text-gray-700">{exp.role}</p>
                  {exp.location && <p className="text-gray-600">{exp.location}</p>}
                </div>
                <p className="text-gray-600">{exp.date}</p>
              </div>
              <ul className="mt-4 space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="text-gray-700">
                    • {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}