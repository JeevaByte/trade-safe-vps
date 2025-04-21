
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface PerformanceStatsProps {
  trades: string;
  profitability: number;
  averageWin: string;
  averageLoss: string;
  bestTrade: string;
  worstTrade: string;
  commissions: string;
  highWatermark: string;
  standardDeviation: string;
  gainTotal: string;
  gainTotalPercentage: string;
  winRate: string;
  lotsTraded: string;
  sharpeRatio: string;
  zScore: string;
  expectancy: string;
}

const PerformanceStats = ({
  trades,
  profitability,
  averageWin,
  averageLoss,
  bestTrade,
  worstTrade,
  commissions,
  highWatermark,
  standardDeviation,
  gainTotal,
  gainTotalPercentage,
  winRate,
  lotsTraded,
  sharpeRatio,
  zScore,
  expectancy
}: PerformanceStatsProps) => {
  return (
    <Card className="mt-6">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Performance Statistics</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Trades</span>
              <span className="text-sm font-medium">{trades}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Profitability</span>
              <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-green-300 to-green-500" 
                  style={{ width: `${profitability}%` }}
                ></div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Average win</span>
              <span className="text-sm font-medium text-green-600">{averageWin}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Average loss</span>
              <span className="text-sm font-medium text-red-600">{averageLoss}</span>
            </div>
          </div>
          
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Best trade</span>
              <span className="text-sm font-medium text-green-600">{bestTrade}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Worst trade</span>
              <span className="text-sm font-medium text-red-600">{worstTrade}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Commissions</span>
              <span className="text-sm font-medium">{commissions}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">High watermark</span>
              <span className="text-sm font-medium">{highWatermark}</span>
            </div>
          </div>
          
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Standard deviation</span>
              <span className="text-sm font-medium">{standardDeviation}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Gain total</span>
              <span className="text-sm font-medium text-green-600">{gainTotal}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Gain total %</span>
              <span className="text-sm font-medium text-green-600">{gainTotalPercentage}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Win rate</span>
              <span className="text-sm font-medium">{winRate}</span>
            </div>
          </div>
          
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Lots traded</span>
              <span className="text-sm font-medium">{lotsTraded}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Sharpe ratio</span>
              <span className="text-sm font-medium">{sharpeRatio}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Z-score</span>
              <span className="text-sm font-medium">{zScore}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Expectancy</span>
              <span className="text-sm font-medium">{expectancy}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PerformanceStats;
