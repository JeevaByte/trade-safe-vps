
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Trade {
  date: string;
  time: string;
  symbol: string;
  type: string;
  lots: string;
  openPrice: string;
  closePrice: string;
  profit: string;
  pips: string;
  netProfit: string;
  duration: string;
  gain: string;
}

interface TradesTableProps {
  trades: Trade[];
}

const TradesTable = ({ trades }: TradesTableProps) => {
  return (
    <Card className="mt-6">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Trading Activity</CardTitle>
          <div className="flex">
            <div className="text-sm font-medium bg-blue-100 text-blue-700 px-3 py-1 rounded-l-md border-r border-blue-200">
              Open Trades
            </div>
            <div className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-r-md">
              History
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2 px-3 font-medium text-gray-500">Open Time</th>
                <th className="text-left py-2 px-3 font-medium text-gray-500">Close Time</th>
                <th className="text-left py-2 px-3 font-medium text-gray-500">Symbol</th>
                <th className="text-left py-2 px-3 font-medium text-gray-500">Type</th>
                <th className="text-left py-2 px-3 font-medium text-gray-500">Lots</th>
                <th className="text-left py-2 px-3 font-medium text-gray-500">Open Price</th>
                <th className="text-left py-2 px-3 font-medium text-gray-500">Close Price</th>
                <th className="text-left py-2 px-3 font-medium text-gray-500">Profit Pips</th>
                <th className="text-left py-2 px-3 font-medium text-gray-500">Net Profit</th>
                <th className="text-left py-2 px-3 font-medium text-gray-500">Duration</th>
                <th className="text-left py-2 px-3 font-medium text-gray-500">Gain</th>
              </tr>
            </thead>
            <tbody>
              {trades.map((trade, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="py-2 px-3">{trade.date}</td>
                  <td className="py-2 px-3">{trade.time}</td>
                  <td className="py-2 px-3">{trade.symbol}</td>
                  <td className="py-2 px-3">{trade.type}</td>
                  <td className="py-2 px-3">{trade.lots}</td>
                  <td className="py-2 px-3">{trade.openPrice}</td>
                  <td className="py-2 px-3">{trade.closePrice}</td>
                  <td className="py-2 px-3">{trade.pips}</td>
                  <td className={`py-2 px-3 ${parseFloat(trade.netProfit) < 0 ? 'text-red-600' : 'text-green-600'}`}>
                    {trade.netProfit}
                  </td>
                  <td className="py-2 px-3">{trade.duration}</td>
                  <td className={`py-2 px-3 ${parseFloat(trade.gain) < 0 ? 'text-red-600' : 'text-green-600'}`}>
                    {trade.gain}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex items-center justify-between mt-4">
            <div className="text-xs text-gray-500">
              Showing 1 to 4 of 4 entries
            </div>
            <div className="flex gap-2">
              <div className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded">
                Previous
              </div>
              <div className="text-xs text-white bg-blue-600 px-3 py-1 rounded">
                1
              </div>
              <div className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded">
                Next
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TradesTable;
