import React from 'react';
import { Settings, Wallet, Compass, FileText, Bell } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="h-[35px] w-full border-t border-line bg-bg flex items-center justify-between px-4 shrink-0 text-[12px] text-white">
      {/* Left */}
      <div className="flex items-center gap-2">
        <button className="flex items-center gap-2 px-2 py-1 rounded hover:bg-[#232626] transition-colors">
          <Settings size={16} />
          <span>Settings</span>
        </button>
        <div className="h-3 w-px bg-line"></div>
        <button className="flex items-center gap-2 px-2 py-1 rounded hover:bg-[#232626] transition-colors">
          <Wallet size={16} />
          <span>Wallets</span>
        </button>
        <div className="h-3 w-px bg-line"></div>
        <button className="flex items-center gap-2 px-2 py-1 rounded hover:bg-[#232626] transition-colors">
          <svg viewBox="0 0 24 24" aria-hidden="true" style={{width: '16px', height: '16px'}} fill="currentColor">
            <g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g>
          </svg>
          <span>Twitter</span>
        </button>
        <div className="h-3 w-px bg-line"></div>
        <button className="flex items-center gap-2 px-2 py-1 rounded hover:bg-[#232626] transition-colors">
          <Compass size={16} />
          <span>Explorer</span>
        </button>
        <div className="h-3 w-px bg-line"></div>
         <button className="flex items-center gap-2 px-2 py-1 rounded hover:bg-[#232626] transition-colors">
          <span className="font-mono">PnL: +$124.50</span>
        </button>
      </div>

      {/* Right */}
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2 text-accent-green px-2 py-1">
          <div className="w-2 h-2 rounded-full bg-accent-green animate-pulse"></div>
          <span>Stable</span>
        </div>
        <div className="h-3 w-px bg-line"></div>
        
        <button className="px-2 py-1 rounded hover:bg-[#232626] transition-colors">
            <Bell size={16} />
        </button>
        
        <button className="px-2 py-1 rounded hover:bg-[#232626] transition-colors">
             <svg viewBox="0 0 24 24" aria-hidden="true" style={{width: '16px', height: '16px'}} fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037 13.68 13.68 0 0 0-.586 1.205 18.397 18.397 0 0 0-5.526 0 13.78 13.78 0 0 0-.594-1.205.071.071 0 0 0-.078-.037 19.742 19.742 0 0 0-4.885 1.515.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.018.077.077 0 0 0 .084-.028 14.09 14.09 0 0 1 1.185-1.947.075.075 0 0 0-.041-.106 13.107 13.107 0 0 1-1.898-.902.074.074 0 0 1-.008-.122 9.608 9.608 0 0 0 .399-.307.071.071 0 0 1 .074-.007c3.965 1.81 8.243 1.81 12.164 0a.071.071 0 0 1 .074.007 9.878 9.878 0 0 0 .4.307.072.072 0 0 1-.007.122 13.13 13.13 0 0 1-1.9.902.075.075 0 0 0-.042.106c.355.617.753 1.275 1.186 1.947a.077.077 0 0 0 .084.028 19.854 19.854 0 0 0 5.993-3.018.077.077 0 0 0 .031-.057c.465-4.868-.697-9.06-4.04-13.66a.07.07 0 0 0-.033-.027ZM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.418 2.157-2.418 1.21 0 2.176 1.095 2.157 2.418 0 1.334-.956 2.42-2.157 2.42Zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.418 2.157-2.418 1.21 0 2.176 1.095 2.157 2.418 0 1.334-.946 2.42-2.157 2.42Z"></path>
             </svg>
        </button>

        <button className="px-2 py-1 rounded hover:bg-[#232626] transition-colors">
             <svg viewBox="0 0 24 24" aria-hidden="true" style={{width: '16px', height: '16px'}} fill="currentColor">
                <g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g>
             </svg>
        </button>

        <button className="px-2 py-1 rounded hover:bg-[#232626] transition-colors">
            <FileText size={16} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;