import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "Humanized Visual Question Answering Systems",
      date: "Aug'22 – Sep'22",
      description: [
        "Led a team of three to develop a system integrating advanced NLP and computer vision techniques to answer image content questions (VQA) with human-like understanding, incorporating feedback loops and bias mitigation strategies.",
        "Implemented a multi-model architecture using reinforcement learning for model refinement and follow-up questions to improve confidence scores, enhancing user interactions through text and audio responses."
      ],
      tech: "TensorFlow, PyTorch, Numpy, Pandas, Transformer-based models (BLIP, BLIP2), Gradio",
      image: "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?auto=format&fit=crop&q=80&w=800&h=400",
      links: {
        github: "https://github.com/Nivedhitha-dp/VQA-System",
        demo: "https://huggingface.co/spaces/Nivedhitha/vqa-demo"
      }
    },
    {
      title: "Karnataka Accident Data Analysis",
      date: "Jan'24 – May'24",
      description: [
        "Developed an advanced data analysis system to identify accident patterns, high-risk locations, and contributing factors using a comprehensive dataset of Bangalore traffic accidents (2016-2023) with OpenCV.",
        "Utilized predictive modelling with Random Forest, analysed real-time datasets, forecasted future black spots, and recommended optimized traffic deployment and safety measures using the Django framework."
      ],
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800&h=400",
      links: {
        github: "https://github.com/Nivedhitha-dp/Accident-Analysis"
      }
    }
  ];

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Projects</h2>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow overflow-hidden">
            {project.image && (
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                <p className="text-gray-600">{project.date}</p>
              </div>
              <ul className="space-y-2">
                {project.description.map((desc, i) => (
                  <li key={i} className="text-gray-700">• {desc}</li>
                ))}
              </ul>
              {project.tech && (
                <p className="mt-4 text-gray-700">
                  <span className="font-medium">Technologies:</span> {project.tech}
                </p>
              )}
              {project.links && (
                <div className="mt-4 flex space-x-4">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-gray-600 hover:text-blue-600"
                    >
                      <Github className="w-5 h-5 mr-1" />
                      Code
                    </a>
                  )}
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-gray-600 hover:text-blue-600"
                    >
                      <ExternalLink className="w-5 h-5 mr-1" />
                      Live Demo
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}