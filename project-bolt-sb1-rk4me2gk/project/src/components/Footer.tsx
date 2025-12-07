import { Facebook, Instagram, MapPin, Phone, Mail, Wrench } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const quickLinks = [
    { name: 'Home', path: 'home' },
    { name: 'About', path: 'about' },
    { name: 'Services', path: 'services' },
    { name: 'Contact', path: 'contact' },
    { name: 'Appointment', path: 'appointment' },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-orange-500 p-2 rounded-lg">
                <Wrench className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold text-white">AutoCare Pro</div>
                <div className="text-xs text-slate-400">Expert Auto Repair</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Quality Auto Repair | Fair Pricing | Trusted Technicians
            </p>
            <p className="text-sm text-slate-400">
              Proudly serving our community with reliable service you can count on.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <button
                    onClick={() => {
                      onNavigate(link.path);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-sm hover:text-orange-500 transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <span>1234 Main Street<br />Your City, MI</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-500 flex-shrink-0" />
                <span>(XXX) XXX-XXXX</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange-500 flex-shrink-0" />
                <span>support@yourshop.com</span>
              </li>
            </ul>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="bg-slate-800 p-2 rounded-lg hover:bg-orange-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-lg hover:bg-orange-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-lg hover:bg-orange-500 transition-colors">
                <MapPin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="text-center text-sm text-slate-400">
            <p>&copy; {new Date().getFullYear()} AutoCare Pro. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
