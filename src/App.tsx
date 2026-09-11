import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import TechCard from "./components/TechCard";
import StackSidebar from "./components/StackSidebar";

import { Technology } from "./types";


import bannerImg from "./assets/banner-stack.png";
import logoImg from "./assets/logo-text.png";

const App: React.FC = () => {
  const [techs, setTechs] = useState<Technology[]>([]);
  const [myStack, setMyStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  
  useEffect(() => {
    const loadTechnologies = async () => {
      try {
        setLoading(true);

        const response = await fetch("/technologies.json");

        if (!response.ok) {
          throw new Error("Failed to load technology data");
        }

        const data: Technology[] = await response.json();

        setTechs(data);
      } catch (err) {
        console.error("Error loading JSON:", err);
        setError("Unable to load technologies. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    loadTechnologies();
  }, []);


  const handleAddToStack = (tech: Technology) => {
    const isExist = myStack.some((item) => item.id === tech.id);

    if (isExist) {
      toast.error(`${tech.name} is already in your stack!`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });

      return;
    }

    setMyStack((previousStack) => [...previousStack, tech]);

    toast.success(`${tech.name} added to your stack!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });
  };


  const handleRemoveFromStack = (id: string) => {
    const itemToRemove = myStack.find((item) => item.id === id);

    setMyStack((previousStack) =>
      previousStack.filter((item) => item.id !== id)
    );

    if (itemToRemove) {
      toast.info(`${itemToRemove.name} removed from stack`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
    }
  };


  const handleRemoveAll = () => {
    if (myStack.length === 0) {
      return;
    }

    setMyStack([]);

    toast.warn("All technologies removed!", {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
    
      <ToastContainer />

  
      <Navbar />

    
      <section
        id="home"
        className="max-w-7xl mx-auto px-4 sm:px-8 pt-8 sm:pt-12 pb-12 sm:pb-16 grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12"
      >
     
        <div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            Build Your Ideal
            <br />
            <span className="bg-[var(--brand-gradient)] bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="text-gray-500 text-sm sm:text-base max-w-xl leading-relaxed mb-6 sm:mb-8">
            Explore modern frontend, backend, database, and development tools.
            Compare technologies and build a stack that fits your next project.
          </p>

     
          <div className="flex flex-wrap gap-3 sm:gap-4">
            <a
              href="#technologies"
              className="bg-[var(--brand-gradient)] hover:opacity-90 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold shadow-sm transition-all duration-300"
            >
              Explore Technologies
            </a>

            <a
              href="#about"
              className="bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </div>

   
        <div className="flex justify-center">
          <img
            src={bannerImg}
            alt="Dev Stack Illustration"
            className="w-full max-w-xs sm:max-w-md object-contain drop-shadow-xl"
          />
        </div>
      </section>

  
      <section
        id="technologies"
        className="max-w-7xl mx-auto px-4 sm:px-8 pb-24"
      >
     
        <div className="mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
            Explore the{" "}
            <span className="bg-[var(--brand-gradient)] bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-gray-400 mt-1">
            Pick technologies from different categories to build your ideal
            development stack.
          </p>
        </div>

       
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
     
          <div className="lg:col-span-3">
        
            {loading && (
              <div className="flex flex-col items-center justify-center py-16">
                <div className="w-10 h-10 border-4 border-gray-200 border-t-pink-500 rounded-full animate-spin mb-4"></div>

                <p className="text-sm text-gray-500">
                  Loading technologies...
                </p>
              </div>
            )}

            {!loading && error && (
              <div className="flex items-center justify-center py-16">
                <p className="text-sm text-red-500 text-center">{error}</p>
              </div>
            )}

          
            {!loading && !error && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {techs.map((item) => {
                  const isAdded = myStack.some(
                    (stackItem) => stackItem.id === item.id
                  );

                  return (
                    <TechCard
                      key={item.id}
                      item={item}
                      onAdd={handleAddToStack}
                      isAdded={isAdded}
                    />
                  );
                })}
              </div>
            )}

        
            {!loading && !error && techs.length === 0 && (
              <div className="flex items-center justify-center py-16">
                <p className="text-sm text-gray-500">
                  No technologies found.
                </p>
              </div>
            )}
          </div>

         
          <div className="lg:col-span-1">
            <StackSidebar
              myStack={myStack}
              onRemove={handleRemoveFromStack}
              onRemoveAll={handleRemoveAll}
            />
          </div>
        </div>
      </section>

     
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
    </div>
  );
};

export default App;















//cd My-Tech-Stack
//npm run dev