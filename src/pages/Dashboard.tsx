
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import AccountSummary from "@/components/dashboard/AccountSummary";
import PerformanceChart from "@/components/dashboard/PerformanceChart";
import MonthlyAnalytics from "@/components/dashboard/MonthlyAnalytics";
import PerformanceStats from "@/components/dashboard/PerformanceStats";
import TradesTable from "@/components/dashboard/TradesTable";
import SystemStatus from "@/components/dashboard/SystemStatus";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is authenticated
    const userSession = localStorage.getItem("user_session") || sessionStorage.getItem("user_session");
    if (!userSession) {
      navigate("/login");
    }
  }, [navigate]);

  // Demo chart data
  const chartData = [
    { name: "Jan", balance: 10000 },
    { name: "Feb", balance: 12000 },
    { name: "Mar", balance: 9800 },
    { name: "Apr", balance: 11500 },
    { name: "May", balance: 14000 },
    { name: "Jun", balance: 15800 },
    { name: "Jul", balance: 15000 },
    { name: "Aug", balance: 16800 },
    { name: "Sep", balance: 17500 },
    { name: "Oct", balance: 18200 },
    { name: "Nov", balance: 17800 },
    { name: "Dec", balance: 19500 },
  ];

  // Demo monthly analytics data
  const monthlyData = [
    { name: "Jan", value: 5.2, formattedValue: "+5.2%" },
    { name: "Feb", value: 7.1, formattedValue: "+7.1%" },
    { name: "Mar", value: -2.3, formattedValue: "-2.3%" },
    { name: "Apr", value: 4.5, formattedValue: "+4.5%" },
    { name: "May", value: 8.7, formattedValue: "+8.7%" },
    { name: "Jun", value: 3.9, formattedValue: "+3.9%" },
    { name: "Jul", value: -1.2, formattedValue: "-1.2%" },
    { name: "Aug", value: 6.3, formattedValue: "+6.3%" },
    { name: "Sep", value: 3.2, formattedValue: "+3.2%" },
    { name: "Oct", value: 4.1, formattedValue: "+4.1%" },
    { name: "Nov", value: -0.8, formattedValue: "-0.8%" },
    { name: "Dec", value: 5.7, formattedValue: "+5.7%" },
  ];

  // Mock system status data
  const systemStatus = {
    cpuUsage: 38,
    ramUsage: 62,
    diskUsage: 45,
    networkLatency: 52,
    uptimePercentage: 99.98,
    serverLocation: "New York, USA (Low Latency)"
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-8">
        <DashboardHeader
          accountNumber="MT4-53827465"
          accountType="Standard"
          broker="IC Markets"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <PerformanceChart
              chartData={chartData}
              datePeriod="January 2025 - December 2025"
            />
            
            <MonthlyAnalytics data={monthlyData} year="2025" />
            
            <PerformanceStats
              trades="264"
              profitability={78}
              averageWin="$482.35"
              averageLoss="$235.21"
              bestTrade="$1,845.67"
              worstTrade="-$632.15"
              commissions="$354.23"
              highWatermark="$21,486.92"
              standardDeviation="4.32%"
              gainTotal="$8,542.35"
              gainTotalPercentage="42.71%"
              winRate="68%"
              lotsTraded="138.42"
              sharpeRatio="1.87"
              zScore="2.34"
              expectancy="$106.78"
            />
          </div>
          
          <div className="space-y-6">
            <AccountSummary
              accountNumber="MT4-53827465"
              broker="IC Markets"
              updated="Today, 15:42"
              gain="+42.71%"
              absGain="+45.35%"
              daily="+0.82%"
              monthly="+5.7%"
              drawdown="8.24%"
              deposits="$20,000.00"
              withdrawals="$3,000.00"
              profit="$8,542.35"
              balance="$25,542.35"
              equity="$25,768.92"
              currency="USD"
            />
            
            <SystemStatus
              cpuUsage={systemStatus.cpuUsage}
              ramUsage={systemStatus.ramUsage}
              diskUsage={systemStatus.diskUsage}
              networkLatency={systemStatus.networkLatency}
              uptimePercentage={systemStatus.uptimePercentage}
              serverLocation={systemStatus.serverLocation}
            />
          </div>
        </div>
        
        <div className="mt-6">
          <TradesTable />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
