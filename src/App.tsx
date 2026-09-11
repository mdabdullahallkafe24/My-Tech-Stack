import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechCard from "./components/TechCard";
import StackSidebar from "./components/StackSidebar";
import Footer from "./components/Footer";

import { Technology } from "./types";

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

      <Hero />

      <section
        id="technologies"
        className="max-w-7xl mx-auto px-4 sm:px-8 pb-24"
      >
        <div className="mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
            Explore the{" "}
            <span className="bg-(--brand-gradient) bg-clip-text text-transparent">
              Development Stack
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

      <Footer />
    </div>
  );
};

export default App;













//cd My-Tech-Stack
//npm run dev