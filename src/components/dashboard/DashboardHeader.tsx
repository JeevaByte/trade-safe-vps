
import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface DashboardHeaderProps {
  accountNumber: string;
  accountType: string;
  broker: string;
}

const DashboardHeader = ({ 
  accountNumber, 
  accountType, 
  broker 
}: DashboardHeaderProps) => {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    toast.success("Logged out successfully!");
    setTimeout(() => navigate("/login"), 1000);
  };
  
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 bg-white rounded-lg shadow-sm mb-6">
      <div>
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-bold">Account: {accountNumber}</h1>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-green-500"></div>
            <span className="text-xs text-green-700 bg-green-100 px-2 py-0.5 rounded-full">
              Trading Privileges Verified
            </span>
          </div>
        </div>
        <div className="text-sm text-gray-500 flex gap-2 mt-1">
          <span>Type: {accountType}</span>
          <span>|</span>
          <span>Broker: {broker}</span>
        </div>
      </div>
      <Button 
        variant="outline" 
        className="mt-2 md:mt-0"
        onClick={handleLogout}
      >
        Logout
      </Button>
    </div>
  );
};

export default DashboardHeader;
