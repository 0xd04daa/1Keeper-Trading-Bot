import React from 'react';
import { TokenData } from '../types';
import { 
  Star, Zap, Copy, Search, User, Camera, Eye, 
  ShieldCheck, Users, Tag, Target, Rocket, Activity,
  MessageCircle, Music, BarChart2
} from 'lucide-react';

interface MarketTableProps {
  data: TokenData[];
  onTokenSelect: (token: TokenData) => void;
}

const MarketTable: React.FC<MarketTableProps> = ({ data, onTokenSelect }) => {
  return (
    <div className="flex-1 overflow-y-auto w-full bg-bg relative custom-scrollbar">
      <div className="min-w-max">
        {/* Header */}
        <div className="sticky top-0 z-20 flex items-center h-[40px] bg-bg border-b border-line text-[12px] font-semibold text-gray-500">
           {/* Spacer for sticky image column */}
           <div className="w-[80px] md:w-[94px] px-4 flex-none sticky left-0 bg-bg z-20">Token</div>
           
           <div className="w-[200px] sm:w-[260px] md:w-[280px] flex-none px-2"></div> 
           
           <div className="min-w-[108px] flex-1 px-2">Market Cap</div>
           <div className="min-w-[108px] flex-1 px-2">Liquidity</div>
           <div className="min-w-[128px] flex-1 px-2">Price %</div>
           <div className="min-w-[108px] flex-1 px-2">Volume</div>
           <div className="min-w-[128px] flex-1 px-2">Txns</div>
           <div className="min-w-[400px] flex-1 px-2">Token Info</div>
           <div className="min-w-[88px] px-4 text-right sticky right-0 bg-bg z-20">Action</div>
        </div>

        {/* Body */}
        <div>
          {data.map((token) => (
            <div 
              key={token.id} 
              onClick={() => onTokenSelect(token)}
              className="group relative flex items-center h-[80px] border-b border-line bg-data-bg hover:bg-data-bg-hover transition-colors cursor-pointer text-sm"
            >
                {/* 1. Sticky Image Column */}
                <div className="h-full px-2.5 pl-3.5 md:pl-5 bg-data-bg group-hover:bg-data-bg-hover justify-left flex items-center transition-colors w-[80px] md:w-[94px] sticky left-0 z-10 flex-none border-r border-transparent group-hover:border-line/20">
                    <div className="relative w-[64px] h-[64px] rounded-lg p-[1.5px] bg-gradient-to-br from-purple-500 via-blue-500 to-green-500">
                        <div className="bg-data-bg hover:bg-data-bg-hover w-full h-full rounded-[6.5px] flex items-center justify-center relative overflow-hidden">
                            <img src={token.image} alt={token.name} className="w-[58px] h-[58px] rounded-md object-cover" />
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-md">
                                <Camera className="text-white w-5 h-5" />
                            </div>
                        </div>
                        {/* Eye Icon (Top Left) */}
                        <div className="absolute -top-1 -left-1 w-[22px] h-[22px] bg-[#232324] border border-line rounded-md flex items-center justify-center text-gray-400 hover:text-white opacity-0 group-hover:opacity-100 transition-all z-20">
                            <Eye size={12} />
                        </div>
                         {/* Badge (Bottom Right) */}
                         <div className="absolute -bottom-1 -right-1 w-[22px] h-[22px] bg-black border border-gray-800 rounded-full flex items-center justify-center z-20">
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                    </div>
                </div>

                {/* 2. Token Identity Column */}
                <div className="flex h-full items-center px-2.5 w-[200px] sm:w-[260px] md:w-[280px] flex-none">
                    <div className="flex flex-col gap-1.5 w-full">
                        {/* Row 1: Symbol, Name, Actions */}
                        <div className="flex items-center gap-1">
                            <p className="text-[13px] font-medium text-blue-400 max-w-[75px] truncate leading-tight">
                                {token.symbol}
                            </p>
                            <p className="text-[10px] text-gray-500 max-w-[60px] truncate leading-tight">
                                {token.name}
                            </p>
                            <div className="text-gray-500 hover:text-gray-300 flex cursor-pointer items-center transition-colors mx-0.5 h-3.5 w-3.5" onClick={(e) => e.stopPropagation()}>
                                <Copy size={14} />
                            </div>
                            <div className="cursor-pointer transition-colors text-gray-500 hover:text-gray-300 h-3.5 w-3.5 flex items-center" onClick={(e) => e.stopPropagation()}>
                                <Star size={14} />
                            </div>
                        </div>

                        {/* Row 2: Age, Links, Holders */}
                        <div className="flex items-center gap-2">
                            <span className="text-[13px] font-medium text-gray-500 leading-tight">{token.created.replace(' ago', '')}</span>
                            <div className="bg-[#2B2B2B] w-px min-w-[1px] m-0 h-3"></div>
                            
                            {/* Social Icons */}
                            <a href="#" className="cursor-pointer text-blue-400 hover:opacity-80 transition-opacity" onClick={(e) => e.stopPropagation()}>
                                <MessageCircle size={14} />
                            </a>
                            <a href="#" className="cursor-pointer text-gray-500 hover:text-gray-300 transition-colors" onClick={(e) => e.stopPropagation()}>
                                <Music size={14} />
                            </a>
                            <a href="#" className="cursor-pointer text-accent-red animate-pulse" onClick={(e) => e.stopPropagation()}>
                                <Zap size={14} />
                            </a>
                            <a href="#" className="cursor-pointer text-accent-green" onClick={(e) => e.stopPropagation()}>
                                <BarChart2 size={14} />
                            </a>
                            <a href="#" className="cursor-pointer text-gray-500 hover:text-gray-300 transition-colors" onClick={(e) => e.stopPropagation()}>
                                <Search size={14} />
                            </a>

                            {/* Holder Count */}
                            <div className="hidden items-center gap-0.5 sm:flex">
                                <User size={14} className="text-gray-500" />
                                <span className="text-[10px] text-gray-500 leading-tight">12.5K</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3. Market Cap */}
                <div className="flex h-full flex-1 items-center px-2.5 min-w-[108px]">
                    <span className="text-gray-200 font-medium text-[14px]">{token.marketCap}</span>
                </div>

                {/* 4. Liquidity */}
                <div className="flex h-full flex-1 items-center px-2.5 min-w-[108px]">
                    <span className="text-gray-200 font-medium text-[14px]">$238K</span>
                </div>

                {/* 5. Price % */}
                <div className="flex h-full flex-1 items-center px-2.5 min-w-[128px]">
                    <span className={`font-medium text-[14px] ${token.change >= 0 ? 'text-accent-green' : 'text-accent-red'}`}>
                        {token.change > 0 ? '+' : ''}{token.change}%
                    </span>
                </div>

                {/* 6. Volume */}
                <div className="flex h-full flex-1 items-center px-2.5 min-w-[108px]">
                    <span className="text-gray-200 font-medium text-[14px]">{token.volume}</span>
                </div>

                {/* 7. Txns */}
                <div className="flex h-full flex-1 items-center px-2.5 min-w-[128px]">
                    <div className="flex flex-col w-full max-w-[100px] gap-1.5">
                         <div className="flex justify-between items-center text-[14px] leading-none">
                             <span className="text-gray-200 font-medium">24.6K</span>
                             <span className="text-gray-500 font-medium">15.8K</span>
                         </div>
                         <div className="h-1.5 w-full bg-accent-red rounded-full overflow-hidden relative">
                             <div className="absolute left-0 top-0 h-full bg-accent-green rounded-full" style={{ width: '60%' }}></div>
                         </div>
                    </div>
                </div>

                {/* 8. Token Info (Badges) */}
                <div className="flex h-full flex-1 items-center px-2.5 min-w-[400px]">
                     <div className="flex items-center gap-2">
                        {/* Shield Badge */}
                        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#232324] border border-line text-yellow-500" title="Audit">
                             <ShieldCheck size={16} />
                        </div>
                        {/* Tags */}
                        <div className="flex items-center gap-1.5 h-6 px-1.5 rounded-md border border-yellow-500/30 text-yellow-500 bg-yellow-500/5 text-xs">
                             <Users size={12} />
                             <span>18%</span>
                        </div>
                         <div className="flex items-center justify-center h-6 w-6 rounded-md border border-blue-500/30 text-blue-500 bg-blue-500/5">
                             <Tag size={12} />
                        </div>
                        <div className="flex items-center justify-center h-6 w-6 rounded-md border border-green-500/30 text-green-500 bg-green-500/5">
                             <Target size={12} />
                        </div>
                        <div className="flex items-center justify-center h-6 w-6 rounded-md border border-green-500/30 text-green-500 bg-green-500/5">
                             <Activity size={12} />
                        </div>
                         <div className="flex items-center gap-1 h-6 px-1.5 rounded-md border border-green-500/30 text-green-500 bg-green-500/5 text-xs">
                             <Rocket size={12} />
                             <span>6/31</span>
                        </div>
                     </div>
                </div>

                {/* 9. Action (Sticky Right) */}
                <div className="flex h-full items-center justify-end px-2.5 bg-data-bg group-hover:bg-data-bg-hover transition-colors min-w-[88px] sticky right-0 z-10 border-l border-transparent group-hover:border-line/20">
                    <button 
                        onClick={(e) => { e.stopPropagation(); onTokenSelect(token); }}
                        className="flex items-center gap-1 bg-btn-default hover:bg-slate-600 border border-line text-gray-300 px-2 py-1.5 rounded-md transition-all text-xs w-full justify-center group/btn"
                    >
                        <Zap size={12} className="text-purple-400 fill-purple-400 group-hover/btn:text-green-300 group-hover/btn:fill-green-300 transition-colors" />
                        <span className="text-white">0.01</span>
                    </button>
                </div>
            </div>
          ))}
           {/* Filler rows */}
           {Array.from({ length: 5 }).map((_, i) => (
             <div key={`filler-${i}`} className="flex items-center h-[80px] border-b border-line bg-data-bg/50 px-4 opacity-30 pointer-events-none"></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketTable;