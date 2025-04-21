
import React from "react";
import { Server, CheckCircle, AlertCircle, Cpu, MonitorSmartphone, Database, BarChart } from "lucide-react";

const featuresLeft = [
  { icon: <CheckCircle size={18} className="text-green-400" />, label: "Extra Buffer" },
  { icon: <Server size={16} className="text-green-400" />, label: "Trader" },
  { icon: <Server size={16} className="text-green-400" />, label: "Trader" },
  { icon: <Server size={16} className="text-green-400" />, label: "Trader" },
  { icon: <Server size={16} className="text-green-400" />, label: "Trader" },
];

const featuresRight = [
  { icon: <Cpu size={16} className="text-neutral-300" />, label: "Developer" },
  { icon: <Server size={16} className="text-neutral-300" />, label: "Hosting" },
  { icon: <MonitorSmartphone size={16} className="text-neutral-300" />, label: "Gamer" },
  { icon: <Server size={16} className="text-neutral-300" />, label: "Trader" },
  { icon: <Database size={16} className="text-neutral-300" />, label: "Database" },
  { icon: <BarChart size={16} className="text-neutral-300" />, label: "Stock Trader" },
];

const ServerComparison = () => {
  return (
    <section className="py-14 md:py-20 bg-[#101319]">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-2 text-green-400 uppercase tracking-tight">
          WE NEVER OVERLOAD
        </h2>
        <h3 className="text-2xl md:text-4xl font-black text-center text-white uppercase mb-4 tracking-tight">
          OUR SERVERS
        </h3>
        <p className="text-base md:text-lg text-neutral-300 text-center max-w-2xl mb-12">
          Our customers are Forex traders and our servers are balanced perfectly. Your resources are never shared, that's guaranteed.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center w-full gap-10 md:gap-16">
          {/* Forex VPS side */}
          <div className="flex flex-col items-center md:items-end w-full md:w-2/5 relative">
            <div className="flex flex-col space-y-5 absolute -left-36 top-20 z-10 hidden md:flex">
              {featuresLeft.map((feature, i) => (
                <div key={i} className="flex items-center">
                  <span className="flex items-center bg-[#13191C] border border-green-400 px-4 py-1 rounded-lg text-green-400 font-medium text-sm shadow-md hover:scale-105 transition-all">
                    {feature.icon}
                    <span className="ml-2">{feature.label}</span>
                  </span>
                  <div className="w-8 h-0.5 bg-green-400 ml-2" />
                </div>
              ))}
            </div>

            <div className="relative z-10">
              <div className="rounded-xl shadow-2xl bg-gradient-to-b from-[#202828] to-[#14181a] border-2 border-green-400 px-6 py-6" style={{width: 230}}>
                <div className="flex justify-between mb-2">
                  <span className="text-xs bg-gray-900 text-green-400 px-2 py-1 rounded font-bold tracking-wide">VPS</span>
                  <div className="flex space-x-2">
                    <span className="text-xs bg-gray-700 text-white px-2 py-1 rounded">Not For Sale</span>
                    <span className="text-xs bg-gray-700 text-white px-2 py-1 rounded">Not For Sale</span>
                  </div>
                </div>
                <div className="flex flex-col gap-1 py-4">
                  {/* server screens repeated as in screenshot */}
                  {[...Array(7)].map((_, i) => (
                    <div key={i} className="flex items-center bg-gray-800 rounded shadow-inner h-5 my-0.5 px-3">
                      <span className="h-3 w-2 mr-2 bg-green-400 rounded" />
                      <span className="text-green-300 text-xs font-mono">Trader</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-1 pt-2">
                  {/* load bar with 65% load visual */}
                  <div className="relative flex items-center h-5">
                    <div className="w-full h-2 bg-neutral-900 rounded-full overflow-hidden">
                      <div className="h-2 bg-green-400 rounded-full" style={{ width: "65%" }} />
                    </div>
                    <span className="ml-3 text-xs text-green-400 font-bold">65% Load</span>
                  </div>
                </div>
              </div>
              <div className="text-white text-center text-lg mt-2 font-semibold">
                <span className="text-white">Forex</span><span className="text-green-400">VPS</span>
              </div>
            </div>
          </div>
          {/* Generic VPS side */}
          <div className="flex flex-col items-center md:items-start w-full md:w-2/5 relative">
            <div className="flex flex-col space-y-3 absolute -right-40 top-6 z-10 hidden md:flex">
              {featuresRight.map((feature, i) => (
                <div key={i} className="flex items-center">
                  <div className="w-8 h-0.5 bg-[#EA384C] mr-2" />
                  <span className="flex items-center bg-[#19161E] border border-[#EA384C] px-4 py-1 rounded-lg text-[#EA384C] font-medium text-sm shadow-md hover:scale-105 transition-all">
                    {feature.icon}
                    <span className="ml-2">{feature.label}</span>
                  </span>
                </div>
              ))}
            </div>
            <div className="relative z-10">
              <div className="rounded-xl shadow-2xl bg-gradient-to-b from-[#281820] to-[#14181a] border-2 border-[#EA384C] px-6 py-6" style={{width: 230}}>
                <div className="flex justify-between mb-2">
                  <span className="text-xs bg-gray-900 text-red-400 px-2 py-1 rounded font-bold tracking-wide">GENERIC</span>
                  <div></div>
                </div>
                <div className="flex flex-col gap-1 py-4">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="flex items-center bg-gray-900 rounded shadow-inner h-5 my-0.5 px-3">
                      <span className="h-3 w-2 mr-2 bg-red-500 rounded" />
                      <span className="text-red-400 text-xs font-mono">User</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-1 pt-2">
                  <div className="relative flex items-center h-5">
                    <div className="w-full h-2 bg-neutral-900 rounded-full overflow-hidden">
                      <div className="h-2 bg-[#EA384C] rounded-full" style={{ width: "98%" }} />
                    </div>
                    <span className="ml-3 text-xs text-[#ea384c] font-bold">98% Load</span>
                  </div>
                </div>
              </div>
              <div className="text-white text-center text-lg mt-2 font-semibold">
                <span className="text-white">Generic</span>
                <span className="text-[#ea384c]"> VPS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ServerComparison;
