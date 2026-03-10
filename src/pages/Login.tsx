import { Link } from 'react-router-dom';
import { Layers } from 'lucide-react';

export default function Login() {
  return (
    <div className="min-h-screen flex bg-slate-50">
      {/* Left side - Image/Gradient */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-deep-twilight">
        {/* Abstract shapes using the palette */}
        <div className="absolute top-0 left-0 w-full h-full opacity-80">
          <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-french-blue blur-3xl mix-blend-screen"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-bright-teal blur-3xl mix-blend-screen"></div>
          <div className="absolute top-[30%] left-[20%] w-[40%] h-[40%] rounded-full bg-turquoise-surf blur-3xl mix-blend-screen"></div>
        </div>
        
        <div className="relative z-10 flex flex-col justify-center p-16 text-white h-full">
          <div className="flex items-center gap-2 mb-8">
            <Layers className="h-8 w-8 text-light-cyan" />
            <span className="text-2xl font-bold tracking-tight text-light-cyan">MineTrack</span>
          </div>
          <h1 className="text-5xl font-bold leading-tight mb-6">
            Mine Management,<br />
            <span className="text-sky-aqua">reimagined.</span>
          </h1>
          <p className="text-lg text-frosted-blue-light max-w-md">
            Automate gate entry, weighbridge operations, and transit pass generation with our intelligent platform.
          </p>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-20 xl:px-24 bg-white">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div className="lg:hidden flex items-center gap-2 mb-8">
            <Layers className="h-8 w-8 text-deep-twilight" />
            <span className="text-2xl font-bold tracking-tight text-deep-twilight">MineTrack</span>
          </div>
          
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-2">Sign in to your account</h2>
          <p className="text-sm text-slate-500 mb-8">Enter your details below to access the dashboard</p>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="you@example.com"
                  className="block w-full rounded-xl border-0 py-3 px-4 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-french-blue sm:text-sm sm:leading-6 bg-slate-50"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-700">
                Password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  placeholder="••••••••"
                  className="block w-full rounded-xl border-0 py-3 px-4 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-french-blue sm:text-sm sm:leading-6 bg-slate-50"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-slate-300 text-french-blue focus:ring-french-blue"
                />
                <label htmlFor="remember-me" className="ml-3 block text-sm text-slate-600">
                  Remember me
                </label>
              </div>

              <div className="text-sm leading-6">
                <a href="#" className="font-semibold text-french-blue hover:text-deep-twilight">
                  Forgot password?
                </a>
              </div>
            </div>

            <div>
              <Link
                to="/"
                className="flex w-full justify-center rounded-xl bg-deep-twilight px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-french-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-french-blue transition-colors"
              >
                Sign In
              </Link>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-slate-500">
            Don't have an account?{' '}
            <a href="#" className="font-semibold leading-6 text-french-blue hover:text-deep-twilight">
              Sign up
            </a>
          </p>

          <div className="mt-10">
            <div className="relative">
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-slate-200" />
              </div>
              <div className="relative flex justify-center text-sm font-medium leading-6">
                <span className="bg-white px-6 text-slate-400 uppercase tracking-wider text-xs">Quick Login</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-4">
              <button className="flex w-full items-center justify-center gap-3 rounded-xl bg-white px-3 py-2 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 hover:bg-slate-50 focus-visible:ring-transparent">
                Plant
              </button>
              <button className="flex w-full items-center justify-center gap-3 rounded-xl bg-white px-3 py-2 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 hover:bg-slate-50 focus-visible:ring-transparent">
                Consumer
              </button>
              <button className="flex w-full items-center justify-center gap-3 rounded-xl bg-white px-3 py-2 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 hover:bg-slate-50 focus-visible:ring-transparent">
                Transporter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
