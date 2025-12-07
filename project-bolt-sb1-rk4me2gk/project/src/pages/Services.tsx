import { Wrench, Droplet, Disc, Activity, Gauge, Wind, Settings } from 'lucide-react';

interface ServicesProps {
  onNavigate: (page: string) => void;
}

export default function Services({ onNavigate }: ServicesProps) {
  const services = [
    {
      icon: Wrench,
      title: 'General Auto Repair',
      description: 'We diagnose and repair engines, transmissions, suspension systems, electrical systems, and everything in between. Whatever light comes on, whatever sound your car is making—we can fix it.',
      features: [
        'Engine repair & rebuilds',
        'Transmission service',
        'Suspension work',
        'Electrical diagnostics',
      ],
    },
    {
      icon: Droplet,
      title: 'Oil Changes & Routine Maintenance',
      description: 'Stay ahead of breakdowns with scheduled maintenance.',
      features: [
        'Oil & filter changes',
        'Fluid checks',
        'Belt replacements',
        'Tune-ups',
        'Preventative inspections',
      ],
    },
    {
      icon: Disc,
      title: 'Brake Repair & Replacement',
      description: 'Your brakes are your car\'s most important safety system.',
      features: [
        'Brake inspections',
        'Pad & rotor replacement',
        'Caliper repair',
        'Brake fluid flushes',
      ],
    },
    {
      icon: Activity,
      title: 'Diagnostics',
      description: 'Strange sound? Check engine light flashing? We use modern diagnostic tools to pinpoint the exact issue and fix it fast—saving you stress and money.',
      features: [
        'Computer diagnostics',
        'Check engine light analysis',
        'Performance testing',
        'Electrical system diagnostics',
      ],
    },
    {
      icon: Gauge,
      title: 'Tires & Alignment',
      description: 'Improve safety, fuel efficiency, and ride comfort.',
      features: [
        'Tire rotation',
        'Tire mounting & balancing',
        'New tire installation',
        'Wheel alignment',
      ],
    },
    {
      icon: Wind,
      title: 'AC & Heating Repair',
      description: 'We diagnose heating and cooling issues so your cabin stays comfortable year-round.',
      features: [
        'AC recharge',
        'Compressor repair',
        'Heating system diagnostics',
        'Coolant system service',
      ],
    },
    {
      icon: Settings,
      title: 'Custom Requests',
      description: 'Need something not listed? Just ask—we handle custom repairs and special projects too.',
      features: [
        'Performance upgrades',
        'Custom modifications',
        'Specialty repairs',
        'Fleet maintenance',
      ],
    },
  ];

  return (
    <div>
      <section className="relative bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-slate-300">
              Comprehensive auto repair and maintenance for all makes and models
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
              >
                <div className="p-8 md:p-10">
                  <div className="flex items-start space-x-6">
                    <div className="bg-orange-500 text-white p-4 rounded-xl flex-shrink-0">
                      <service.icon className="h-8 w-8" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-900 mb-3">
                        {service.title}
                      </h3>
                      <p className="text-slate-700 leading-relaxed mb-6">
                        {service.description}
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {service.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-center space-x-2 text-slate-600"
                          >
                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-orange-50">
            Schedule your appointment today and experience the difference quality service makes.
          </p>
          <button
            onClick={() => onNavigate('appointment')}
            className="px-8 py-4 bg-white text-orange-600 rounded-lg font-semibold hover:bg-slate-50 transition-all shadow-xl transform hover:-translate-y-0.5"
          >
            Book an Appointment
          </button>
        </div>
      </section>
    </div>
  );
}
