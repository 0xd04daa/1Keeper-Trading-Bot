import React from 'react';
import { Settings, Star, Briefcase, Zap, X } from 'lucide-react';

const FavoritesBar: React.FC = () => {
  // Mock favorites
  const favorites = [
    { name: 'PEPE', price: '$0.000012', change: 12.5 },
    { name: 'WIF', price: '$2.45', change: -2.3 },
    { name: 'BONK', price: '$0.000024', change: 5.1 },
  ];

  return (
    <div className="h-[28px] w-full border-b border-line flex bg-bg shrink-0">
      {/* Left Controls */}
      <div className="flex items-center px-2 border-r border-line h-full gap-3">
        <button className="text-gray-500 hover:text-white transition-colors">
          <Settings size={16} />
        </button>
        <button className="text-yellow-500 hover:text-yellow-400 transition-colors">
          <Star size={16} fill="currentColor" />
        </button>
        <button className="text-gray-500 hover:text-white transition-colors">
          <Briefcase size={16} />
        </button>
      </div>

      {/* Right Ticker List */}
      <div className="flex items-center flex-1 overflow-x-auto no-scrollbar">
        {favorites.map((fav, index) => (
          <div key={index} className="flex items-center h-full px-3 border-r border-line hover:bg-data-bg transition-colors cursor-pointer group min-w-fit">
            <div className="w-[14px] h-[14px] rounded-full bg-gray-600 mr-2 flex-shrink-0"></div>
            <span className="text-xs font-semibold mr-2">{fav.name}</span>
            <span className="text-xs text-gray-400 mr-2 font-mono">{fav.price}</span>
            <span className={`text-xs mr-3 font-mono ${fav.change >= 0 ? 'text-accent-green' : 'text-accent-red'}`}>
              {fav.change > 0 ? '+' : ''}{fav.change}%
            </span>
            
            {/* Hover Actions */}
            <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="p-0.5 hover:text-yellow-400 text-gray-500">
                <Zap size={10} />
              </button>
              <button className="px-1.5 py-0.5 bg-accent-green text-[10px] font-bold text-black rounded hover:bg-green-400">
                B
              </button>
              <button className="p-0.5 hover:text-red-400 text-gray-500">
                <X size={10} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesBar;