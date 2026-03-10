import { 
  Truck, 
  AlertTriangle, 
  Scale, 
  FileCheck, 
  ArrowRight,
  Search,
  Plus,
  Activity,
  MapPin
} from 'lucide-react';
import Header from '../components/Header';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      <Header />
      
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">Mine Operations</h1>
            <p className="text-slate-500 mt-1">Overview of your mining site activities</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
              System Live
            </span>
            <button className="rounded-full bg-white p-2 text-slate-400 shadow-sm ring-1 ring-inset ring-slate-200 hover:text-slate-500">
              <Search className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          
          {/* Hero Stat Card - Deep Twilight Theme */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 rounded-3xl bg-deep-twilight p-8 text-white relative overflow-hidden shadow-lg">
            <div className="absolute top-0 right-0 w-64 h-64 bg-french-blue rounded-full blur-3xl opacity-50 -mr-20 -mt-20"></div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <p className="text-sm font-medium text-sky-aqua uppercase tracking-wider mb-2">Total Material Moved</p>
                <div className="flex items-baseline gap-2">
                  <h2 className="text-6xl font-bold tracking-tight">12,450</h2>
                  <span className="text-2xl text-frosted-blue">Tons</span>
                </div>
              </div>
              
              <div className="mt-8">
                <div className="flex justify-between text-sm text-frosted-blue-light mb-2">
                  <span>Of 15,000 T Daily Target</span>
                  <span>83%</span>
                </div>
                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-turquoise-surf rounded-full" style={{ width: '83%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Stat Card 1 */}
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center">
                <AlertTriangle className="h-5 w-5 text-amber-600" />
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-slate-900">12</h3>
              <p className="text-sm font-medium text-slate-500 mt-1">Active Exceptions</p>
              <p className="text-xs text-slate-400 mt-2">3 pending manager approval</p>
            </div>
            <div className="mt-4 flex gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className={`h-8 flex-1 rounded-sm ${i > 3 ? 'bg-amber-100' : 'bg-amber-400'}`}></div>
              ))}
            </div>
          </div>

          {/* Stat Card 2 */}
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                <Truck className="h-5 w-5 text-french-blue" />
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-slate-900">48</h3>
              <p className="text-sm font-medium text-slate-500 mt-1">Trucks in Premise</p>
              <p className="text-xs text-slate-400 mt-2">32 Internal · 16 External</p>
            </div>
            <div className="mt-4 flex gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className={`h-8 flex-1 rounded-sm ${i > 4 ? 'bg-blue-100' : 'bg-french-blue'}`}></div>
              ))}
            </div>
          </div>

          {/* Stat Card 3 */}
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center">
                <FileCheck className="h-5 w-5 text-emerald-600" />
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-slate-900">156</h3>
              <p className="text-sm font-medium text-slate-500 mt-1">Transit Passes</p>
              <p className="text-xs text-slate-400 mt-2">Generated today</p>
            </div>
            <div className="mt-4 flex gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className={`h-8 flex-1 rounded-sm ${i > 2 ? 'bg-emerald-100' : 'bg-emerald-400'}`}></div>
              ))}
            </div>
          </div>

          {/* List Card - Recent Activity */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500">Recent Weighments</h3>
              <button className="text-sm font-medium text-french-blue hover:text-deep-twilight flex items-center gap-1">
                View All <ArrowRight className="h-4 w-4" />
              </button>
            </div>
            
            <div className="space-y-4">
              {[
                { id: 'MH-12-AB-1234', type: 'External', weight: '24.5 T', status: 'Approved', time: '2 mins ago' },
                { id: 'DMP-042', type: 'Internal', weight: '58.2 T', status: 'Completed', time: '15 mins ago' },
                { id: 'KA-01-XY-9876', type: 'External', weight: '26.1 T', status: 'Overweight', time: '28 mins ago' },
              ].map((trip, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className={`h-10 w-10 rounded-full flex items-center justify-center ${trip.type === 'Internal' ? 'bg-slate-200 text-slate-600' : 'bg-sky-aqua/20 text-deep-twilight'}`}>
                      <Truck className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">{trip.id}</h4>
                      <p className="text-xs text-slate-500">{trip.type} · {trip.time}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-mono font-medium text-slate-900">{trip.weight}</div>
                    <div className={`text-xs font-medium ${trip.status === 'Overweight' ? 'text-amber-600' : 'text-emerald-600'}`}>
                      {trip.status}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Map/Location Card */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500">Active Pits</h3>
              <button className="text-sm font-medium text-french-blue hover:text-deep-twilight flex items-center gap-1">
                Map <ArrowRight className="h-4 w-4" />
              </button>
            </div>
            
            <div className="flex-1 rounded-2xl bg-slate-100 flex items-center justify-center relative overflow-hidden min-h-[160px]">
              {/* Fake map background */}
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
              
              <div className="relative z-10 space-y-3 w-full px-4">
                <div className="bg-white p-3 rounded-xl shadow-sm flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-french-blue" />
                  <div>
                    <div className="text-sm font-semibold text-slate-900">Pit Alpha</div>
                    <div className="text-xs text-slate-500">12 Dumpers active</div>
                  </div>
                </div>
                <div className="bg-white p-3 rounded-xl shadow-sm flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-bright-teal" />
                  <div>
                    <div className="text-sm font-semibold text-slate-900">Pit Beta</div>
                    <div className="text-xs text-slate-500">8 Dumpers active</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions / Forms */}
          <div className="col-span-1 md:col-span-3 lg:col-span-1 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-6">Quick Actions</h3>
            
            <div className="space-y-3">
              <button className="w-full flex items-center gap-3 p-4 rounded-2xl border border-slate-100 hover:border-french-blue hover:bg-slate-50 transition-all group text-left">
                <div className="h-10 w-10 rounded-full bg-slate-100 group-hover:bg-french-blue/10 flex items-center justify-center transition-colors">
                  <Plus className="h-5 w-5 text-slate-600 group-hover:text-french-blue" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Manual Entry</div>
                  <div className="text-xs text-slate-500">Register truck without RFID</div>
                </div>
              </button>
              
              <button className="w-full flex items-center gap-3 p-4 rounded-2xl border border-slate-100 hover:border-french-blue hover:bg-slate-50 transition-all group text-left">
                <div className="h-10 w-10 rounded-full bg-slate-100 group-hover:bg-french-blue/10 flex items-center justify-center transition-colors">
                  <Scale className="h-5 w-5 text-slate-600 group-hover:text-french-blue" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Force Weighment</div>
                  <div className="text-xs text-slate-500">Override WB listener</div>
                </div>
              </button>

              <button className="w-full flex items-center gap-3 p-4 rounded-2xl border border-slate-100 hover:border-french-blue hover:bg-slate-50 transition-all group text-left">
                <div className="h-10 w-10 rounded-full bg-slate-100 group-hover:bg-french-blue/10 flex items-center justify-center transition-colors">
                  <Activity className="h-5 w-5 text-slate-600 group-hover:text-french-blue" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Service Register</div>
                  <div className="text-xs text-slate-500">Log MRN asset service</div>
                </div>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Navigation / Floating Bar */}
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-white rounded-full shadow-xl ring-1 ring-slate-200 px-2 py-2 flex items-center gap-2 z-50">
          <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-deep-twilight text-white text-sm font-medium hover:bg-french-blue transition-colors">
            <Activity className="h-4 w-4" /> Dashboard
          </button>
          <button className="flex items-center gap-2 px-6 py-3 rounded-full text-slate-600 text-sm font-medium hover:bg-slate-100 transition-colors">
            <Truck className="h-4 w-4" /> Vehicles
          </button>
          <button className="flex items-center gap-2 px-6 py-3 rounded-full text-slate-600 text-sm font-medium hover:bg-slate-100 transition-colors">
            <Scale className="h-4 w-4" /> Weighbridge
          </button>
          <button className="flex items-center gap-2 px-6 py-3 rounded-full text-slate-600 text-sm font-medium hover:bg-slate-100 transition-colors">
            <FileCheck className="h-4 w-4" /> Permits
          </button>
        </div>

      </main>
    </div>
  );
}
