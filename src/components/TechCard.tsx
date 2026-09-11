import React from "react";
import { Technology } from "../types";

interface TechCardProps {
  item: Technology;
  onAdd: (item: Technology) => void;
  isAdded?: boolean;
}

const TechCard: React.FC<TechCardProps> = ({

  item,
  onAdd,
  isAdded = false,
}) => {


  return (
    <div
      className={`bg-white rounded-2xl p-6 shadow-sm flex flex-col justify-between transition-all duration-300 ${
        isAdded
          ? "border-2 border-pink-600 shadow-md"
          : "border border-gray-100 hover:shadow-md"
      }`}
    >


            <div>
            <div className="flex justify-between items-start mb-4">
             <div className="w-10 h-10 flex items-center justify-center">
            {item.icon ? (
              <img
                src={item.icon}
                alt={item.name}
                className="w-8 h-8 object-contain"
              />
            ) : (
              <span className="text-2xl">⚡</span>
            )}
          </div>


              {item.badge && (
              <span className="bg-emerald-50 text-emerald-600 text-[10px] font-semibold px-2.5 py-1 rounded-full">
              {item.badge}
            </span>
             )}
            </div>

    
           <h3 className="font-bold text-gray-900 text-base mb-1">
          {item.name}
            </h3>

      
        <p className="text-gray-500 text-xs leading-relaxed mb-6 line-clamp-3">
          {item.description}
        </p>
        </div>

        <div>
      
          <div className="flex items-center justify-between text-[10px] text-gray-400 mb-4 pt-2 border-t border-gray-50">
          <div className="flex flex-wrap gap-2">
            <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
              {item.category}
            </span>

            <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
              {item.difficulty}
            </span>
          </div>

          <span className="text-amber-500 font-medium flex items-center gap-1">
            ★ {item.rating}
          </span>
        </div>

     
        <button
          onClick={() => onAdd(item)}
          disabled={isAdded}
          className={`w-full py-2.5 rounded-xl text-xs font-semibold transition-all ${
            isAdded
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "gradient-btn hover:opacity-90 text-white"
          }`}
        >
          {isAdded ? "✓ Added to Stack" : "Add to Stack"}
        </button>
      </div>
    </div>
  );
};

export default TechCard;