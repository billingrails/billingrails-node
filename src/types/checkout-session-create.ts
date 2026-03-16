// This file is auto-generated. Do not edit manually.

export interface CheckoutSessionCreate {
  /** Type of checkout session. */
  type: 'one_time' | 'subscription';
  /** Currency of the checkout session. */
  currency: string;
  /** ID of the customer account associated with the checkout session. */
  account_id: string;
  /** ID of the plan for subscription checkout sessions. */
  plan_id?: string | null;
  /** ID of the payment integration. */
  integration_id?: string | null;
  /** URL to redirect after payment completion. */
  return_url?: string | null;
  /** If true, creates a payment and returns a payment link along with the checkout session. */
  with_payment_link?: boolean;
  /** Allowed payment methods. */
  allowed_payment_methods?: string[];
  /** Line items for the checkout session. */
  line_items: { name: string; description: string | null; quantity: number; unit_amount: number; }[];
  /** Discounts to apply to the checkout session. */
  discounts?: { discount_id: string; }[];
  /** Tax rates to apply to the checkout session. */
  taxes?: { tax_rate_id: string; }[];
  /** Key-value pairs that can be used to store additional information. */
  metadata?: Record<string, unknown> | null;
}
