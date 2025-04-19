
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { toast } from '@/hooks/use-toast';

const servicePlans = [
  {
    id: 'basic',
    name: 'Basic',
    price: 9.99,
    description: 'Perfect for individual traders getting started with automated trading.',
    specs: {
      ram: '2GB',
      cpu: '1 vCPU Core',
      storage: '40GB SSD',
      bandwidth: 'Unmetered',
      locations: ['New York', 'London'],
      platforms: 'MT4, MT5',
    },
    features: [
      'Remote Desktop Access',
      'MetaTrader Pre-installed',
      'Full Administrator Rights',
      'DDoS Protection',
      ' 24/7 Basic Support',
      '99.9% Uptime SLA',
    ]
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 19.99,
    description: 'Recommended for professional traders with multiple strategies.',
    specs: {
      ram: '4GB',
      cpu: '2 vCPU Cores',
      storage: '80GB SSD',
      bandwidth: 'Unmetered',
      locations: ['New York', 'London', 'Tokyo', 'Sydney'],
      platforms: 'MT4, MT5, cTrader',
    },
    features: [
      'Remote Desktop Access',
      'Trading Platforms Pre-installed',
      'Full Administrator Rights',
      'Advanced DDoS Protection',
      'Priority Support 24/7',
      'Weekly Backups',
      '99.99% Uptime SLA',
      'Performance Optimization',
    ]
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 39.99,
    description: 'For institutions and high-frequency traders requiring maximum performance.',
    specs: {
      ram: '8GB',
      cpu: '4 vCPU Cores',
      storage: '160GB SSD',
      bandwidth: 'Unmetered',
      locations: ['New York', 'London', 'Tokyo', 'Sydney', 'Frankfurt'],
      platforms: 'MT4, MT5, cTrader, Custom',
    },
    features: [
      'Remote Desktop Access',
      'All Trading Platforms Pre-installed',
      'Full Administrator Rights',
      'Enterprise-Grade DDoS Protection',
      'Dedicated Support Manager',
      'Daily Backups',
      '99.99% Uptime SLA',
      'Performance Optimization',
      'High-Availability Configuration',
      'Custom Software Installation',
    ]
  },
];

interface OrderFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  selectedPlan: string | null;
  location: string;
  platform: string;
  agreeTerms: boolean;
}

