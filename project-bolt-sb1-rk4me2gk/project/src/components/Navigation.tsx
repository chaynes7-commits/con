import { Menu, X, Wrench } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: 'home' },
    { name: 'About', path: 'about' },
    { name: 'Services', path: 'services' },
    { name: 'Testimonials', path: 'testimonials' },
    { name: 'Contact', path: 'contact' },
  ];

  const handleNavigate = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => handleNavigate('home')}
          >
            <div className="bg-orange-500 p-2 rounded-lg group-hover:bg-orange-600 transition-colors">
              <Wrench className="h-6 w-6" />
            </div>
            <div>
              <div className="text-xl font-bold">AutoCare Pro</div>
              <div className="text-xs text-slate-400">Expert Auto Repair</div>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => handleNavigate(link.path)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  currentPage === link.path
                    ? 'bg-orange-500 text-white'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => handleNavigate('appointment')}
              className="ml-4 px-6 py-2 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-500/50"
            >
              Book Now
            </button>
          </div>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-slate-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-800 border-t border-slate-700">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => handleNavigate(link.path)}
                className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all ${
                  currentPage === link.path
                    ? 'bg-orange-500 text-white'
                    : 'text-slate-300 hover:bg-slate-700'
                }`}
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => handleNavigate('appointment')}
              className="w-full px-4 py-3 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-all mt-2"
            >
              Book Appointment
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
