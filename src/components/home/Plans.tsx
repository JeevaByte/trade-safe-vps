
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const plans = [
  {
    name: 'Basic',
    price: 9.99,
    description: 'For individual traders with basic needs',
    features: [
      '2GB RAM',
      '40GB SSD Storage',
      '1 vCPU Core',
      'Standard Support',
      'Up to 2 Trading Platforms',
      '99.9% Uptime Guarantee',
      'Standard Network Performance'
    ],
    popular: false,
    ctaText: 'Get Started'
  },
  {
    name: 'Pro',
    price: 19.99,
    description: 'For professional traders with higher requirements',
    features: [
      '4GB RAM',
      '80GB SSD Storage',
      '2 vCPU Cores',
      'Priority Support',
      'Up to 5 Trading Platforms',
      '99.99% Uptime Guarantee',
      'Enhanced Network Performance'
    ],
    popular: true,
    ctaText: 'Get Started'
  },
  {
    name: 'Enterprise',
    price: 39.99,
    description: 'For institutions and high-frequency traders',
    features: [
      '8GB RAM',
      '160GB SSD Storage',
      '4 vCPU Cores',
      'Dedicated Manager',
      'Unlimited Trading Platforms',
      '99.99% Uptime Guarantee',
      'Ultra-Low Latency Network'
    ],
    popular: false,
    ctaText: 'Get Started'
  }
];

const Plans = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  return (
    <section id="pricing" className="section">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Choose the Perfect <span className="gradient-text">VPS Plan</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Select the plan that fits your trading needs. All plans include full root access, 
            advanced monitoring, and our performance guarantee.
          </p>
          
          {/* Billing toggle */}
          <div className="flex items-center justify-center mt-8">
            <div className="flex items-center p-1 rounded-lg bg-gray-100">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-4 py-2 text-sm rounded-md transition-all ${
                  billingCycle === 'monthly'
                    ? 'bg-white shadow-sm text-precision-dark'
                    : 'text-gray-500'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`px-4 py-2 text-sm rounded-md transition-all ${
                  billingCycle === 'yearly'
                    ? 'bg-white shadow-sm text-precision-dark'
                    : 'text-gray-500'
                }`}
              >
                Yearly <span className="text-xs text-precision-purple">Save 15%</span>
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className={`pricing-card animate-fade-in ${plan.popular ? 'border-precision-purple' : ''}`} style={{ animationDelay: `${index * 150}ms` }}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-precision-accent text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-precision-dark mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="flex items-center justify-center">
                  <span className="text-4xl font-bold">
                    ${billingCycle === 'yearly' 
                      ? (plan.price * 0.85).toFixed(2) 
                      : plan.price.toFixed(2)}
                  </span>
                  <span className="text-gray-500 ml-2">/month</span>
                </div>
                {billingCycle === 'yearly' && (
                  <p className="text-sm text-precision-purple mt-1">Billed annually</p>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link 
                to="/vps-hosting" 
                className={`block text-center py-3 px-6 rounded-lg transition-all ${
                  plan.popular
                    ? 'bg-precision-accent hover:bg-precision-purple text-white'
                    : 'bg-white border border-precision-purple text-precision-dark hover:bg-precision-purple-light'
                }`}
              >
                {plan.ctaText}
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Need a custom solution?</p>
          <Link to="/contact-us" className="btn-secondary">
            Contact Us for Custom Plans
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Plans;
