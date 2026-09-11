import React from "react";
import bannerImg from "../assets/banner-stack.png";

const Hero: React.FC = () => {
  return (
    <section id="home" className="max-w-7xl mx-auto px-4 sm:px-8 pt-8 sm:pt-12 pb-12 sm:pb-16 grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12">
      <div className="text-center md:text-left">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
          Build Your Ideal{" "}
          <span className="gradient-text">
            Development Stack
          </span>
        </h1>

        <p className="text-gray-500 text-xs sm:text-base max-w-xl mx-auto md:mx-0 leading-relaxed mb-6 sm:mb-8">
          Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 sm:gap-4">
          <a
            href="#technologies"
            className="w-full sm:w-auto gradient-btn hover:opacity-90 text-white px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-center shadow-sm transition-all duration-200"
          >
            Explore Technologies
          </a>

          <a
            href="#about"
            className="w-full sm:w-auto bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-center transition-all duration-200"
          >
            Learn More
          </a>
        </div>
      </div>

      <div className="flex justify-center order-first md:order-last">
        <img
          src={bannerImg}
          alt="Dev Stack"
          className="w-full max-w-xs sm:max-w-md object-contain"
        />
      </div>
    </section>
  );
};

export default Hero;