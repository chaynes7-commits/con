import { Phone, CheckCircle, Wrench, Droplet, Disc, Activity, Gauge, Shield } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const services = [
    { icon: Wrench, title: 'Full Service Auto Repair', desc: 'From engine issues to suspension work, we handle it all.' },
    { icon: Droplet, title: 'Oil Changes & Maintenance', desc: 'Keep your vehicle running smoothly with regular care.' },
    { icon: Disc, title: 'Brake Repair', desc: 'Stay safe with our advanced brake diagnostics and repairs.' },
    { icon: Activity, title: 'Diagnostics', desc: 'Check engine light? We\'ll find the real problem fast.' },
    { icon: Gauge, title: 'Tire Services', desc: 'Rotation, mounting, balancing, and replacement.' },
  ];

  return (
    <div>
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <div className="inline-block bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-2 mb-6">
              <span className="text-orange-400 text-sm font-medium">Trusted by thousands of drivers</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Reliable Auto Repair<br />
              <span className="text-orange-500">You Can Trust</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Quality service, honest pricing, and expert technicians dedicated to keeping you safe on the road.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onNavigate('appointment')}
                className="px-8 py-4 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-all shadow-xl hover:shadow-orange-500/50 transform hover:-translate-y-0.5"
              >
                Schedule an Appointment
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-white/20 transition-all border border-white/20 flex items-center justify-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>Call Now</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-xl text-orange-600 font-semibold">
              Honest Work. Fair Prices. Real Results.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-slate-700 leading-relaxed text-center">
              At our shop, we treat every vehicle like it's our own. From basic maintenance to advanced diagnostics,
              our certified technicians make sure the job gets done right the first time. No upselling. No surprises.
              Just dependable service you can count on.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Featured Services
            </h2>
            <p className="text-slate-600">Expert care for every aspect of your vehicle</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-slate-100 hover:border-orange-200 group"
              >
                <div className="bg-orange-500 text-white p-3 rounded-lg inline-block mb-4 group-hover:bg-orange-600 transition-colors">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-slate-600">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <button
              onClick={() => onNavigate('services')}
              className="px-8 py-3 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-all"
            >
              View All Services
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-8">
            <Shield className="h-12 w-12" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Customer Promise
          </h2>
          <p className="text-xl text-center max-w-2xl mx-auto text-orange-50">
            We stand behind every repair. If it's not right, we make it right.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { icon: CheckCircle, text: 'Quality Parts' },
              { icon: CheckCircle, text: 'Expert Technicians' },
              { icon: CheckCircle, text: 'Honest Pricing' },
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-center space-x-3">
                <item.icon className="h-6 w-6" />
                <span className="text-lg font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
