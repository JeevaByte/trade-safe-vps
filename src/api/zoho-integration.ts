
import { toast } from "sonner";

/**
 * Types for Zoho Billing integration
 */
export interface ZohoSubscription {
  subscription_id: string;
  customer_id: string;
  plan_name: string;
  status: "active" | "expired" | "canceled" | "trial";
  start_date: string;
  current_term_end: string;
  amount: number;
}

export interface ZohoInvoice {
  invoice_id: string;
  customer_id: string;
  invoice_number: string;
  date: string;
  due_date: string;
  status: "paid" | "unpaid" | "overdue" | "void";
  total: number;
  balance: number;
}

export interface ZohoWebhookEvent {
  eventType: "subscription_created" | "subscription_updated" | "invoice_created" | "payment_received";
  data: ZohoSubscription | ZohoInvoice;
}

/**
 * Process a webhook event from Zoho Billing
 * 
 * @param event The webhook event from Zoho
 * @returns A promise that resolves when processing is complete
 */
export const processZohoWebhookEvent = async (event: ZohoWebhookEvent): Promise<void> => {
  try {
    console.log("Processing Zoho webhook event:", event.eventType);
    
    // Validate event data
    if (!event.data) {
      throw new Error("Missing event data");
    }
    
    switch (event.eventType) {
      case "subscription_created":
      case "subscription_updated":
        await handleSubscriptionEvent(event.data as ZohoSubscription);
        break;
        
      case "invoice_created":
        await handleInvoiceCreated(event.data as ZohoInvoice);
        break;
        
      case "payment_received":
        await handlePaymentReceived(event.data as ZohoInvoice);
        break;
        
      default:
        console.warn("Unknown event type:", event.eventType);
        throw new Error(`Unsupported event type: ${event.eventType}`);
    }
    
    // Log successful processing
    console.log(`Successfully processed ${event.eventType} event`);
  } catch (error) {
    console.error("Error processing Zoho webhook:", error);
    toast.error("Failed to process billing update");
    
    // Re-throw the error for upstream handling
    throw error;
  }
};

/**
 * Handle subscription events
 */
const handleSubscriptionEvent = async (subscription: ZohoSubscription): Promise<void> => {
  // Validate subscription data
  if (!subscription.subscription_id || !subscription.customer_id) {
    throw new Error("Invalid subscription data");
  }
  
  console.log("Handling subscription event:", subscription);
  
  // Now implementing actual API call instead of the placeholder
  try {
    const response = await fetch('/api/subscriptions/update', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.ZOHO_API_KEY || ''}` 
      },
      body: JSON.stringify(subscription),
    });
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      throw new Error(`Failed to update subscription: ${response.status} ${errorData ? JSON.stringify(errorData) : ''}`);
    }
    
    toast.success(`Subscription ${subscription.status}: ${subscription.plan_name}`);
  } catch (error) {
    console.error("Subscription update error:", error);
    toast.error(`Failed to update subscription: ${subscription.plan_name}`);
    throw error;
  }
};

/**
 * Handle invoice created event
 */
const handleInvoiceCreated = async (invoice: ZohoInvoice): Promise<void> => {
  // Validate invoice data
  if (!invoice.invoice_id || !invoice.customer_id) {
    throw new Error("Invalid invoice data");
  }
  
  console.log("New invoice created:", invoice);
  
  // Now implementing actual API call instead of the placeholder
  try {
    const response = await fetch('/api/invoices/create', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.ZOHO_API_KEY || ''}` 
      },
      body: JSON.stringify(invoice),
    });
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      throw new Error(`Failed to create invoice: ${response.status} ${errorData ? JSON.stringify(errorData) : ''}`);
    }
    
    toast.info(`New invoice created: ${invoice.invoice_number}`);
  } catch (error) {
    console.error("Invoice creation error:", error);
    toast.error(`Failed to create invoice: ${invoice.invoice_number}`);
    throw error;
  }
};

/**
 * Handle payment received event
 */
const handlePaymentReceived = async (invoice: ZohoInvoice): Promise<void> => {
  // Validate invoice data
  if (!invoice.invoice_id || !invoice.customer_id) {
    throw new Error("Invalid invoice data");
  }
  
  console.log("Payment received for invoice:", invoice);
  
  // Now implementing actual API call instead of the placeholder
  try {
    const response = await fetch('/api/payments/record', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.ZOHO_API_KEY || ''}` 
      },
      body: JSON.stringify(invoice),
    });
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      throw new Error(`Failed to record payment: ${response.status} ${errorData ? JSON.stringify(errorData) : ''}`);
    }
    
    toast.success(`Payment received for invoice: ${invoice.invoice_number}`);
  } catch (error) {
    console.error("Payment recording error:", error);
    toast.error(`Failed to record payment: ${invoice.invoice_number}`);
    throw error;
  }
};
