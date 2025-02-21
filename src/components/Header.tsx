import React from 'react';
import { Mail, Download } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-6 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Nivedhitha Dondati Purushotham</h1>
            <p className="text-lg text-gray-600 mt-2">Graduate Student at University of Michigan</p>
          </div>
          <div className="mt-4 md:mt-0 flex flex-col items-end">
            <a 
              href="mailto:nividp@umich.edu"
              className="inline-flex items-center text-blue-600 hover:text-blue-700"
            >
              <Mail className="w-5 h-5 mr-2" />
              nividp@umich.edu
            </a>
            <p className="text-gray-600 mt-1">Ann Arbor, MI • (248) 510-8632</p>
            <a
              href="Nivedhitha_DP_Resume.pdf"
              download
              className="mt-3 inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
