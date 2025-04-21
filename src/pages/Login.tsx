
import React, { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Checkbox } from "@/components/ui/checkbox";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react"; // Changed from ExclamationTriangleIcon to AlertTriangle from lucide-react

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email." }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
  rememberMe: z.boolean().default(false),
});

const Login = () => {
  const navigate = useNavigate();
  const [loginAttempts, setLoginAttempts] = useState(0);
  const [showSecurityAlert, setShowSecurityAlert] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      // This is a mock login function. In a real app, you would connect to your backend
      console.log("Login attempt with:", { ...values, password: "********" });
      
      // For demo purposes, check if this is a "successful" login
      if (values.email.includes("admin") || values.email.includes("test")) {
        // Log login activity (would be sent to audit log in real implementation)
        console.log("Login successful for:", values.email, "at", new Date().toISOString());
        
        // Simulate successful login
        toast.success("Login successful!");
        
        // Store login state (in a real app, you'd store a JWT token)
        if (values.rememberMe) {
          localStorage.setItem("user_session", JSON.stringify({ 
            email: values.email, 
            loginTime: new Date().toISOString() 
          }));
        } else {
          sessionStorage.setItem("user_session", JSON.stringify({ 
            email: values.email, 
            loginTime: new Date().toISOString() 
          }));
        }
        
        // Redirect to dashboard after successful login
        setTimeout(() => {
          navigate("/dashboard");
        }, 1000);
      } else {
        // Simulate failed login
        setLoginAttempts(prev => prev + 1);
        if (loginAttempts >= 2) {
          setShowSecurityAlert(true);
          // Would typically implement IP-based rate limiting here
        }
        toast.error("Login failed. Please check your credentials.");
      }
    } catch (error) {
      toast.error("Login failed. Please check your credentials.");
      console.error("Login error:", error);
      setLoginAttempts(prev => prev + 1);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md">
        <CardHeader>
          <div className="flex justify-center mb-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-precision-purple to-precision-accent"></div>
          </div>
          <CardTitle className="text-center text-2xl">Login to PrecisionVPS</CardTitle>
          <CardDescription className="text-center">
            Enter your credentials to access your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          {showSecurityAlert && (
            <Alert variant="destructive" className="mb-4">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                Multiple failed login attempts detected. For security reasons, please wait a moment before trying again.
              </AlertDescription>
            </Alert>
          )}
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="email@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="******" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="rememberMe"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 my-2">
                    <FormControl>
                      <Checkbox 
                        checked={field.value} 
                        onCheckedChange={field.onChange} 
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>
                        Remember me
                      </FormLabel>
                    </div>
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">
                Login
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <p className="text-center text-sm">
            <Link to="/forgot-password" className="text-blue-600 hover:text-blue-800">
              Forgot your password?
            </Link>
          </p>
          <p className="text-center text-sm text-gray-500">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-600 hover:text-blue-800">
              Register
            </Link>
          </p>
          <p className="text-center text-xs text-gray-500 mt-2">
            By logging in, you agree to our <a href="#" className="text-blue-600 hover:text-blue-800">Terms of Service</a> and <a href="#" className="text-blue-600 hover:text-blue-800">Privacy Policy</a>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
