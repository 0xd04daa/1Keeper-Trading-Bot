import React, { useState } from 'react';
import { Search, Wallet, User, ChevronDown } from 'lucide-react';

const Navbar: React.FC = () => {
  const [activeItem, setActiveItem] = useState('Explore');
  const [isChainOpen, setIsChainOpen] = useState(false);
  const [selectedChain, setSelectedChain] = useState<'SOL' | 'BNB'>('SOL');

  const navItems = ['Explore', 'Pulse', 'Trackers', 'CopyTrade', 'Portfolio', 'Rewards'];

  const chains = [
      { id: 'SOL', label: 'Solana', icon: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png' },
      { id: 'BNB', label: 'BNB', icon: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/binance/info/logo.png' }
  ];

  const currentChain = chains.find(c => c.id === selectedChain) || chains[0];

  return (
    <nav className="h-[64px] w-full border-b border-line flex items-center justify-between px-4 bg-bg shrink-0 z-50">
      {/* Left */}
      <div className="flex items-center gap-6">
        <div className="text-xl font-bold tracking-tighter mr-2 text-white">MEMEDEX</div>
        <div className="flex items-center gap-1 h-full">
          {navItems.map((item) => (
            <button 
              key={item} 
              onClick={() => setActiveItem(item)}
              className={`text-white text-[14px] font-medium transition-colors px-3 py-1.5 rounded flex items-center ${
                activeItem === item ? 'bg-[#2D2D2E]' : 'hover:bg-[#232626]'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Center Right - Search */}
      <div className="flex-1 max-w-md mx-8">
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={18} className="text-gray-500 group-hover:text-gray-300" />
          </div>
          <input
            type="text"
            className="block w-full h-[32px] pl-10 pr-12 border border-line rounded bg-btn-default text-gray-300 placeholder-gray-600 focus:outline-none focus:border-gray-500 text-[12px]"
            placeholder="Search by name,ticker,CA"
          />
          <div className="absolute inset-y-0 right-0 pr-2 flex items-center pointer-events-none">
             <kbd className="inline-flex items-center border border-gray-600 rounded px-1.5 h-5 text-[10px] font-sans font-medium text-gray-500">
               ⌘ K
             </kbd>
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-3">
        {/* Chain Selector */}
        <div className="relative">
            <button 
                onClick={() => setIsChainOpen(!isChainOpen)}
                className="h-[32px] flex items-center gap-2 px-3 bg-btn-default border border-line rounded hover:bg-data-bg-hover transition-colors text-white"
            >
            <img 
                src={currentChain.icon} 
                alt={currentChain.id} 
                width="16" 
                height="16" 
                className="rounded-full"
            />
            <span className="text-[14px] font-medium">{currentChain.id}</span>
            <ChevronDown size={14} className={`text-gray-500 transition-transform ${isChainOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isChainOpen && (
                <>
                <div className="fixed inset-0 z-40" onClick={() => setIsChainOpen(false)}></div>
                <div className="absolute top-full right-0 mt-2 w-[140px] bg-[#1e1e1e] border border-line rounded-lg shadow-xl z-50 overflow-hidden py-1">
                    {chains.map((chain) => (
                        <button
                            key={chain.id}
                            onClick={() => {
                                setSelectedChain(chain.id as 'SOL' | 'BNB');
                                setIsChainOpen(false);
                            }}
                            className="flex items-center gap-3 w-full px-3 py-2 hover:bg-[#2B2D2E] transition-colors text-left"
                        >
                            <img src={chain.icon} alt={chain.label} width="18" height="18" className="rounded-full" />
                            <span className="text-[14px] text-gray-200">{chain.label}</span>
                        </button>
                    ))}
                </div>
                </>
            )}
        </div>

        {/* Deposit */}
        <button className="h-[32px] px-4 bg-[#0078D4] text-white text-sm font-bold rounded hover:bg-[#006cbd] transition-colors flex items-center justify-center">
          Deposit
        </button>

        {/* Wallet */}
        <button className="h-[32px] w-[32px] flex items-center justify-center text-white border border-line rounded bg-btn-default hover:bg-data-bg-hover">
          <Wallet size={16} />
        </button>

        {/* Profile */}
        <button className="h-[32px] w-[32px] flex items-center justify-center text-white border border-line rounded bg-btn-default hover:bg-data-bg-hover">
          <User size={16} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;