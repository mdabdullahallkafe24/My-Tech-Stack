import React from "react";
import logoImg from "../assets/logo-text.png";

const Footer: React.FC = () => {
  return (
    <footer
      id="contact"
      className="bg-white border-t border-gray-100 pt-12 px-4 sm:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 pb-10">
          <div>
            <div className="flex items-center mb-3">
              <img
                src={logoImg}
                alt="Dev Stack Logo"
                className="h-7 w-auto object-contain"
              />
            </div>

            <p className="max-w-xs leading-relaxed text-xs sm:text-sm text-gray-500">
              A practical platform for exploring development technologies and
              creating a personalized software stack.
            </p>

            <div className="flex items-center gap-4 mt-5">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900 transition-colors"
              >
                GitHub
              </a>

              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900 transition-colors"
              >
                Twitter
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 sm:gap-16">
            <div>
              <h4 className="font-bold text-gray-900 mb-3 uppercase tracking-wider text-[10px]">
                Product
              </h4>

              <ul className="space-y-2 text-xs sm:text-sm text-gray-500">
                <li>
                  <a
                    href="#home"
                    className="hover:text-gray-900 transition-colors"
                  >
                    Home
                  </a>
                </li>

                <li>
                  <a
                    href="#technologies"
                    className="hover:text-gray-900 transition-colors"
                  >
                    Technologies
                  </a>
                </li>

                <li>
                  <a
                    href="#projects"
                    className="hover:text-gray-900 transition-colors"
                  >
                    Projects
                  </a>
                </li>
              </ul>
            </div>

            <div id="about">
              <h4 className="font-bold text-gray-900 mb-3 uppercase tracking-wider text-[10px]">
                Company
              </h4>

              <ul className="space-y-2 text-xs sm:text-sm text-gray-500">
                <li>
                  <a
                    href="#about"
                    className="hover:text-gray-900 transition-colors"
                  >
                    About
                  </a>
                </li>

                <li>
                  <a
                    href="#contact"
                    className="hover:text-gray-900 transition-colors"
                  >
                    Contact
                  </a>
                </li>

                <li>
                  <a
                    href="#careers"
                    className="hover:text-gray-900 transition-colors"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-3 uppercase tracking-wider text-[10px]">
                Legal
              </h4>

              <ul className="space-y-2 text-xs sm:text-sm text-gray-500">
                <li>
                  <a
                    href="#privacy"
                    className="hover:text-gray-900 transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>

                <li>
                  <a
                    href="#terms"
                    className="hover:text-gray-900 transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-400">
          <p>
            © {new Date().getFullYear()} Dev Stack. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <a
              href="#privacy"
              className="hover:text-gray-900 transition-colors"
            >
              Privacy
            </a>

            <a
              href="#terms"
              className="hover:text-gray-900 transition-colors"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;