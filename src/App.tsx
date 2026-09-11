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
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch("/technologies.json");
        if (!res.ok) throw new Error("Failed to fetch data");
        const data = await res.json();
        setTechs(data);
      } catch (err) {
        setError("Unable to load technologies.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleAddToStack = (tech: Technology) => {
    if (myStack.some((item) => item.id === tech.id)) {
      toast.error(`${tech.name} is already in your stack!`);
      return;
    }
    setMyStack((prev) => [...prev, tech]);
    toast.success(`${tech.name} added to your stack!`);
  };

  const handleRemoveFromStack = (id: string) => {
    const item = myStack.find((i) => i.id === id);
    setMyStack((prev) => prev.filter((i) => i.id !== id));
    if (item) toast.info(`${item.name} removed from stack`);
  };

  const handleRemoveAll = () => {
    if (!myStack.length) return;
    setMyStack([]);
    toast.warn("All technologies removed!");
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <ToastContainer position="top-right" autoClose={2500} />

      <Navbar />

      <Hero />

      <section id="technologies" className="max-w-7xl mx-auto px-4 sm:px-8 pb-20">
        <div className="mb-8 text-center md:text-left">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
            Explore the{" "}
            <span className="gradient-text">
              Technologies
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 mt-1">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          <div className="lg:col-span-3 order-2 lg:order-1">
            {loading && (
              <div className="flex justify-center py-12">
                <div className="w-8 h-8 border-4 border-gray-200 border-t-pink-500 rounded-full animate-spin"></div>
              </div>
            )}

            {error && (
              <div className="text-center py-12 text-sm text-red-500">{error}</div>
            )}

            {!loading && !error && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {techs.map((item) => (
                  <TechCard
                    key={item.id}
                    item={item}
                    onAdd={handleAddToStack}
                    isAdded={myStack.some((s) => s.id === item.id)}
                  />
                ))}
              </div>
            )}
          </div>

          <div className="lg:col-span-1 order-1 lg:order-2">
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