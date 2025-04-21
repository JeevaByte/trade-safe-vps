
import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Shield, Bell } from "lucide-react";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

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
    // In a real app, you would remove the JWT token and other authentication data
    localStorage.removeItem("user_session");
    sessionStorage.removeItem("user_session");
    
    // Log logout action
    console.log("User logged out:", accountNumber, "at", new Date().toISOString());
    
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
        <div className="text-sm text-gray-500 flex flex-wrap gap-2 mt-1">
          <span>Type: {accountType}</span>
          <span>|</span>
          <span>Broker: {broker}</span>
          <span>|</span>
          <div className="flex items-center">
            <Shield className="h-4 w-4 mr-1 text-green-600" />
            <span className="text-green-600">Secured</span>
          </div>
          <span>|</span>
          <span>Last login: {new Date().toLocaleDateString()}</span>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-2 md:mt-0">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Notifications</span>
              <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <div className="flex flex-col">
                <span className="font-medium">Security alert</span>
                <span className="text-xs text-gray-500">New login detected from your account</span>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <div className="flex flex-col">
                <span className="font-medium">Trading notification</span>
                <span className="text-xs text-gray-500">Your order has been executed</span>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button 
          variant="outline" 
          onClick={handleLogout}
        >
          Logout
        </Button>
      </div>
    </div>
  );
};

export default DashboardHeader;
