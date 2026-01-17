import React, { useState } from 'react';
import { TokenData } from '../types';
import { 
  ArrowLeft, Settings, Maximize2, Wallet, 
  EyeOff, ChefHat, AtSign, Camera, Copy, Share2, Star, 
  Pill, User, Globe, Send, Search, Eye,
  RefreshCcw, Crown, Megaphone, ShoppingBag
} from 'lucide-react';

interface TradePageProps {
  token: TokenData;
  onBack: () => void;
}

const TradePage: React.FC<TradePageProps> = ({ token, onBack }) => {
  const [side, setSide] = useState<'buy' | 'sell'>('buy');
  const [amount, setAmount] = useState('');
  const [activeTab, setActiveTab] = useState('Trades');

  const bottomTabs = ['Trades', 'Positions', 'Orders', 'Holders', 'Top Traders', 'Tracking', 'DCA', 'LiquidityPool', 'Dev Token'];

  return (
    <div className="flex-1 flex flex-col bg-bg overflow-hidden relative">
      {/* 1. Token Header Bar - Split Layout */}
      <div className="flex flex-row flex-shrink-0 max-h-[80px] min-h-[80px] border-b border-line bg-bg w-full">
        
        {/* LEFT SECTION: Token Info & Stats (Flex-1) */}
        <div className="flex-1 flex items-center px-4 gap-4 min-w-0">
            <button onClick={onBack} className="text-gray-500 hover:text-white transition-colors shrink-0">
                <ArrowLeft size={18} />
            </button>

            {/* Main Header Content Container */}
            <div className="flex flex-row flex-1 h-full gap-[16px] justify-start items-center overflow-x-auto no-scrollbar">
                
                {/* Identity Block - New Design */}
                <div className="min-w-0 flex flex-row px-[12px] gap-[12px] justify-start items-center">
                    {/* Image Block */}
                    <div className="relative w-[40px] h-[40px] sm:w-[62px] sm:h-[62px] justify-center items-center flex-shrink-0">
                        {/* Badge */}
                        <span className="contents">
                            <div className="flex bg-[linear-gradient(219deg,#FFD700_0%,#DAA520_48.97%,#B8860B_48.98%,#996515_100%)] absolute top-[32px] left-[32px] sm:top-[53px] sm:left-[53px] p-[1px] w-[14px] h-[14px] sm:w-[16px] sm:h-[16px] justify-center items-center rounded-full z-30">
                                <div className="flex justify-center items-center bg-bg absolute w-[12px] h-[12px] sm:w-[14px] sm:h-[14px] rounded-full z-30">
                                     {/* Raydium Icon Placeholder */}
                                    <div className="w-[8px] h-[8px] sm:w-[10px] sm:h-[10px] bg-gradient-to-br from-purple-500 to-blue-500 rounded-full"></div> 
                                </div>
                            </div>
                        </span>
                        
                        {/* Main Image Container */}
                        <div className="absolute inset-0 flex p-[1px] justify-start items-center rounded-[4px] z-20">
                             <div className="bg-[#232626] flex p-[2px] justify-start items-center rounded-[3px] group w-full h-full">
                                 <div className="w-full h-full flex-shrink-0 group/image relative">
                                     <div className="pointer-events-none border-white/10 border-[1px] absolute inset-0 z-10 rounded-[1px]"></div>
                                     <div className="w-full h-full relative">
                                         <img 
                                            alt={token.name} 
                                            src={token.image} 
                                            className="rounded-[1px] w-full h-full object-cover" 
                                         />
                                         <button type="button" className="absolute inset-0 bg-black/50 opacity-0 group-hover/image:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                                             <Camera className="text-white w-[24px] h-[24px]" />
                                         </button>
                                     </div>
                                 </div>
                             </div>
                        </div>

                        {/* Gradient Background (The Gold Border effect) */}
                        <div className="absolute top-0 left-0 w-full h-full rounded-[4px] z-10 flex items-center justify-center">
                            <div className="bg-[linear-gradient(219deg,#FFD700_0%,#DAA520_48.97%,#B8860B_48.98%,#996515_100%)] absolute top-0 left-0 w-full h-full rounded-[4px] z-10"></div>
                        </div>
                    </div>

                    {/* Text Block */}
                    <div className="flex flex-col gap-[4px] justify-start items-start">
                        <div className="flex flex-row gap-[4px] justify-start items-center">
                            <div className="justify-start items-start min-w-[111px]">
                                <div className="flex flex-row gap-[4px] justify-start items-center">
                                    <span className="text-white text-[12px] sm:text-[16px] font-medium tracking-[-0.02em]">
                                        <div className="min-w-0 whitespace-nowrap overflow-hidden truncate max-w-[96px]">
                                            {token.symbol}
                                        </div>
                                    </span>
                                    <div className="cursor-pointer" role="button" tabIndex={0}>
                                         <span className="flex flex-row gap-[4px] justify-start items-center text-gray-500 hover:text-blue-400 transition-colors duration-[125ms] min-w-0 overflow-hidden cursor-pointer">
                                             <span className="text-inherit text-[12px] sm:text-[16px] font-medium tracking-[-0.02em] truncate max-w-full block">
                                                 <div className="min-w-0 whitespace-nowrap overflow-hidden truncate">
                                                     {token.name}
                                                 </div>
                                             </span>
                                             <Copy size={14} className="text-inherit" />
                                         </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="flex flex-row gap-[8px] justify-start items-center">
                            <span className="text-accent-green text-[12px] sm:text-[14px] font-medium">
                                {token.created.replace(' ago', '')}
                            </span>
                            <div className="flex items-center gap-3">
                                 {/* Social Links Mapped to React Icons */}
                                 <a href="#" className="text-[#5DBCFF] hover:text-[#70c4ff] transition-colors duration-[125ms] flex flex-row flex-shrink-0 gap-[2px] justify-start items-center cursor-pointer">
                                     <User size={16} />
                                 </a>
                                 <a href="#" className="flex items-center">
                                     <Globe size={16} className="text-gray-400 hover:text-blue-400 transition-colors duration-[125ms]" />
                                 </a>
                                 <span className="contents">
                                      <a href="#" className="flex items-center">
                                          <ShoppingBag size={16} className="text-gray-400 hover:text-blue-400 transition-colors duration-[125ms]" />
                                      </a>
                                 </span>
                                 <a href="#" className="flex items-center">
                                      <Search size={16} className="text-gray-400 hover:text-blue-400 transition-colors duration-[125ms]" />
                                 </a>
                                 <span className="contents">
                                      <div className="inline-flex items-center justify-center gap-1 text-gray-400 leading-none">
                                          <Eye size={16} />
                                          <span className="text-[11px] sm:text-[11px] font-medium flex items-center">685</span>
                                      </div>
                                 </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats: Market Cap */}
                <div className="flex flex-col gap-[3px] items-start px-1 min-w-fit">
                    <span className="text-gray-200 text-[18px] font-medium tabular-nums leading-none">{token.marketCap}</span>
                </div>

                {/* Stats: Price */}
                <div className="flex flex-col gap-[3px] items-start px-1 min-w-fit">
                    <span className="text-gray-500 text-[12px] leading-none">Price</span>
                    <span className="text-gray-200 text-[13px] font-medium tabular-nums leading-none">{token.price}</span>
                </div>

                {/* Stats: Liquidity */}
                <div className="flex flex-col gap-[3px] items-start px-1 min-w-fit">
                    <span className="text-gray-500 text-[12px] leading-none">Liquidity</span>
                    <span className="text-gray-200 text-[13px] font-medium tabular-nums leading-none">$1.03M</span>
                </div>

                {/* Stats: Supply */}
                <div className="flex flex-col gap-[3px] items-start px-1 min-w-fit">
                    <span className="text-gray-500 text-[12px] leading-none">Supply</span>
                    <button className="flex items-center gap-1 text-gray-200 text-[13px] font-medium tabular-nums leading-none group">
                        1B <RefreshCcw size={12} className="text-gray-500 group-hover:rotate-180 transition-transform" />
                    </button>
                </div>

                {/* Stats: Fees */}
                <div className="flex flex-col gap-[3px] items-start px-1 min-w-fit">
                    <span className="text-gray-500 text-[12px] leading-none">Fees</span>
                    <div className="flex items-center gap-1 text-gray-200 text-[13px] font-medium tabular-nums leading-none">
                        <div className="w-[14px] h-[14px] rounded-full bg-indigo-500"></div>
                        266.1
                    </div>
                </div>

                {/* Crown */}
                <div className="flex items-center gap-1 text-gray-400 cursor-pointer hover:text-white">
                    <Crown size={14} className="text-yellow-500" />
                    <span className="text-[14px] font-medium">7</span>
                </div>

                {/* Megaphone */}
                <div className="flex items-center">
                    <button className="w-[24px] h-[24px] flex items-center justify-center text-blue-500 hover:text-blue-400">
                        <Megaphone size={16} />
                    </button>
                </div>
            </div>
        </div>

        {/* RIGHT SECTION: Stats Grid (Fixed 320px) */}
        <div className="w-[320px] h-full border-l border-line flex flex-col shrink-0 bg-bg">
            <div className="flex flex-row w-full h-full">
                {/* 5m */}
                <button className="flex-1 flex flex-col justify-center items-center gap-[4px] border-r border-line hover:bg-[#232626] active:bg-[#232626]/80 transition-colors group">
                    <span className="text-[12px] leading-[16px] font-medium text-gray-500 group-hover:text-gray-300">5m</span>
                    <span className="text-[13px] leading-[17px] font-medium text-accent-red">-6.09%</span>
                </button>
                
                {/* 1h - Active */}
                <button className="flex-1 flex flex-col justify-center items-center gap-[4px] border-r border-line bg-[#232626]">
                    <span className="text-[12px] leading-[16px] font-medium text-white">1h</span>
                    <span className="text-[13px] leading-[17px] font-medium text-accent-green">+3.26%</span>
                </button>
                
                {/* 6h */}
                <button className="flex-1 flex flex-col justify-center items-center gap-[4px] border-r border-line hover:bg-[#232626] active:bg-[#232626]/80 transition-colors group">
                    <span className="text-[12px] leading-[16px] font-medium text-gray-500 group-hover:text-gray-300">6h</span>
                    <span className="text-[13px] leading-[17px] font-medium text-accent-green">+9.93K%</span>
                </button>
                
                {/* 24h */}
                <button className="flex-1 flex flex-col justify-center items-center gap-[4px] hover:bg-[#232626] active:bg-[#232626]/80 transition-colors group">
                    <span className="text-[12px] leading-[16px] font-medium text-gray-500 group-hover:text-gray-300">24h</span>
                    <span className="text-[13px] leading-[17px] font-medium text-accent-green">+9.93K%</span>
                </button>
            </div>
        </div>
      </div>

      {/* 2. Main Layout - Split View */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* LEFT COLUMN: Chart & Positions (Flex-1) */}
        <div className="flex-1 flex flex-col min-w-0">
          
          {/* Chart Area (70% height) */}
          <div className="flex-[2] border-b border-line bg-data-bg relative flex flex-col">
             {/* Chart Controls - Height updated to 38px */}
             <div className="h-[38px] border-b border-line flex items-center px-2 gap-2 bg-bg">
                {['1m', '5m', '15m', '1h', '4h', 'D'].map(tf => (
                    <button key={tf} className="px-2 py-0.5 text-xs text-gray-500 hover:text-white hover:bg-[#232626] rounded">
                        {tf}
                    </button>
                ))}
                <div className="h-4 w-px bg-line mx-1"></div>
                <button className="text-xs text-gray-400 hover:text-white flex items-center gap-1">
                    <Maximize2 size={12} />
                    Indicators
                </button>
             </div>
             
             {/* Mock Chart Visualization */}
             <div className="flex-1 p-4 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                    <span className="text-9xl font-bold tracking-widest text-gray-600">MEMEDEX</span>
                </div>
                {/* Simple SVG Chart Line Mock */}
                <svg className="w-full h-full" preserveAspectRatio="none">
                    <defs>
                        <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor={token.change >= 0 ? '#10B981' : '#EF4444'} stopOpacity="0.2"/>
                            <stop offset="100%" stopColor={token.change >= 0 ? '#10B981' : '#EF4444'} stopOpacity="0"/>
                        </linearGradient>
                    </defs>
                    <path 
                        d="M0,300 C100,280 200,320 300,250 C400,180 500,220 600,150 C700,100 800,180 900,120 L900,400 L0,400 Z" 
                        fill="url(#chartGradient)" 
                    />
                    <path 
                        d="M0,300 C100,280 200,320 300,250 C400,180 500,220 600,150 C700,100 800,180 900,120" 
                        fill="none" 
                        stroke={token.change >= 0 ? '#10B981' : '#EF4444'} 
                        strokeWidth="2" 
                    />
                </svg>
                
                {/* Price Label on Chart */}
                <div className="absolute top-10 left-10">
                    <div className="text-3xl font-mono text-white font-bold">{token.price}</div>
                    <div className="text-xs text-gray-400 mt-1">Vol: {token.volume}</div>
                </div>
             </div>
          </div>

          {/* Bottom Tabs */}
          <div className="flex-1 bg-bg flex flex-col min-h-[200px]">
             <div className="h-[36px] border-b border-line flex items-center bg-[#1e1e1e] overflow-x-auto no-scrollbar">
                {bottomTabs.map(tab => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`h-full px-4 text-[14px] font-medium transition-colors whitespace-nowrap ${
                            activeTab === tab 
                            ? 'text-white bg-[#2B2D2E]' 
                            : 'text-gray-500 hover:text-white hover:bg-[#232626]'
                        }`}
                    >
                        {tab}
                    </button>
                ))}
             </div>
             <div className="flex-1 p-4 flex items-center justify-center text-gray-600 text-sm">
                 <div className="flex flex-col items-center gap-2">
                    <Wallet size={24} className="opacity-50" />
                    <span>No {activeTab.toLowerCase()} data for {token.symbol}</span>
                 </div>
             </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Order Book & Trading Form (Width 320px) */}
        <div className="w-[320px] flex flex-col bg-bg shrink-0 border-l border-line">
          
          {/* Top Half: Order Form */}
          <div className="p-3 border-b border-line bg-[#1e1e1e]">
             {/* Buy/Sell Toggle */}
             <div className="flex p-1 bg-black/40 rounded border border-line mb-4">
                <button 
                    onClick={() => setSide('buy')}
                    className={`flex-1 py-1.5 text-xs font-bold rounded transition-all ${side === 'buy' ? 'bg-accent-green text-black' : 'text-gray-500 hover:text-gray-300'}`}
                >
                    Buy
                </button>
                <button 
                    onClick={() => setSide('sell')}
                    className={`flex-1 py-1.5 text-xs font-bold rounded transition-all ${side === 'sell' ? 'bg-accent-red text-white' : 'text-gray-500 hover:text-gray-300'}`}
                >
                    Sell
                </button>
             </div>

             {/* Inputs */}
             <div className="space-y-3">
                 <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                     <span>Type</span>
                     <span className="text-blue-400 cursor-pointer">Market</span>
                 </div>
                 
                 <div className="relative">
                    <label className="absolute top-2 left-3 text-[10px] text-gray-500">Amount (SOL)</label>
                    <input 
                        type="text" 
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="w-full bg-black/20 border border-line rounded px-3 pt-5 pb-2 text-right font-mono text-white text-sm focus:outline-none focus:border-gray-500 transition-colors"
                        placeholder="0.0"
                    />
                    <div className="absolute top-1/2 -translate-y-1/2 left-3 opacity-0"></div>
                 </div>

                 {/* Percentages */}
                 <div className="flex gap-2">
                    {['10%', '25%', '50%', 'MAX'].map(p => (
                        <button key={p} className="flex-1 bg-btn-default border border-line rounded py-1 text-[10px] text-gray-400 hover:text-white hover:border-gray-500 transition-colors">
                            {p}
                        </button>
                    ))}
                 </div>
                 
                 <div className="bg-black/20 border border-line rounded p-2 flex justify-between items-center">
                     <span className="text-xs text-gray-500">Slippage</span>
                     <span className="text-xs text-white font-mono cursor-pointer hover:underline">Auto (1%)</span>
                 </div>

                 <button className={`w-full py-3 rounded font-bold text-sm mt-2 transition-transform active:scale-95 ${side === 'buy' ? 'bg-accent-green text-black hover:bg-green-400' : 'bg-accent-red text-white hover:bg-red-500'}`}>
                     {side === 'buy' ? `Buy ${token.symbol}` : `Sell ${token.symbol}`}
                 </button>
             </div>
          </div>

          {/* Bottom Half: Orderbook / Trades */}
          <div className="flex-1 flex flex-col min-h-0 bg-bg">
             <div className="flex items-center border-b border-line">
                 <button className="flex-1 py-2 text-xs text-white border-b-2 border-white bg-[#232626]">Book</button>
                 <button className="flex-1 py-2 text-xs text-gray-500 hover:text-gray-300 hover:bg-[#232626]">Recent Trades</button>
             </div>
             
             {/* Orderbook Header */}
             <div className="flex items-center px-2 py-1 text-[10px] text-gray-500">
                 <span className="w-1/3 text-left">Size (SOL)</span>
                 <span className="w-1/3 text-right">Price (USD)</span>
                 <span className="w-1/3 text-right">Total</span>
             </div>

             {/* Orderbook List */}
             <div className="flex-1 overflow-y-auto font-mono text-[11px]">
                 {/* Asks (Red) */}
                 <div className="flex flex-col-reverse">
                    {Array.from({length: 8}).map((_, i) => (
                        <div key={`ask-${i}`} className="flex items-center px-2 py-0.5 hover:bg-[#232626] cursor-pointer relative">
                             <span className="w-1/3 text-left text-gray-300 relative z-10">{(Math.random() * 10).toFixed(2)}</span>
                             <span className="w-1/3 text-right text-accent-red relative z-10">{(parseFloat(token.price.replace('$', '')) * (1 + (i+1)*0.001)).toFixed(6)}</span>
                             <span className="w-1/3 text-right text-gray-500 relative z-10">12K</span>
                             <div className="absolute top-0 right-0 bottom-0 bg-red-500/10" style={{width: `${Math.random() * 40}%`}}></div>
                        </div>
                    ))}
                 </div>
                 
                 {/* Spread */}
                 <div className="py-1 border-y border-line my-1 flex justify-center text-xs text-gray-400">
                     Spread: 0.1%
                 </div>

                 {/* Bids (Green) */}
                 <div>
                    {Array.from({length: 12}).map((_, i) => (
                        <div key={`bid-${i}`} className="flex items-center px-2 py-0.5 hover:bg-[#232626] cursor-pointer relative">
                             <span className="w-1/3 text-left text-gray-300 relative z-10">{(Math.random() * 10).toFixed(2)}</span>
                             <span className="w-1/3 text-right text-accent-green relative z-10">{(parseFloat(token.price.replace('$', '')) * (1 - (i+1)*0.001)).toFixed(6)}</span>
                             <span className="w-1/3 text-right text-gray-500 relative z-10">10K</span>
                             <div className="absolute top-0 right-0 bottom-0 bg-green-500/10" style={{width: `${Math.random() * 60}%`}}></div>
                        </div>
                    ))}
                 </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TradePage;