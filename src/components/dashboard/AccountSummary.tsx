
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface AccountSummaryProps {
  accountNumber: string;
  broker: string;
  updated: string;
  gain: string;
  absGain: string;
  daily: string;
  monthly: string;
  drawdown: string;
  deposits: string;
  withdrawals: string;
  profit: string;
  balance: string;
  equity: string;
  currency: string;
}

const AccountSummary = ({
  accountNumber,
  broker,
  updated,
  gain,
  absGain,
  daily,
  monthly,
  drawdown,
  deposits,
  withdrawals,
  profit,
  balance,
  equity,
  currency,
}: AccountSummaryProps) => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Account Summary</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="grid grid-cols-2 gap-y-2 text-sm">
          <div className="text-gray-500">Account number</div>
          <div className="font-medium text-right">{accountNumber}</div>
          
          <div className="text-gray-500">Broker</div>
          <div className="font-medium text-right">{broker}</div>
          
          <div className="text-gray-500">Updated</div>
          <div className="font-medium text-right">{updated}</div>
          
          <div className="text-gray-500">Gain</div>
          <div className="font-medium text-right text-green-600">{gain}</div>
          
          <div className="text-gray-500">Abs gain</div>
          <div className="font-medium text-right text-green-600">{absGain}</div>
          
          <div className="text-gray-500">Daily</div>
          <div className="font-medium text-right text-green-600">{daily}</div>
          
          <div className="text-gray-500">Monthly</div>
          <div className="font-medium text-right text-green-600">{monthly}</div>
          
          <div className="text-gray-500">Drawdown</div>
          <div className="font-medium text-right text-red-600">{drawdown}</div>
          
          <div className="text-gray-500">Deposits</div>
          <div className="font-medium text-right">{deposits}</div>
          
          <div className="text-gray-500">Withdrawals</div>
          <div className="font-medium text-right">{withdrawals}</div>
          
          <div className="text-gray-500">Profit</div>
          <div className="font-medium text-right text-green-600">{profit}</div>
          
          <div className="text-gray-500">Balance</div>
          <div className="font-medium text-right">{balance}</div>
          
          <div className="text-gray-500">Equity</div>
          <div className="font-medium text-right">{equity}</div>
          
          <div className="text-gray-500">Account currency</div>
          <div className="font-medium text-right">{currency}</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AccountSummary;
