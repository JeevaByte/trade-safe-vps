
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
    }
  } catch (error) {
    console.error("Error processing Zoho webhook:", error);
    toast.error("Failed to process billing update");
  }
};

/**
 * Handle subscription events
 */
const handleSubscriptionEvent = async (subscription: ZohoSubscription): Promise<void> => {
  // Here you would typically update your database with the subscription data
  console.log("Handling subscription event:", subscription);
  
  // Example implementation:
  // await fetch('/api/subscriptions/update', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(subscription),
  // });
  
  toast.success(`Subscription ${subscription.status}: ${subscription.plan_name}`);
};

/**
 * Handle invoice created event
 */
const handleInvoiceCreated = async (invoice: ZohoInvoice): Promise<void> => {
  console.log("New invoice created:", invoice);
  
  // Example implementation:
  // await fetch('/api/invoices/create', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(invoice),
  // });
  
  toast.info(`New invoice created: ${invoice.invoice_number}`);
};

/**
 * Handle payment received event
 */
const handlePaymentReceived = async (invoice: ZohoInvoice): Promise<void> => {
  console.log("Payment received for invoice:", invoice);
  
  // Example implementation:
  // await fetch('/api/payments/record', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(invoice),
  // });
  
  toast.success(`Payment received for invoice: ${invoice.invoice_number}`);
};
