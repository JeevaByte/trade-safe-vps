
import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { CreditCard, FileText, RefreshCw, Settings } from "lucide-react";

// These would come from your Zoho integration
const mockInvoices = [
  { id: "INV-001", date: "2023-05-01", amount: 29.99, status: "paid" },
  { id: "INV-002", date: "2023-06-01", amount: 29.99, status: "paid" },
  { id: "INV-003", date: "2023-07-01", amount: 29.99, status: "unpaid" },
];

// Mock subscription data
const mockSubscription = {
  plan: "Premium VPS",
  status: "active",
  nextBillingDate: "2023-08-01",
  amount: 29.99
};

const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount);
};

const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString();
};

const ZohoBillingPanel: React.FC = () => {
  const [syncingData, setSyncingData] = useState(false);
  
  const handleSyncData = () => {
    setSyncingData(true);
    
    // Simulate API call
    setTimeout(() => {
      setSyncingData(false);
      // You would update your data here in a real implementation
    }, 2000);
  };
  
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Current Subscription</CardTitle>
              <CardDescription>Your active billing plan</CardDescription>
            </div>
            <Button 
              variant="outline" 
              size="sm"
              onClick={handleSyncData}
              disabled={syncingData}
            >
              <RefreshCw className={`h-4 w-4 mr-2 ${syncingData ? 'animate-spin' : ''}`} />
              {syncingData ? 'Syncing...' : 'Sync Data'}
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-4 border-b">
              <div>
                <h3 className="font-medium">{mockSubscription.plan}</h3>
                <p className="text-sm text-muted-foreground">
                  Status: <span className="text-green-500 font-medium">{mockSubscription.status}</span>
                </p>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold">{formatCurrency(mockSubscription.amount)}</p>
                <p className="text-sm text-muted-foreground">
                  Next billing: {formatDate(mockSubscription.nextBillingDate)}
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <Button size="sm">
                <CreditCard className="h-4 w-4 mr-2" />
                Update Payment Method
              </Button>
              <Button size="sm" variant="outline">
                <Settings className="h-4 w-4 mr-2" />
                Manage Subscription
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Billing History</CardTitle>
          <CardDescription>Your recent invoices and payments</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableCaption>
              A record of your recent billing activity.
            </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Invoice</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockInvoices.map((invoice) => (
                <TableRow key={invoice.id}>
                  <TableCell>{invoice.id}</TableCell>
                  <TableCell>{formatDate(invoice.date)}</TableCell>
                  <TableCell>{formatCurrency(invoice.amount)}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs capitalize ${
                      invoice.status === 'paid' ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'
                    }`}>
                      {invoice.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button size="sm" variant="ghost">
                      <FileText className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default ZohoBillingPanel;
