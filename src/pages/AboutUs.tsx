
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-precision-dark py-16 md:py-24">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About <span className="gradient-text">Precision VPS</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Learn about our mission, values, and commitment to providing the best VPS solutions for Forex traders.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="section">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 mb-6">
                  At Precision VPS, our mission is to empower Forex traders with the fastest, most reliable, and secure VPS 
                  solutions, enabling them to execute trades with confidence regardless of market conditions.
                </p>
                <p className="text-lg text-gray-600">
                  We understand that in the world of Forex trading, every millisecond counts. That's why we've built our 
                  infrastructure from the ground up with a singular focus: to eliminate the technical barriers that can stand 
                  between traders and successful execution.
                </p>
              </div>
              <div className="w-full md:w-1/2">
                <div className="bg-gray-100 rounded-xl p-8">
                  <h3 className="text-2xl font-semibold mb-6 text-precision-dark">Our Core Values</h3>
                  <div className="space-y-6">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-precision-purple-light text-precision-purple">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-xl font-medium text-precision-dark">Performance</h4>
                        <p className="text-gray-600 mt-1">We optimize every aspect of our infrastructure to deliver the highest performance possible.</p>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-precision-purple-light text-precision-purple">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-xl font-medium text-precision-dark">Reliability</h4>
                        <p className="text-gray-600 mt-1">Our systems are designed with redundancy at every level to ensure continuous uptime.</p>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-precision-purple-light text-precision-purple">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-xl font-medium text-precision-dark">Security</h4>
                        <p className="text-gray-600 mt-1">We implement enterprise-grade security protocols to keep your trading operations safe.</p>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-precision-purple-light text-precision-purple">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-xl font-medium text-precision-dark">Customer Satisfaction</h4>
                        <p className="text-gray-600 mt-1">We're not happy unless our customers are successful with our solutions.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Why Choose Us */}
        <section className="section bg-gray-50">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Choose <span className="gradient-text">Precision VPS</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                What sets us apart from other VPS providers in the market?
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="feature-card">
                <div className="mb-6">
                  <svg className="w-12 h-12 text-precision-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-precision-dark">Forex Specialized Infrastructure</h3>
                <p className="text-gray-600">
                  Unlike general-purpose VPS providers, our entire infrastructure is designed specifically for 
                  trading applications, resulting in optimized performance.
                </p>
              </div>
              
              <div className="feature-card">
                <div className="mb-6">
                  <svg className="w-12 h-12 text-precision-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-precision-dark">Strategically Located Data Centers</h3>
                <p className="text-gray-600">
                  Our servers are co-located in the same data centers as major Forex brokers to 
                  minimize latency and ensure the fastest possible trade execution.
                </p>
              </div>
              
              <div className="feature-card">
                <div className="mb-6">
                  <svg className="w-12 h-12 text-precision-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-precision-dark">Trading Expert Support Team</h3>
                <p className="text-gray-600">
                  Our support team consists of professionals with both technical expertise and 
                  Forex trading experience, providing truly relevant assistance.
                </p>
              </div>
              
              <div className="feature-card">
                <div className="mb-6">
                  <svg className="w-12 h-12 text-precision-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-precision-dark">Advanced DDoS Protection</h3>
                <p className="text-gray-600">
                  Our enterprise-grade security includes sophisticated DDoS mitigation to ensure 
                  your trading activities remain uninterrupted even during attacks.
                </p>
              </div>
              
              <div className="feature-card">
                <div className="mb-6">
                  <svg className="w-12 h-12 text-precision-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-precision-dark">Automated Backups</h3>
                <p className="text-gray-600">
                  We perform daily backups of your VPS environment, ensuring that your trading 
                  setup can be quickly restored if needed.
                </p>
              </div>
              
              <div className="feature-card">
                <div className="mb-6">
                  <svg className="w-12 h-12 text-precision-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-precision-dark">Performance Monitoring</h3>
                <p className="text-gray-600">
                  Our advanced monitoring system constantly checks your VPS performance to ensure 
                  optimal operation for your trading activities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="section">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Meet Our <span className="gradient-text">Expert Team</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The professionals behind Precision VPS who work tirelessly to ensure your trading success.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-6 text-center">
                  <div className="w-32 h-32 rounded-full bg-gray-300 mx-auto mb-4"></div>
                  <h3 className="text-xl font-semibold text-precision-dark">Robert Mitchell</h3>
                  <p className="text-gray-500 mb-4">CEO & Founder</p>
                  <p className="text-gray-600 text-sm">Former institutional trader with 15+ years of experience in Forex markets and IT infrastructure.</p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-6 text-center">
                  <div className="w-32 h-32 rounded-full bg-gray-300 mx-auto mb-4"></div>
                  <h3 className="text-xl font-semibold text-precision-dark">Jennifer Lee</h3>
                  <p className="text-gray-500 mb-4">CTO</p>
                  <p className="text-gray-600 text-sm">Network engineering expert specializing in low-latency infrastructure design for financial services.</p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-6 text-center">
                  <div className="w-32 h-32 rounded-full bg-gray-300 mx-auto mb-4"></div>
                  <h3 className="text-xl font-semibold text-precision-dark">Marcus Johnson</h3>
                  <p className="text-gray-500 mb-4">Head of Security</p>
                  <p className="text-gray-600 text-sm">Cybersecurity professional with expertise in protecting financial systems and trading infrastructure.</p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-6 text-center">
                  <div className="w-32 h-32 rounded-full bg-gray-300 mx-auto mb-4"></div>
                  <h3 className="text-xl font-semibold text-precision-dark">Sophia Garcia</h3>
                  <p className="text-gray-500 mb-4">Customer Success</p>
                  <p className="text-gray-600 text-sm">Experienced trader and technical support expert focused on helping clients optimize their trading setup.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-precision-purple-light">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-precision-dark">Ready to Experience the Difference?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of traders who trust Precision VPS for their critical trading infrastructure.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a href="/vps-hosting" className="btn-primary">
                View Our Plans
              </a>
              <a href="/contact-us" className="btn-secondary">
                Contact Sales
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
