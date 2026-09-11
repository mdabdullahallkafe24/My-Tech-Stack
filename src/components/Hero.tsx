import React from "react";
import bannerImg from "../assets/banner-stack.png";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="max-w-7xl mx-auto px-4 sm:px-8 pt-8 sm:pt-12 pb-12 sm:pb-16 grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12"
    >
      <div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
          Build Your Ideal
          <br />
          <span className="bg-(--brand-gradient) bg-clip-text text-transparent">
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
            className="bg-(--brand-gradient) hover:opacity-90 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold shadow-sm transition-all duration-300"
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
  );
};

export default Hero;