const Services = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [showOrderForm, setShowOrderForm] = useState(false);
  
  const [formData, setFormData] = useState<OrderFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    selectedPlan: null,
    location: 'New York',
    platform: 'MT4',
    agreeTerms: false,
  });

  const handlePlanSelect = (planId: string) => {
    setSelectedPlan(planId);
    setFormData(prev => ({ ...prev, selectedPlan: planId }));
    setShowOrderForm(true);
    
    // Scroll to order form
    setTimeout(() => {
      document.getElementById('order-form')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    
    setFormData(prev => ({ ...prev, [name]: val }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would normally send the data to your backend
    console.log('Order submitted:', formData);
    
    // Show success message
    toast({
      title: "Order Submitted Successfully!",
      description: "We'll process your order and contact you shortly.",
    });
    
    // Reset form
    setShowOrderForm(false);
    setSelectedPlan(null);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      selectedPlan: null,
      location: 'New York',
      platform: 'MT4',
      agreeTerms: false,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-precision-dark py-16 md:py-24">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="gradient-text">VPS Hosting</span> Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              High-performance VPS hosting optimized for Forex trading with ultra-low latency and 24/7 reliability.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="section bg-white">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Precision VPS <span className="gradient-text">Features</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                All our VPS plans include these essential features for successful trading.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="feature-card">
                <div className="mb-6">
                  <svg className="w-12 h-12 text-precision-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-precision-dark">Ultra-Low Latency</h3>
                <p className="text-gray-600">
                  Our servers are strategically located near major Forex brokers to ensure the fastest possible trade execution.
                </p>
              </div>

              <div className="feature-card">
                <div className="mb-6">
                  <svg className="w-12 h-12 text-precision-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-precision-dark">99.99% Uptime</h3>
                <p className="text-gray-600">
                  Our redundant infrastructure ensures your trading operations continue without interruption.
                </p>
              </div>

              <div className="feature-card">
                <div className="mb-6">
                  <svg className="w-12 h-12 text-precision-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-precision-dark">Enterprise Security</h3>
                <p className="text-gray-600">
                  Advanced DDoS protection and security protocols to keep your trading systems safe.
                </p>
              </div>

              <div className="feature-card">
                <div className="mb-6">
                  <svg className="w-12 h-12 text-precision-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-precision-dark">Automated Backups</h3>
                <p className="text-gray-600">
                  Regular backups of your VPS environment ensure your trading setup can be quickly restored.
                </p>
              </div>

              <div className="feature-card">
                <div className="mb-6">
                  <svg className="w-12 h-12 text-precision-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-precision-dark">Full Administrator Access</h3>
                <p className="text-gray-600">
                  Complete control over your VPS environment with root/administrator access.
                </p>
              </div>

              <div className="feature-card">
                <div className="mb-6">
                  <svg className="w-12 h-12 text-precision-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-precision-dark">24/7 Expert Support</h3>
                <p className="text-gray-600">
                  Our technical experts are available around the clock to assist with any issues.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Plans Section */}
        <section className="section bg-gray-50" id="plans">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Choose Your <span className="gradient-text">VPS Plan</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Select the plan that fits your trading needs. All plans include full root access, 
                advanced monitoring, and our performance guarantee.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {servicePlans.map((plan) => (
                <div 
                  key={plan.id} 
                  className={`pricing-card ${plan.id === 'pro' ? 'border-precision-purple' : ''}`}
                >
                  {plan.id === 'pro' && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-precision-accent text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-precision-dark mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    <div className="flex items-center justify-center">
                      <span className="text-4xl font-bold">${plan.price.toFixed(2)}</span>
                      <span className="text-gray-500 ml-2">/month</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-precision-dark mb-2">Specifications:</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-500">RAM:</span>
                        <span className="font-medium text-precision-dark">{plan.specs.ram}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">CPU:</span>
                        <span className="font-medium text-precision-dark">{plan.specs.cpu}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Storage:</span>
                        <span className="font-medium text-precision-dark">{plan.specs.storage}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Bandwidth:</span>
                        <span className="font-medium text-precision-dark">{plan.specs.bandwidth}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Platforms:</span>
                        <span className="font-medium text-precision-dark">{plan.specs.platforms}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="font-semibold text-precision-dark mb-2">Features:</h4>
                    <ul className="space-y-2">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button 
                    onClick={() => handlePlanSelect(plan.id)}
                    className={`w-full text-center py-3 px-6 rounded-lg transition-all ${
                      plan.id === 'pro'
                        ? 'bg-precision-accent hover:bg-precision-purple text-white'
                        : 'bg-white border border-precision-purple text-precision-dark hover:bg-precision-purple-light'
                    }`}
                  >
                    Choose Plan
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Order Form */}
        {showOrderForm && (
          <section className="section bg-white" id="order-form">
            <div className="container mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Complete Your <span className="gradient-text">Order</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Please provide your information to set up your VPS account.
                </p>
              </div>

              <div className="max-w-2xl mx-auto">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-precision-dark mb-1">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-precision-purple focus:border-precision-purple transition-all"
                        placeholder="John"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-precision-dark mb-1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-precision-purple focus:border-precision-purple transition-all"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-precision-dark mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-precision-purple focus:border-precision-purple transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-precision-dark mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-precision-purple focus:border-precision-purple transition-all"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-medium text-precision-dark mb-4">Plan Selection</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="selectedPlan" className="block text-sm font-medium text-precision-dark mb-1">
                          Selected Plan
                        </label>
                        <select
                          id="selectedPlan"
                          name="selectedPlan"
                          value={formData.selectedPlan || ''}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-precision-purple focus:border-precision-purple transition-all"
                        >
                          <option value="">Select a plan</option>
                          {servicePlans.map(plan => (
                            <option key={plan.id} value={plan.id}>{plan.name} - ${plan.price.toFixed(2)}/month</option>
                          ))}
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="location" className="block text-sm font-medium text-precision-dark mb-1">
                          Server Location
                        </label>
                        <select
                          id="location"
                          name="location"
                          value={formData.location}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-precision-purple focus:border-precision-purple transition-all"
                        >
                          <option value="New York">New York (NY4)</option>
                          <option value="London">London (LD4)</option>
                          <option value="Tokyo">Tokyo (TY3)</option>
                          <option value="Sydney">Sydney (SY1)</option>
                          <option value="Frankfurt">Frankfurt (FR2)</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="platform" className="block text-sm font-medium text-precision-dark mb-1">
                          Preferred Platform
                        </label>
                        <select
                          id="platform"
                          name="platform"
                          value={formData.platform}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-precision-purple focus:border-precision-purple transition-all"
                        >
                          <option value="MT4">MetaTrader 4</option>
                          <option value="MT5">MetaTrader 5</option>
                          <option value="cTrader">cTrader</option>
                          <option value="None">None</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="agreeTerms"
                        name="agreeTerms"
                        type="checkbox"
                        checked={formData.agreeTerms}
                        onChange={handleInputChange}
                        required
                        className="w-4 h-4 text-precision-purple focus:ring-precision-purple border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="agreeTerms" className="text-gray-600">
                        I agree to the <a href="/terms-and-conditions" className="text-precision-purple hover:text-precision-accent underline">Terms and Conditions</a> and <a href="/privacy-policy" className="text-precision-purple hover:text-precision-accent underline">Privacy Policy</a>
                      </label>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn-primary py-3 px-12"
                    >
                      Submit Order
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </section>
        )}

        {/* FAQ Section */}
        <section className="section bg-gray-50">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Frequently Asked <span className="gradient-text">Questions</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Find answers to common questions about our VPS hosting services.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-xl font-semibold text-precision-dark mb-2">What is a Forex VPS?</h3>
                  <p className="text-gray-600">
                    A Forex VPS (Virtual Private Server) is a dedicated virtual environment optimized for running 
                    foreign exchange trading platforms. It allows traders to run their trading software 24/7 without 
                    interruptions, regardless of their local computer status or internet connection.
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-xl font-semibold text-precision-dark mb-2">Why do I need a VPS for Forex trading?</h3>
                  <p className="text-gray-600">
                    A VPS ensures your trading platforms run continuously without interruptions caused by power outages, 
                    internet disconnections, or computer crashes. It also provides lower latency connections to brokers 
                    for faster trade execution and is essential for running automated trading strategies.
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-xl font-semibold text-precision-dark mb-2">How do I connect to my VPS?</h3>
                  <p className="text-gray-600">
                    You can connect to your VPS using Remote Desktop Protocol (RDP) on Windows or macOS. 
                    After purchasing, you'll receive login credentials and detailed connection instructions. 
                    Our support team is available to assist with the setup process.
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-xl font-semibold text-precision-dark mb-2">Can I run multiple trading platforms simultaneously?</h3>
                  <p className="text-gray-600">
                    Yes, depending on your VPS plan. Our Basic plan supports up to 2 platforms, Pro supports up to 5, 
                    and Enterprise supports unlimited platforms within the resource constraints of your plan.
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-xl font-semibold text-precision-dark mb-2">What happens if I need to upgrade my plan?</h3>
                  <p className="text-gray-600">
                    You can easily upgrade your plan at any time through your client dashboard or by contacting our 
                    support team. Upgrades are typically processed within 1 hour with minimal downtime.
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-xl font-semibold text-precision-dark mb-2">Is there a money-back guarantee?</h3>
                  <p className="text-gray-600">
                    Yes, we offer a 7-day money-back guarantee for new customers. If you're not satisfied with our 
                    service within the first week, you can request a full refund.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-precision-purple-light">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-precision-dark">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Choose your plan and experience the Precision VPS difference today.
            </p>
            <a href="#plans" className="btn-primary py-3 px-12">
              View Plans
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
