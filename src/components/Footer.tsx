import React from "react";
import logoImg from "../assets/logo-text.png";

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-white border-t border-gray-100 pt-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left gap-8 pb-10">
          <div className="flex flex-col items-center md:items-start">
            <img src={logoImg} alt="Dev Stack" className="h-7 w-auto object-contain mb-3" />
            <p className="max-w-xs text-xs text-gray-500 leading-relaxed">
              Curated tools, technologies, and resources for developers building modern software.
            </p>
            <div className="flex items-center gap-4 mt-4 text-xs font-medium text-gray-500">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-gray-900 transition-colors">GitHub</a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-gray-900 transition-colors">Twitter</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-gray-900 transition-colors">LinkedIn</a>
            </div>
          </div>

          <div className="hidden md:grid grid-cols-3 gap-12 text-left">
            <div>
              <h4 className="font-bold text-gray-900 mb-3 uppercase tracking-wider text-[10px]">Product</h4>
              <ul className="space-y-2 text-xs text-gray-500">
                <li><a href="#home" className="hover:text-gray-900">Home</a></li>
                <li><a href="#technologies" className="hover:text-gray-900">Technologies</a></li>
                <li><a href="#projects" className="hover:text-gray-900">Projects</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-3 uppercase tracking-wider text-[10px]">Company</h4>
              <ul className="space-y-2 text-xs text-gray-500">
                <li><a href="#about" className="hover:text-gray-900">About</a></li>
                <li><a href="#contact" className="hover:text-gray-900">Contact</a></li>
                <li><a href="#careers" className="hover:text-gray-900">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-3 uppercase tracking-wider text-[10px]">Legal</h4>
              <ul className="space-y-2 text-xs text-gray-500">
                <li><a href="#privacy" className="hover:text-gray-900">Privacy Policy</a></li>
                <li><a href="#terms" className="hover:text-gray-900">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 py-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-[11px] text-gray-400">
          <p>© {new Date().getFullYear()} Dev Stack. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#privacy" className="hover:text-gray-600">Privacy</a>
            <a href="#terms" className="hover:text-gray-600">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;