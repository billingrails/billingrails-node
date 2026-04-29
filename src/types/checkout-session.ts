// This file is auto-generated. Do not edit manually.

import type { CheckoutSessionLineItem, TaxAmountDetails } from './index';

export interface CheckoutSession {
  /** Represents the object's type. */
  object?: 'checkout_session';
  /** ID of the checkout session. */
  id?: string;
  /** Type of checkout session. */
  type?: 'one_time' | 'subscription';
  /** Status of the checkout session. */
  status?: 'pending' | 'succeeded' | 'failed' | 'expired' | 'canceled' | 'abandoned';
  /** Currency of the checkout session. */
  currency?: string;
  /** Subtotal amount before discounts and taxes. */
  subtotal_amount?: number;
  /** Total discount amount applied. */
  discount_amount?: number;
  /** Total discount amount percentage applied. */
  discount_amount_percentage?: number | null;
  /** Tax amount details. */
  tax_amount_details?: TaxAmountDetails;
  /** Total amount to be charged. */
  total_amount?: number;
  /** ID of the account associated with the checkout session. */
  account_id?: string | null;
  /** ID of the plan for subscription checkout sessions. */
  plan_id?: string | null;
  /** ID of the payment integration. */
  integration_id?: string | null;
  /** ID of the payment link if created from one. */
  payment_page_id?: string | null;
  /** URL to redirect after payment completion. */
  return_url?: string | null;
  /** URL to the hosted checkout page. */
  url?: string;
  /** Allowed payment methods. */
  allowed_payment_methods?: string[];
  /** Start of the billing period. */
  billing_start?: string | null;
  /** End of the billing period. */
  billing_end?: string | null;
  /** Date when the checkout session expires. */
  expires_at?: string | null;
  /** Timestamp indicating when the object was created. */
  created_at?: string;
  /** Key-value pairs that can be used to store additional information. */
  metadata?: Record<string, unknown> | null;
  /** Line items in the checkout session. */
  line_items?: CheckoutSessionLineItem[];
}
