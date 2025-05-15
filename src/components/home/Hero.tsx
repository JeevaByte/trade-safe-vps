
import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative bg-precision-dark overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
      
      {/* Gradient blob */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-precision-green-700 opacity-20 rounded-full filter blur-3xl animate-pulse-glow"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-precision-accent opacity-20 rounded-full filter blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center py-16 md:py-24 lg:py-32">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Experience <span className="text-precision-gold">Uninterrupted</span> Trading with Precision VPS
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
              Lightning-fast servers with ultra-low latency, 99.99% uptime guarantee, and enterprise-grade security for professional Forex traders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/vps-hosting" className="btn-primary text-center px-8 py-3 text-lg">
                View Plans
              </Link>
              <Link to="/contact-us" className="btn-secondary text-center px-8 py-3 text-lg">
                Contact Us
              </Link>
            </div>
            
            {/* Trust badges */}
            <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-6">
              <div className="flex items-center bg-white bg-opacity-10 px-4 py-2 rounded-lg">
                <div className="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
                <span className="text-white text-sm">99.99% Uptime</span>
              </div>
              <div className="flex items-center bg-white bg-opacity-10 px-4 py-2 rounded-lg">
                <div className="w-3 h-3 bg-blue-400 rounded-full mr-2"></div>
                <span className="text-white text-sm">Ultra-Low Latency</span>
              </div>
              <div className="flex items-center bg-white bg-opacity-10 px-4 py-2 rounded-lg">
                <div className="w-3 h-3 bg-precision-gold rounded-full mr-2"></div>
                <span className="text-white text-sm">24/7 Support</span>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main image/illustration */}
              <div className="bg-white p-2 rounded-xl shadow-2xl transform rotate-1">
                <div className="bg-gray-800 rounded-lg overflow-hidden w-full max-w-md">
                  <div className="flex items-center bg-gray-900 px-4 py-2">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-precision-gold rounded-full"></div>
                    </div>
                    <div className="ml-4 text-gray-400 text-xs">Trading Terminal</div>
                  </div>
                  <div className="p-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-700 p-4 rounded-md">
                        <div className="h-32 flex flex-col">
                          <div className="text-green-500 text-sm mb-2">EUR/USD</div>
                          <div className="text-white font-mono">1.1845</div>
                          <div className="text-green-400 text-xs">+0.0012 (+0.10%)</div>
                          <div className="mt-auto flex items-end">
                            <div className="bg-gradient-to-t from-green-500 to-green-400 w-1 h-4 rounded-sm mx-[1px]"></div>
                            <div className="bg-gradient-to-t from-green-500 to-green-400 w-1 h-6 rounded-sm mx-[1px]"></div>
                            <div className="bg-gradient-to-t from-green-500 to-green-400 w-1 h-8 rounded-sm mx-[1px]"></div>
                            <div className="bg-gradient-to-t from-green-500 to-green-400 w-1 h-5 rounded-sm mx-[1px]"></div>
                            <div className="bg-gradient-to-t from-green-500 to-green-400 w-1 h-9 rounded-sm mx-[1px]"></div>
                            <div className="bg-gradient-to-t from-green-500 to-green-400 w-1 h-7 rounded-sm mx-[1px]"></div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-700 p-4 rounded-md">
                        <div className="h-32 flex flex-col">
                          <div className="text-red-500 text-sm mb-2">GBP/USD</div>
                          <div className="text-white font-mono">1.3891</div>
                          <div className="text-red-400 text-xs">-0.0023 (-0.17%)</div>
                          <div className="mt-auto flex items-end">
                            <div className="bg-gradient-to-t from-red-500 to-red-400 w-1 h-7 rounded-sm mx-[1px]"></div>
                            <div className="bg-gradient-to-t from-red-500 to-red-400 w-1 h-5 rounded-sm mx-[1px]"></div>
                            <div className="bg-gradient-to-t from-red-500 to-red-400 w-1 h-8 rounded-sm mx-[1px]"></div>
                            <div className="bg-gradient-to-t from-red-500 to-red-400 w-1 h-4 rounded-sm mx-[1px]"></div>
                            <div className="bg-gradient-to-t from-red-500 to-red-400 w-1 h-2 rounded-sm mx-[1px]"></div>
                            <div className="bg-gradient-to-t from-red-500 to-red-400 w-1 h-3 rounded-sm mx-[1px]"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 bg-gray-800 p-2 rounded-md">
                      <div className="flex justify-between items-center text-xs text-gray-400">
                        <span>Connection: Stable</span>
                        <span className="flex items-center">
                          <span className="inline-block w-2 h-2 bg-precision-gold rounded-full mr-1"></span>
                          Latency: 5ms
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Speed indicator */}
              <div className="absolute -right-6 top-1/2 transform -translate-y-1/2 bg-precision-gold text-white py-2 px-4 rounded-lg shadow-lg">
                <div className="text-sm font-semibold">Ultra-Fast</div>
                <div className="text-xs">
                  <span className="font-mono">5ms</span> Latency
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
