
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface SystemStatusProps {
  cpuUsage: number;
  ramUsage: number;
  diskUsage: number;
  networkLatency: number;
  uptimePercentage: number;
  serverLocation: string;
}

const SystemStatus = ({
  cpuUsage,
  ramUsage,
  diskUsage,
  networkLatency,
  uptimePercentage,
  serverLocation
}: SystemStatusProps) => {
  // Helper function to determine status color
  const getStatusColor = (value: number, type: 'usage' | 'latency' | 'uptime') => {
    if (type === 'usage') {
      return value > 80 ? "text-red-500" : value > 60 ? "text-yellow-500" : "text-green-500";
    } else if (type === 'latency') {
      return value > 150 ? "text-red-500" : value > 80 ? "text-yellow-500" : "text-green-500";
    } else {
      return value < 98 ? "text-red-500" : value < 99.5 ? "text-yellow-500" : "text-green-500";
    }
  };

  const getProgressColor = (value: number, type: 'usage' | 'latency' | 'uptime') => {
    if (type === 'usage') {
      return value > 80 ? "bg-red-500" : value > 60 ? "bg-yellow-500" : "bg-green-500";
    } else if (type === 'latency') {
      return value > 150 ? "bg-red-500" : value > 80 ? "bg-yellow-500" : "bg-green-500";
    } else {
      return value < 98 ? "bg-red-500" : value < 99.5 ? "bg-yellow-500" : "bg-green-500";
    }
  };

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg">System Status</CardTitle>
          <div className="flex items-center">
            <div className="h-2 w-2 rounded-full bg-green-500 mr-1"></div>
            <span className="text-xs text-green-700">All Systems Operational</span>
          </div>
        </div>
        <div className="text-xs text-gray-500">Server Location: {serverLocation}</div>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm text-gray-600">CPU Usage</span>
            <span className={`text-sm font-medium ${getStatusColor(cpuUsage, 'usage')}`}>{cpuUsage}%</span>
          </div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Progress value={cpuUsage} max={100} className="h-2" indicatorClassName={getProgressColor(cpuUsage, 'usage')} />
              </TooltipTrigger>
              <TooltipContent>
                <p>CPU Usage: {cpuUsage}%</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        
        <div>
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm text-gray-600">RAM Usage</span>
            <span className={`text-sm font-medium ${getStatusColor(ramUsage, 'usage')}`}>{ramUsage}%</span>
          </div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Progress value={ramUsage} max={100} className="h-2" indicatorClassName={getProgressColor(ramUsage, 'usage')} />
              </TooltipTrigger>
              <TooltipContent>
                <p>RAM Usage: {ramUsage}%</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        
        <div>
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm text-gray-600">Disk Usage</span>
            <span className={`text-sm font-medium ${getStatusColor(diskUsage, 'usage')}`}>{diskUsage}%</span>
          </div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Progress value={diskUsage} max={100} className="h-2" indicatorClassName={getProgressColor(diskUsage, 'usage')} />
              </TooltipTrigger>
              <TooltipContent>
                <p>Disk Usage: {diskUsage}%</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        
        <div>
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm text-gray-600">Network Latency</span>
            <span className={`text-sm font-medium ${getStatusColor(networkLatency, 'latency')}`}>{networkLatency} ms</span>
          </div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Progress value={networkLatency} max={300} className="h-2" indicatorClassName={getProgressColor(networkLatency, 'latency')} />
              </TooltipTrigger>
              <TooltipContent>
                <p>Network Latency: {networkLatency} ms</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        
        <div className="col-span-1 md:col-span-2">
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm text-gray-600">Uptime</span>
            <span className={`text-sm font-medium ${getStatusColor(uptimePercentage, 'uptime')}`}>{uptimePercentage}%</span>
          </div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Progress value={uptimePercentage} max={100} className="h-2" indicatorClassName={getProgressColor(uptimePercentage, 'uptime')} />
              </TooltipTrigger>
              <TooltipContent>
                <p>Uptime: {uptimePercentage}%</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </CardContent>
    </Card>
  );
};

export default SystemStatus;
