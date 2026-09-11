import React from "react";

interface FilterBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  categories: string[];
}

const FilterBar: React.FC<FilterBarProps> = ({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  categories,
}) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6 items-center justify-between bg-slate-800/50 p-4 rounded-xl border border-slate-700/60">
     
      <input
        type="text"
        placeholder="Search technology..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full sm:w-64 bg-slate-900 text-sm text-white px-3.5 py-2 rounded-lg border border-slate-700 focus:outline-none focus:border-indigo-500 placeholder-slate-500"
      />

    
      <div className="flex flex-wrap gap-2 w-full sm:w-auto">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`text-xs px-3 py-1.5 rounded-lg transition-all ${
              selectedCategory === cat
                ? "bg-indigo-600 text-white font-medium shadow"
                : "bg-slate-700/60 text-slate-300 hover:bg-slate-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterBar;