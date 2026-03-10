import { Link } from 'react-router-dom';
import { 
  Layers, 
  Database, 
  Network, 
  GitMerge, 
  BarChart2, 
  Sparkles, 
  Bot, 
  Repeat, 
  Blocks, 
  Calendar, 
  Puzzle,
  FileSearch,
  Truck,
  Scale,
  FileCheck,
  Map,
  Users,
  Building2,
  BookOpen,
  Video,
  FileText,
  HelpCircle
} from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Header() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (menu: string) => setActiveMenu(menu);
  const handleMouseLeave = () => setActiveMenu(null);

  return (
    <header className={`sticky top-0 z-50 w-full border-b border-slate-200 transition-all duration-300 ${isScrolled ? 'bg-white/70 backdrop-blur-md shadow-sm' : 'bg-white'}`}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Layers className="h-6 w-6 text-slate-900" />
          <span className="text-xl font-bold tracking-tight text-slate-900">MineTrack</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 h-full">
          {/* PLATFORM MENU */}
          <div 
            className="relative h-full flex items-center"
            onMouseEnter={() => handleMouseEnter('platform')}
            onMouseLeave={handleMouseLeave}
          >
            <button className={`transition-colors h-full flex items-center ${activeMenu === 'platform' ? 'text-slate-900' : ''}`}>Platform</button>
            
            {activeMenu === 'platform' && (
              <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[1000px] bg-white shadow-xl rounded-xl border border-slate-200 overflow-hidden flex flex-col cursor-default">
                <div className="flex p-8 gap-8">
                  {/* UNIFY */}
                  <div className="flex-1">
                    <h3 className="text-xs font-semibold text-slate-400 tracking-widest uppercase mb-6 border-b border-slate-100 pb-2">Unify</h3>
                    <div className="space-y-6">
                      <a href="#" className="flex items-start gap-4 group">
                        <div className="p-2 rounded-lg bg-purple-100 text-purple-600 group-hover:bg-purple-200 transition-colors">
                          <Database className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900 group-hover:text-french-blue transition-colors">Feedback Integrations</div>
                          <div className="text-sm text-slate-500 mt-0.5">Unify feedback from every source</div>
                        </div>
                      </a>
                      <a href="#" className="flex items-start gap-4 group">
                        <div className="p-2 rounded-lg bg-purple-100 text-purple-600 group-hover:bg-purple-200 transition-colors">
                          <Network className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900 group-hover:text-french-blue transition-colors">Adaptive Taxonomy</div>
                          <div className="text-sm text-slate-500 mt-0.5">Classify feedback & insights</div>
                        </div>
                      </a>
                      <a href="#" className="flex items-start gap-4 group">
                        <div className="p-2 rounded-lg bg-purple-100 text-purple-600 group-hover:bg-purple-200 transition-colors">
                          <GitMerge className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900 group-hover:text-french-blue transition-colors">Customer Context Graph</div>
                          <div className="text-sm text-slate-500 mt-0.5">Connect feedback to context</div>
                        </div>
                      </a>
                      <a href="#" className="flex items-start gap-4 group">
                        <div className="p-2 rounded-lg bg-purple-100 text-purple-600 group-hover:bg-purple-200 transition-colors">
                          <FileSearch className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900 group-hover:text-french-blue transition-colors">Data Enrichment</div>
                          <div className="text-sm text-slate-500 mt-0.5">Enrich and extract deeper insights</div>
                        </div>
                      </a>
                    </div>
                  </div>

                  {/* UNDERSTAND */}
                  <div className="flex-1">
                    <h3 className="text-xs font-semibold text-slate-400 tracking-widest uppercase mb-6 border-b border-slate-100 pb-2">Understand</h3>
                    <div className="space-y-6">
                      <a href="#" className="flex items-start gap-4 group">
                        <div className="p-2 rounded-lg bg-emerald-100 text-emerald-600 group-hover:bg-emerald-200 transition-colors">
                          <BarChart2 className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900 group-hover:text-french-blue transition-colors">Dashboard</div>
                          <div className="text-sm text-slate-500 mt-0.5">Visualize and quantify insights</div>
                        </div>
                      </a>
                      <a href="#" className="flex items-start gap-4 group">
                        <div className="p-2 rounded-lg bg-emerald-100 text-emerald-600 group-hover:bg-emerald-200 transition-colors">
                          <Sparkles className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900 group-hover:text-french-blue transition-colors">Wisdom AI Insights + MCP</div>
                          <div className="text-sm text-slate-500 mt-0.5">Ask, analyze & act on feedback</div>
                        </div>
                      </a>
                    </div>
                  </div>

                  {/* ACT */}
                  <div className="flex-1">
                    <h3 className="text-xs font-semibold text-slate-400 tracking-widest uppercase mb-6 border-b border-slate-100 pb-2">Act</h3>
                    <div className="space-y-6">
                      <a href="#" className="flex items-start gap-4 group">
                        <div className="p-2 rounded-lg bg-blue-100 text-blue-600 group-hover:bg-blue-200 transition-colors">
                          <Bot className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900 group-hover:text-french-blue transition-colors">AI Agents</div>
                          <div className="text-sm text-slate-500 mt-0.5">Automate resolutions & actions</div>
                        </div>
                      </a>
                      <a href="#" className="flex items-start gap-4 group">
                        <div className="p-2 rounded-lg bg-blue-100 text-blue-600 group-hover:bg-blue-200 transition-colors">
                          <Repeat className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900 group-hover:text-french-blue transition-colors">Close the Loop</div>
                          <div className="text-sm text-slate-500 mt-0.5">Detect resolutions and respond</div>
                        </div>
                      </a>
                      <a href="#" className="flex items-start gap-4 group">
                        <div className="p-2 rounded-lg bg-blue-100 text-blue-600 group-hover:bg-blue-200 transition-colors">
                          <Blocks className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900 group-hover:text-french-blue transition-colors">Workflow Integrations</div>
                          <div className="text-sm text-slate-500 mt-0.5">Connect tools & trigger actions</div>
                        </div>
                      </a>
                    </div>
                  </div>

                  {/* PLATFORM */}
                  <div className="flex-[1.2] bg-slate-50 -my-8 -mr-8 p-8 border-l border-slate-100">
                    <h3 className="text-xs font-semibold text-slate-400 tracking-widest uppercase mb-6 border-b border-slate-200 pb-2">Platform</h3>
                    <div className="mb-4">
                      <div className="font-semibold text-slate-900">Explore the MineTrack Software</div>
                      <div className="text-sm text-slate-500 mt-0.5">Try the product in under 5 minutes</div>
                    </div>
                    <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-white aspect-video relative">
                       <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-blue-50"></div>
                       <div className="absolute inset-0 flex items-center justify-center text-slate-400 text-xs">Product Preview</div>
                    </div>
                  </div>
                </div>

                {/* Bottom Bar */}
                <div className="bg-white border-t border-slate-100 p-4 flex justify-end gap-6">
                  <a href="#" className="flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors">
                    <Puzzle className="w-4 h-4" /> See Integrations Library
                  </a>
                  <a href="#" className="flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors">
                    <Calendar className="w-4 h-4" /> Book Demo
                  </a>
                </div>
              </div>
            )}
          </div>
          
          {/* SOLUTIONS MENU */}
          <div 
            className="relative h-full flex items-center"
            onMouseEnter={() => handleMouseEnter('solutions')}
            onMouseLeave={handleMouseLeave}
          >
            <button className={`transition-colors h-full flex items-center ${activeMenu === 'solutions' ? 'text-slate-900' : ''}`}>Solutions</button>
            
            {activeMenu === 'solutions' && (
              <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[600px] bg-white shadow-xl rounded-xl border border-slate-200 overflow-hidden flex flex-col cursor-default p-6 grid grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xs font-semibold text-slate-400 tracking-widest uppercase mb-4 border-b border-slate-100 pb-2">By Use Case</h3>
                  <div className="space-y-4">
                    <a href="#" className="flex items-start gap-3 group">
                      <div className="p-2 rounded-lg bg-blue-50 text-french-blue group-hover:bg-blue-100 transition-colors"><Truck className="w-4 h-4" /></div>
                      <div>
                        <div className="font-semibold text-slate-900 group-hover:text-french-blue transition-colors">Gate Automation</div>
                        <div className="text-xs text-slate-500 mt-0.5">RFID & Boom Barrier Integration</div>
                      </div>
                    </a>
                    <a href="#" className="flex items-start gap-3 group">
                      <div className="p-2 rounded-lg bg-blue-50 text-french-blue group-hover:bg-blue-100 transition-colors"><Scale className="w-4 h-4" /></div>
                      <div>
                        <div className="font-semibold text-slate-900 group-hover:text-french-blue transition-colors">Weighbridge Integration</div>
                        <div className="text-xs text-slate-500 mt-0.5">Automated Tare & Gross capture</div>
                      </div>
                    </a>
                    <a href="#" className="flex items-start gap-3 group">
                      <div className="p-2 rounded-lg bg-blue-50 text-french-blue group-hover:bg-blue-100 transition-colors"><FileCheck className="w-4 h-4" /></div>
                      <div>
                        <div className="font-semibold text-slate-900 group-hover:text-french-blue transition-colors">Transit Pass Management</div>
                        <div className="text-xs text-slate-500 mt-0.5">Government Portal API Sync</div>
                      </div>
                    </a>
                  </div>
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-slate-400 tracking-widest uppercase mb-4 border-b border-slate-100 pb-2">By Industry</h3>
                  <div className="space-y-4">
                    <a href="#" className="flex items-start gap-3 group">
                      <div className="p-2 rounded-lg bg-slate-100 text-slate-600 group-hover:bg-slate-200 transition-colors"><Map className="w-4 h-4" /></div>
                      <div>
                        <div className="font-semibold text-slate-900 group-hover:text-french-blue transition-colors">Coal Mining</div>
                        <div className="text-xs text-slate-500 mt-0.5">High-volume dispatch tracking</div>
                      </div>
                    </a>
                    <a href="#" className="flex items-start gap-3 group">
                      <div className="p-2 rounded-lg bg-slate-100 text-slate-600 group-hover:bg-slate-200 transition-colors"><Layers className="w-4 h-4" /></div>
                      <div>
                        <div className="font-semibold text-slate-900 group-hover:text-french-blue transition-colors">Iron Ore & Bauxite</div>
                        <div className="text-xs text-slate-500 mt-0.5">Grade-wise stockpile management</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* CUSTOMERS MENU */}
          <div 
            className="relative h-full flex items-center"
            onMouseEnter={() => handleMouseEnter('customers')}
            onMouseLeave={handleMouseLeave}
          >
            <button className={`transition-colors h-full flex items-center ${activeMenu === 'customers' ? 'text-slate-900' : ''}`}>Customers</button>
            
            {activeMenu === 'customers' && (
              <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[400px] bg-white shadow-xl rounded-xl border border-slate-200 overflow-hidden flex flex-col cursor-default p-4 space-y-2">
                <a href="#" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group">
                  <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100"><Building2 className="w-5 h-5" /></div>
                  <div>
                    <div className="font-semibold text-slate-900">Case Studies</div>
                    <div className="text-xs text-slate-500">See how top mines use MineTrack</div>
                  </div>
                </a>
                <a href="#" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group">
                  <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100"><Users className="w-5 h-5" /></div>
                  <div>
                    <div className="font-semibold text-slate-900">Testimonials</div>
                    <div className="text-xs text-slate-500">Read reviews from site managers</div>
                  </div>
                </a>
              </div>
            )}
          </div>

          {/* RESOURCES MENU */}
          <div 
            className="relative h-full flex items-center"
            onMouseEnter={() => handleMouseEnter('resources')}
            onMouseLeave={handleMouseLeave}
          >
            <button className={`transition-colors h-full flex items-center ${activeMenu === 'resources' ? 'text-slate-900' : ''}`}>Resources</button>
            
            {activeMenu === 'resources' && (
              <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[400px] bg-white shadow-xl rounded-xl border border-slate-200 overflow-hidden flex flex-col cursor-default p-4 space-y-2">
                <a href="#" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group">
                  <div className="p-2 rounded-lg bg-purple-50 text-purple-600 group-hover:bg-purple-100"><BookOpen className="w-5 h-5" /></div>
                  <div>
                    <div className="font-semibold text-slate-900">Documentation</div>
                    <div className="text-xs text-slate-500">Guides and API references</div>
                  </div>
                </a>
                <a href="#" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group">
                  <div className="p-2 rounded-lg bg-purple-50 text-purple-600 group-hover:bg-purple-100"><FileText className="w-5 h-5" /></div>
                  <div>
                    <div className="font-semibold text-slate-900">Blog</div>
                    <div className="text-xs text-slate-500">Latest updates and industry news</div>
                  </div>
                </a>
                <a href="#" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group">
                  <div className="p-2 rounded-lg bg-purple-50 text-purple-600 group-hover:bg-purple-100"><Video className="w-5 h-5" /></div>
                  <div>
                    <div className="font-semibold text-slate-900">Webinars</div>
                    <div className="text-xs text-slate-500">Watch on-demand training</div>
                  </div>
                </a>
                <a href="#" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group">
                  <div className="p-2 rounded-lg bg-purple-50 text-purple-600 group-hover:bg-purple-100"><HelpCircle className="w-5 h-5" /></div>
                  <div>
                    <div className="font-semibold text-slate-900">Help Center</div>
                    <div className="text-xs text-slate-500">FAQs and support</div>
                  </div>
                </a>
              </div>
            )}
          </div>
        </nav>

        <div className="flex items-center gap-4">
          <Link to="/" className="hidden sm:block text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
            Try MineTrack
          </Link>
          <Link to="/login" className="rounded-md bg-slate-100 px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-200 transition-colors">
            Log in
          </Link>
          <Link to="/" className="rounded-md bg-[#d1e2c4] px-4 py-2 text-sm font-medium text-slate-900 hover:bg-[#c2d6b3] transition-colors">
            Book a demo
          </Link>
        </div>
      </div>
    </header>
  );
}
