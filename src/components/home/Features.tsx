
import React from 'react';

const features = [
  {
    title: 'Ultra-Low Latency',
    icon: (
      <svg className="w-12 h-12 text-precision-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
      </svg>
    ),
    description:
      'Connect directly to major brokers with our optimized network routes, ensuring minimum latency and fastest trade execution.',
  },
  {
    title: '99.99% Uptime',
    icon: (
      <svg className="w-12 h-12 text-precision-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
      </svg>
    ),
    description:
      'Our redundant infrastructure guarantees continuous uptime, ensuring your trading strategies and algorithms run without interruption.',
  },
  {
    title: 'Enterprise-Grade Security',
    icon: (
      <svg className="w-12 h-12 text-precision-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
      </svg>
    ),
    description:
      'Protect your trading strategies with advanced security protocols, DDoS protection, and daily backups for peace of mind.',
  },
  {
    title: 'Trading Platform Optimized',
    icon: (
      <svg className="w-12 h-12 text-precision-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
      </svg>
    ),
    description:
      'Pre-installed and pre-configured for MT4, MT5, and cTrader platforms. Run multiple instances with optimal performance.',
  },
  {
    title: 'Trading Bot Friendly',
    icon: (
      <svg className="w-12 h-12 text-precision-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
      </svg>
    ),
    description:
      'Deploy and run your automated trading strategies 24/7 with stable resources and optimal performance for consistent results.',
  },
  {
    title: '24/7 Expert Support',
    icon: (
      <svg className="w-12 h-12 text-precision-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path>
      </svg>
    ),
    description:
      'Our technical experts are available around the clock to assist with any issues or questions related to your VPS environment.',
  },
];

const Features = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose <span className="gradient-text">Precision VPS</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our Forex VPS solutions are designed specifically for traders who demand the highest levels of 
            performance, reliability, and security for their trading operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-card group animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="mb-6 group-hover:transform group-hover:scale-110 transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-precision-dark">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
