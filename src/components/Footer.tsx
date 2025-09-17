import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 4C12.95 4 4 12.95 4 24C4 35.05 12.95 44 24 44C35.05 44 44 35.05 44 24C44 12.95 35.05 4 24 4Z" fill="white" fillOpacity="0.2"/>
                <path d="M24 8C15.16 8 8 15.16 8 24C8 32.84 15.16 40 24 40C32.84 40 40 32.84 40 24C40 15.16 32.84 8 24 8Z" fill="white" fillOpacity="0.2"/>
                <path d="M24 12C17.37 12 12 17.37 12 24C12 30.63 17.37 36 24 36C30.63 36 36 30.63 36 24C36 17.37 30.63 12 24 12Z" fill="white"/>
                <path d="M24 18L28 28H20L24 18Z" fill="#3B82F6"/>
              </svg>
              <span className="text-xl font-bold">AthleteOne</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Connecting athletes and coaches through AI-powered tools that enable merit-based recognition for every athlete's journey.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition" aria-label="Facebook">
                <span className="material-symbols-outlined">facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition" aria-label="Twitter">
                <span className="material-symbols-outlined">twitter</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition" aria-label="Instagram">
                <span className="material-symbols-outlined">instagram</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition" aria-label="LinkedIn">
                <span className="material-symbols-outlined">linkedin</span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Platform</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/athlete" className="hover:text-white transition">For Athletes</Link></li>
              <li><Link to="/coach" className="hover:text-white transition">For Coaches</Link></li>
              <li><Link to="/features" className="hover:text-white transition">Features</Link></li>
              <li><a href="#" className="hover:text-white transition">Pricing</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/about" className="hover:text-white transition">About</Link></li>
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
              <li><a href="#" className="hover:text-white transition">Careers</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 AthleteOne. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition text-sm">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white transition text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
