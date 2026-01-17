import React, { useState } from 'react';
import Navbar from './components/Navbar';
import FavoritesBar from './components/FavoritesBar';
import ControlBar from './components/ControlBar';
import MarketTable from './components/MarketTable';
import TradePage from './components/TradePage';
import Footer from './components/Footer';
import { MOCK_TOKENS } from './constants';
import { Chain, TimeFrame, Category, TokenData } from './types';

const App: React.FC = () => {
  const [selectedChain, setSelectedChain] = useState<Chain>('SOL');
  const [timeFrame, setTimeFrame] = useState<TimeFrame>('1h');
  const [category, setCategory] = useState<Category>('New');
  
  // State to track if a token is selected for trading
  const [activeToken, setActiveToken] = useState<TokenData | null>(null);

  const handleBackToMarket = () => {
    setActiveToken(null);
  };

  return (
    <div className="flex flex-col h-screen w-screen bg-bg text-gray-200 overflow-hidden font-sans selection:bg-indigo-500/30">
      <Navbar />
      
      {activeToken ? (
        // Trade View
        <TradePage token={activeToken} onBack={handleBackToMarket} />
      ) : (
        // Market Dashboard View
        <>
          <FavoritesBar />
          <ControlBar 
            selectedChain={selectedChain}
            setSelectedChain={setSelectedChain}
            timeFrame={timeFrame}
            setTimeFrame={setTimeFrame}
            category={category}
            setCategory={setCategory}
          />
          <MarketTable 
            data={MOCK_TOKENS} 
            onTokenSelect={(token) => setActiveToken(token)}
          />
        </>
      )}
      
      <Footer />
    </div>
  );
};

export default App;