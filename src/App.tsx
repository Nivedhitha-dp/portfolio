import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, Youtube } from 'lucide-react';
import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Awards from './components/Awards';
import Leadership from './components/Leadership';
import ClubsSocieties from './components/ClubsSocieties';
import Volunteer from './components/Volunteer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <Publications />
        <Awards />
        <Leadership />
        <ClubsSocieties />
        <Volunteer />
        
        <footer className="mt-20 pb-8 text-center text-gray-600">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="mailto:nividp@umich.edu" className="hover:text-blue-600">
              <Mail size={24} />
            </a>
            <a href="https://github.com/Nivedhitha-dp" className="hover:text-blue-600" target="_blank" rel="noopener noreferrer">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/nivedhitha-dp/" className="hover:text-blue-600" target="_blank" rel="noopener noreferrer">
              <Linkedin size={24} />
            </a>
            <a href="https://www.youtube.com/@NivedhithaDP" className="hover:text-red-600" target="_blank" rel="noopener noreferrer">
              <Youtube size={24} />
            </a>
          </div>
          <p>© 2024 Nivedhitha Dondati Purushotham. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}

export default App;