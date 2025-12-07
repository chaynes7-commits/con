import { Heart, Target, Users, Award } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Heart,
      title: 'Integrity',
      desc: 'We tell you what\'s wrong—nothing more, nothing less.',
    },
    {
      icon: Award,
      title: 'Quality',
      desc: 'Every repair follows industry-best practices using reliable parts.',
    },
    {
      icon: Users,
      title: 'Community',
      desc: 'We\'re proud to take care of the drivers in our local area.',
    },
    {
      icon: Target,
      title: 'Respect',
      desc: 'You deserve clear communication and fair pricing every time.',
    },
  ];

  return (
    <div>
      <section className="relative bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-slate-300">
              Building trust one repair at a time
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Story</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Our shop was built on one core idea: treat customers with respect. We saw too many drivers
            getting overcharged or misled by repair shops, so we set out to do things differently.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            Today, we've built a reputation for honesty, quality, and consistency—one car at a time.
          </p>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 md:p-12 text-white shadow-xl">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg leading-relaxed text-orange-50">
              To provide reliable, affordable, and transparent auto repair services that keep your
              vehicle safe and your mind at ease.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-slate-50 p-8 rounded-xl border-2 border-slate-100 hover:border-orange-200 transition-all group"
              >
                <div className="bg-orange-500 text-white p-3 rounded-lg inline-block mb-4 group-hover:bg-orange-600 transition-colors">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Users className="h-16 w-16 text-orange-500 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet the Team</h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            Our technicians are certified, experienced, and passionate about vehicles. Whether you drive
            a daily commuter, family SUV, or performance car, our team is equipped to take care of your needs.
          </p>
        </div>
      </section>
    </div>
  );
}
