import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Jordan P.',
      review: "They're honest and fast. I never feel pressured or confused.",
      rating: 5,
    },
    {
      name: 'Maria D.',
      review: "Fixed what other mechanics couldn't figure out.",
      rating: 5,
    },
    {
      name: 'Anthony G.',
      review: 'Fair prices and good people. Highly recommend.',
      rating: 5,
    },
    {
      name: 'Sarah M.',
      review: 'Been bringing my car here for years. Always reliable and trustworthy service.',
      rating: 5,
    },
    {
      name: 'David R.',
      review: 'Great diagnostic work. They explained everything clearly and gave me options.',
      rating: 5,
    },
    {
      name: 'Lisa K.',
      review: 'No pressure sales tactics. Just honest recommendations and quality work.',
      rating: 5,
    },
    {
      name: 'Michael T.',
      review: 'They saved me money by identifying the real problem instead of replacing unnecessary parts.',
      rating: 5,
    },
    {
      name: 'Jennifer W.',
      review: 'Professional service, fair pricing, and they always finish on time.',
      rating: 5,
    },
    {
      name: 'Robert H.',
      review: 'Best auto shop in the area. My whole family brings their cars here.',
      rating: 5,
    },
  ];

  return (
    <div>
      <section className="relative bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">What Our Customers Say</h1>
            <p className="text-xl text-slate-300">
              Real reviews from real customers who trust us with their vehicles
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-slate-100"
              >
                <div className="flex items-center justify-between mb-4">
                  <Quote className="h-8 w-8 text-orange-500" />
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-orange-500 text-orange-500" />
                    ))}
                  </div>
                </div>
                <p className="text-slate-700 leading-relaxed mb-4">
                  "{testimonial.review}"
                </p>
                <p className="font-semibold text-slate-900">
                  – {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Satisfied Customers
          </h2>
          <p className="text-xl mb-8 text-orange-50">
            Experience the difference that honest, quality service makes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-orange-600 rounded-lg font-semibold hover:bg-slate-50 transition-all shadow-xl">
              Schedule Service
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-white/20 transition-all border border-white/20">
              Call Us Today
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
