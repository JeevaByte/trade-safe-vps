
import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className="section bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
            <div className="relative">
              <div className="bg-precision-dark rounded-lg p-6 shadow-xl">
                <div className="grid grid-cols-2 gap-4">
                  {/* Server Status Card */}
                  <div className="bg-white rounded-lg p-4 shadow-inner">
                    <h4 className="text-sm font-semibold text-precision-dark mb-3">Server Status</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-600">New York</span>
                        <div className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-green-500 mr-1"></div>
                          <span className="text-xs text-green-600">Online</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-600">London</span>
                        <div className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-green-500 mr-1"></div>
                          <span className="text-xs text-green-600">Online</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-600">Tokyo</span>
                        <div className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-green-500 mr-1"></div>
                          <span className="text-xs text-green-600">Online</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-600">Sydney</span>
                        <div className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-green-500 mr-1"></div>
                          <span className="text-xs text-green-600">Online</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Performance Card */}
                  <div className="bg-white rounded-lg p-4 shadow-inner">
                    <h4 className="text-sm font-semibold text-precision-dark mb-3">Performance</h4>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-600">CPU Load</span>
                          <span className="text-precision-dark">23%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                          <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '23%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-600">Memory</span>
                          <span className="text-precision-dark">42%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                          <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '42%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-600">Network</span>
                          <span className="text-precision-dark">78%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                          <div className="bg-purple-500 h-1.5 rounded-full" style={{ width: '78%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Latency Card */}
                  <div className="col-span-2 bg-white rounded-lg p-4 shadow-inner">
                    <h4 className="text-sm font-semibold text-precision-dark mb-3">Latency Monitor</h4>
                    <div className="flex items-end h-16 gap-1">
                      <div className="w-1/12 bg-precision-purple h-3/6 rounded-t"></div>
                      <div className="w-1/12 bg-precision-purple h-4/6 rounded-t"></div>
                      <div className="w-1/12 bg-precision-purple h-2/6 rounded-t"></div>
                      <div className="w-1/12 bg-precision-purple h-1/6 rounded-t"></div>
                      <div className="w-1/12 bg-precision-purple h-2/6 rounded-t"></div>
                      <div className="w-1/12 bg-precision-purple h-3/6 rounded-t"></div>
                      <div className="w-1/12 bg-precision-purple h-5/6 rounded-t"></div>
                      <div className="w-1/12 bg-precision-purple h-4/6 rounded-t"></div>
                      <div className="w-1/12 bg-precision-purple h-3/6 rounded-t"></div>
                      <div className="w-1/12 bg-precision-purple h-1/6 rounded-t"></div>
                      <div className="w-1/12 bg-precision-purple h-2/6 rounded-t"></div>
                      <div className="w-1/12 bg-precision-purple h-1/6 rounded-t"></div>
                    </div>
                    <div className="flex justify-between mt-2">
                      <span className="text-xs text-gray-500">Avg: 5.2ms</span>
                      <span className="text-xs text-gray-500">Max: 12.8ms</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 text-xs text-gray-400 flex justify-between">
                  <span>Precision VPS Monitoring</span>
                  <span>Last updated: 2 mins ago</span>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-precision-purple rounded-lg opacity-20"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-precision-accent rounded-lg opacity-20"></div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 lg:pl-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About <span className="gradient-text">Precision VPS</span>
            </h2>
            <p className="text-gray-600 mb-6">
              At Precision VPS, we understand the critical nature of Forex trading. Our mission is to empower traders with the 
              fastest, most reliable, and secure VPS solutions designed specifically for trading needs.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-precision-purple-light text-precision-purple">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-precision-dark">Performance</h3>
                  <p className="text-gray-600">We optimize every aspect of our infrastructure for trading applications to ensure minimal latency and maximum execution speed.</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-precision-purple-light text-precision-purple">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-precision-dark">Reliability</h3>
                  <p className="text-gray-600">Our redundant systems and 99.99% uptime guarantee ensure your trading operations continue without interruption.</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-precision-purple-light text-precision-purple">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-precision-dark">Security</h3>
                  <p className="text-gray-600">We implement enterprise-grade security measures to protect your trading strategies and sensitive data.</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-precision-purple-light text-precision-purple">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-precision-dark">Support</h3>
                  <p className="text-gray-600">Our expert technical team is available 24/7 to assist with any issues or questions related to your VPS environment.</p>
                </div>
              </div>
            </div>
            
            <Link to="/about-us" className="btn-primary">
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
