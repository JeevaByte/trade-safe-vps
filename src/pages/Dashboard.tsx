
import React from 'react';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import AccountSummary from '@/components/dashboard/AccountSummary';
import PerformanceChart from '@/components/dashboard/PerformanceChart';
import TradesTable from '@/components/dashboard/TradesTable';
import PerformanceStats from '@/components/dashboard/PerformanceStats';
import MonthlyAnalytics from '@/components/dashboard/MonthlyAnalytics';

// Mock data for the dashboard
const chartData = [
  { name: "Apr", balance: 60000 },
  { name: "May", balance: 62000 },
  { name: "Jun", balance: 64000 },
  { name: "Jul", balance: 68000 },
  { name: "Aug", balance: 72000 },
  { name: "Sep", balance: 78000 },
  { name: "Oct", balance: 74000 },
];

const mockTrades = [
  {
    date: "28.10.24",
    time: "11:35:02",
    symbol: "XAUUSD",
    type: "Buy",
    lots: "0.06",
    openPrice: "2734.99",
    closePrice: "2730.26",
    profit: "-28.9",
    pips: "-28.9",
    netProfit: "-CA$39.43",
    duration: "0d 1h 55m",
    gain: "-2.58%"
  },
  {
    date: "25.10.24",
    time: "23:48:00",
    symbol: "XAUUSD",
    type: "Buy",
    lots: "0.08",
    openPrice: "2748.7",
    closePrice: "2730.26",
    profit: "-136.0",
    pips: "-136.0",
    netProfit: "-CA$171.59",
    duration: "2d 19h 44m",
    gain: "-11.44%"
  },
  {
    date: "23.10.24",
    time: "15:21:45",
    symbol: "XAUUSD",
    type: "Buy",
    lots: "0.08",
    openPrice: "2748.06",
    closePrice: "2730.26",
    profit: "-139.8",
    pips: "-139.8",
    netProfit: "-CA$197.54",
    duration: "4d 22h 8m",
    gain: "-14.24%"
  },
  {
    date: "23.10.24",
    time: "12:01:45",
    symbol: "XAUUSD",
    type: "Buy",
    lots: "0.1",
    openPrice: "2756.9",
    closePrice: "2730.26",
    profit: "-266.0",
    pips: "-266.0",
    netProfit: "-CA$370.08",
    duration: "5d 1h 28m",
    gain: "-25.86%"
  }
];

const monthlyData = [
  { name: "Apr-24", value: 5.97, formattedValue: "5.97%" },
  { name: "May-24", value: 10, formattedValue: "10%" },
  { name: "Jun-24", value: 14.89, formattedValue: "14.89%" },
  { name: "Jul-24", value: 45.14, formattedValue: "45.14%" },
  { name: "Aug-24", value: 83.65, formattedValue: "83.65%" },
  { name: "Sep-24", value: 44.34, formattedValue: "44.34%" },
  { name: "Oct-24", value: -22.91, formattedValue: "-22.91%" },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-10">
      <div className="container mx-auto px-4 py-6">
        <DashboardHeader 
          accountNumber="5058879" 
          accountType="Real CAD" 
          broker="EightCap Global Ltd"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <PerformanceChart 
              chartData={chartData}
              datePeriod="9 Apr 2024 - 28 Oct 2024"
            />
            
            <TradesTable trades={mockTrades} />
            
            <MonthlyAnalytics 
              data={monthlyData}
              year="2024"
            />
          </div>
          
          <div>
            <AccountSummary
              accountNumber="5058879"
              broker="EightCap Global Ltd"
              updated="50 minutes ago"
              gain="596.98%"
              absGain="596.98%"
              daily="0.89%"
              monthly="33.89%"
              drawdown="-78.47%"
              deposits="CA$203.00"
              withdrawals="CA$0.00"
              profit="CA$1,327.90"
              balance="CA$1,530.90"
              equity="CA$705.57"
              currency="CAD"
            />
            
            <PerformanceStats
              trades="539"
              profitability={70}
              averageWin="CA$6.66"
              averageLoss="-CA$19.08"
              bestTrade="CA$81.74"
              worstTrade="-CA$92.76"
              commissions="CA$0.00"
              highWatermark="CA$1,530.90"
              standardDeviation="CA$25.93"
              gainTotal="CA$1,327.90"
              gainTotalPercentage="596.98%"
              winRate="77.74%"
              lotsTraded="11.6"
              sharpeRatio="1.46"
              zScore="0.2"
              expectancy="2.19"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
