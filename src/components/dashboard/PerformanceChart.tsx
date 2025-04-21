
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Line } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from "@/components/ui/chart";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

interface ChartData {
  name: string;
  balance: number;
}

interface PerformanceChartProps {
  chartData: ChartData[];
  datePeriod: string;
}

const PerformanceChart = ({ chartData, datePeriod }: PerformanceChartProps) => {
  const config = {
    balance: { label: "Balance", color: "#ef7ea9" },
  };
  
  return (
    <Card>
      <CardHeader className="pb-2 border-b">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg">Balance</CardTitle>
          <div className="flex text-xs">
            <div className="px-4 py-1 border-b-2 border-blue-500 font-medium">Chart</div>
            <div className="px-4 py-1 text-gray-500">Growth</div>
            <div className="px-4 py-1 text-gray-500">Gain</div>
            <div className="px-4 py-1 text-gray-500">Drawdown</div>
          </div>
        </div>
        <div className="text-xs text-gray-500 mt-1">{datePeriod}</div>
      </CardHeader>
      <CardContent className="pt-4 h-64">
        <ChartContainer config={config}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
              <ChartTooltip
                content={<ChartTooltipContent />}
              />
              <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
              <XAxis 
                dataKey="name" 
                tick={{ fontSize: 10 }}
                tickMargin={8}
              />
              <YAxis 
                domain={['auto', 'auto']}
                tick={{ fontSize: 10 }}
                tickMargin={8}
                width={40}
              />
              <ReferenceLine y={0} stroke="#666" />
              <Line
                type="monotone"
                dataKey="balance"
                stroke="#ef7ea9"
                strokeWidth={2}
                dot={false}
                animationDuration={500}
                name="balance"
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default PerformanceChart;
