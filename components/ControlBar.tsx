import React from 'react';
import { Ban, Filter, Wallet, Zap, Settings2, ChevronDown } from 'lucide-react';
import { Chain, TimeFrame, Category } from '../types';

interface ControlBarProps {
  selectedChain: Chain;
  setSelectedChain: (c: Chain) => void;
  timeFrame: TimeFrame;
  setTimeFrame: (t: TimeFrame) => void;
  category: Category;
  setCategory: (c: Category) => void;
}

const ControlBar: React.FC<ControlBarProps> = ({
  selectedChain,
  setSelectedChain,
  timeFrame,
  setTimeFrame,
  category,
  setCategory
}) => {
  const timeFrames: TimeFrame[] = ['1m', '5m', '1h', '6h', '24h'];

  return (
    <div className="h-[60px] w-full border-b border-line flex justify-between items-center px-4 bg-bg shrink-0">
      {/* Left Section: Category & Chain */}
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-4 border-r border-line pr-6">
          <button 
            onClick={() => setCategory('New')}
            className={`text-[20px] font-bold transition-colors ${category === 'New' ? 'text-white' : 'text-gray-500 hover:text-gray-300'}`}
          >
            New Pairs
          </button>
          <button 
            onClick={() => setCategory('Hot')}
            className={`text-[20px] font-bold transition-colors ${category === 'Hot' ? 'text-white' : 'text-gray-500 hover:text-gray-300'}`}
          >
            Hot
          </button>
        </div>

        <div className="flex items-center gap-3">
          <button 
            type="button"
            onClick={() => setSelectedChain('SOL')}
            className={`
                relative flex items-center justify-center
                w-[32px] h-[32px] rounded-full
                transition-all duration-150
                ${selectedChain === 'SOL' 
                  ? 'bg-[#2B2B2B]/60 scale-110' 
                  : 'hover:bg-[#2B2B2B]/30 opacity-60 hover:opacity-100'}
            `}
            aria-label="Switch to Solana"
          >
            <img 
                alt="SOL" 
                loading="lazy" 
                width="20" 
                height="20" 
                decoding="async" 
                data-nimg="1" 
                src="https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png" 
                style={{color: 'transparent'}} 
            />
          </button>
          
          <button 
            type="button"
            onClick={() => setSelectedChain('BSC')}
            className={`
                relative flex items-center justify-center
                w-[32px] h-[32px] rounded-full
                transition-all duration-150
                ${selectedChain === 'BSC' 
                  ? 'bg-[#2B2B2B]/60 scale-110' 
                  : 'hover:bg-[#2B2B2B]/30 opacity-60 hover:opacity-100'}
            `}
            aria-label="Switch to BNB"
          >
            <img 
                alt="BNB" 
                loading="lazy" 
                width="20" 
                height="20" 
                decoding="async" 
                data-nimg="1" 
                className="grayscale-[0.3]" 
                src="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/binance/info/logo.png" 
                style={{color: 'transparent'}} 
            />
          </button>
        </div>
      </div>

      {/* Right Section: Tools & Filters */}
      <div className="flex items-center gap-3">
        
        {/* Blacklist */}
        <button className="flex items-center justify-center w-[32px] h-[32px] rounded border border-line bg-btn-default hover:bg-data-bg-hover text-gray-400">
          <Ban size={16} />
        </button>

        <div className="h-6 w-px bg-line mx-1"></div>

        {/* Timeframes */}
        <div className="flex items-center bg-btn-default rounded border border-line h-[32px] p-[2px]">
          {timeFrames.map((tf) => (
            <button
              key={tf}
              onClick={() => setTimeFrame(tf)}
              className={`h-full px-3 flex items-center justify-center text-[14px] rounded transition-colors ${timeFrame === tf ? 'bg-gray-600 text-white' : 'text-gray-500 hover:text-gray-300'}`}
            >
              {tf}
            </button>
          ))}
        </div>

        {/* Filter */}
        <button className="flex items-center gap-2 h-[32px] px-3 rounded border border-line bg-btn-default hover:bg-data-bg-hover text-gray-300">
          <Filter size={14} />
          <span className="text-[14px]">Filter</span>
        </button>

        <div className="h-6 w-px bg-line mx-1"></div>

        {/* Wallet Selector */}
        <button className="flex items-center h-[32px] pl-3 pr-2 rounded border border-line bg-btn-default hover:bg-data-bg-hover text-gray-300 gap-3">
          <div className="flex items-center gap-2">
            <Wallet size={16} className="text-gray-400" />
            <span className="text-[14px] text-white font-medium">1</span>
          </div>
          
          <div className="flex items-center gap-2">
            <img 
                alt="SOL" 
                loading="lazy" 
                width="18" 
                height="18" 
                decoding="async" 
                data-nimg="1" 
                className="w-[18px] h-[18px] rounded-full"
                src="https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png" 
            />
            <span className="text-[14px] text-white font-medium">12.45</span>
          </div>
          
          <ChevronDown size={18} className="text-gray-500 ml-1" />
        </button>

        {/* Quick Buy */}
        <div className="flex items-center gap-2 h-[32px] px-2 rounded border border-line bg-btn-default">
           <span className="text-[14px] text-gray-500">Quick Buy</span>
           <div className="flex gap-1">
              <span className="text-[14px] font-mono text-accent-green">0.1</span>
              <span className="text-[14px] text-gray-500">SOL</span>
           </div>
           <Zap size={12} className="text-yellow-500 fill-yellow-500" />
        </div>

        {/* Transaction Settings */}
        <button className="flex items-center justify-center w-[32px] h-[32px] rounded border border-line bg-btn-default hover:bg-data-bg-hover text-gray-400">
          <Settings2 size={16} />
        </button>

      </div>
    </div>
  );
};

export default ControlBar;