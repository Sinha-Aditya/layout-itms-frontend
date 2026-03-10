import { Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Layers className="h-6 w-6 text-slate-400" />
            <span className="text-xl font-bold tracking-tight text-slate-400">MineTrack</span>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-slate-500">
            <Link to="/" className="hover:text-french-blue transition-colors">Privacy Policy</Link>
            <Link to="/" className="hover:text-french-blue transition-colors">Terms of Service</Link>
            <Link to="/" className="hover:text-french-blue transition-colors">Contact Support</Link>
            <Link to="/" className="hover:text-french-blue transition-colors">API Documentation</Link>
          </div>
          <div className="flex flex-col items-center md:items-end gap-2">
            <div className="text-sm text-slate-400">
              &copy; {new Date().getFullYear()} MineTrack Inc. All rights reserved.
            </div>
            <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
              <span>Powered by</span>
              {/* Note: Please upload your ATS logo image to the 'public' folder and name it 'ats-logo.png' */}
              <img 
                src="/ats-logo.png" 
                alt="ATS Logo" 
                className="h-6 object-contain"
                onError={(e) => {
                  // Fallback text if image is not yet uploaded
                  e.currentTarget.style.display = 'none';
                  const span = document.createElement('span');
                  span.className = 'font-bold text-[#3b82f6] text-sm tracking-wider';
                  span.innerText = 'ATS';
                  e.currentTarget.parentNode?.appendChild(span);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
