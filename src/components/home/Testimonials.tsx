
import React from 'react';

const testimonials = [
  {
    content:
      "After switching to Precision VPS, my trading execution improved dramatically. The ultra-low latency connection eliminates slippage, and I've never experienced any downtime. Their support team resolved my technical questions within minutes.",
    author: 'Alex Thompson',
    role: 'Professional Forex Trader',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    content:
      "Running my algo trading bots required a reliable and high-performance environment. Precision VPS delivered beyond my expectations. The dedicated resources ensure my strategies run smoothly 24/7 without interruption.",
    author: 'Sarah Chen',
    role: 'Algorithmic Trader',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    content:
      "As a brokerage firm, we recommend Precision VPS to all our clients. Their enterprise-grade security, consistent performance, and exceptional uptime have made them our preferred VPS provider for serious traders.",
    author: 'Michael Rodriguez',
    role: 'Director at FX Solutions',
    avatar: 'https://randomuser.me/api/portraits/men/67.jpg',
  },
];

const Testimonials = () => {
  return (
    <section className="section bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't take our word for it. Here's what traders and institutions say about our VPS services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
              <div className="mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="inline-block w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>

              <blockquote className="text-gray-600 mb-6">"{testimonial.content}"</blockquote>

              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <p className="font-medium text-precision-dark">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-precision-purple-light rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-precision-dark mb-4">Ready to experience the Precision VPS difference?</h3>
          <p className="text-lg text-gray-600 mb-6">
            Join thousands of traders who trust us with their trading infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#pricing" className="btn-primary">
              View Plans
            </a>
            <a href="/contact-us" className="btn-secondary">
              Contact Sales
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
