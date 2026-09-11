import React from "react";
import { Technology } from "../types";

interface StackSidebarProps {
  myStack: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

const StackSidebar: React.FC<StackSidebarProps> = ({ myStack, onRemove, onRemoveAll }) => {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm h-fit">
      <h2 className="text-lg font-bold text-gray-900 mb-1">Your Stack</h2>
      <p className="text-xs text-gray-400 mb-4">{myStack.length} Technology Selected</p>

      {myStack.length === 0 ? (
        <div className="text-center py-8 border border-dashed border-gray-200 rounded-xl text-gray-400 text-xs">
          No items added to your stack yet.
        </div>
      ) : (
        <>
          <div className="space-y-3 mb-6">
            {myStack.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-gray-50/80 border border-gray-100 p-3 rounded-xl"
              >
                <div className="flex items-center space-x-3">
                  <img src={item.icon} alt={item.name} className="w-6 h-6 object-contain" />
                  <span className="text-xs font-semibold text-gray-800">{item.name}</span>
                </div>
                <button
                  onClick={() => onRemove(item.id)}
                  className="text-gray-400 hover:text-red-500 text-sm font-bold transition-colors px-1"
                >
                  ×
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={onRemoveAll}
            className="w-full border border-red-200 text-red-500 hover:bg-red-50 text-xs font-semibold py-2.5 rounded-xl transition-colors"
          >
            Remove All
          </button>
        </>
      )}
    </div>
  );
};

export default StackSidebar;