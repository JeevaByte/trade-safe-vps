
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from "@/components/ui/chart";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Cell,
  ReferenceLine,
} from 'recharts';

interface MonthlyData {
  name: string;
  value: number;
  formattedValue: string;
}

interface MonthlyAnalyticsProps {
  data: MonthlyData[];
  year: string;
}

const MonthlyAnalytics = ({ data, year }: MonthlyAnalyticsProps) => {
  const config = {
    gain: { label: "Gain %", color: "#10b981" },
    loss: { label: "Loss %", color: "#ef4444" },
  };
  
  return (
    <Card className="mt-6">
      <CardHeader className="pb-2 border-b">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg">Monthly Analytics</CardTitle>
          <div className="text-sm font-medium bg-blue-100 text-blue-700 px-3 py-1 rounded-md">
            {year}
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-4 h-80">
        <ChartContainer config={config}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis 
                dataKey="name" 
                tick={{ fontSize: 10 }}
                tickMargin={8}
              />
              <YAxis 
                tickFormatter={(value) => `${value}%`}
                tick={{ fontSize: 10 }}
                tickMargin={8}
                width={40}
              />
              <ChartTooltip
                content={<ChartTooltipContent />}
                formatter={(value: number) => [`${value.toFixed(2)}%`, 'Gain']}
              />
              <ReferenceLine y={0} stroke="#666" />
              <Bar dataKey="value" name="gain" radius={[4, 4, 0, 0]}>
                {data.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={entry.value >= 0 ? '#10b981' : '#ef4444'} 
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default MonthlyAnalytics;
