// This file is auto-generated. Do not edit manually.

export interface Charge {
  /** Represents the object's type. */
  object?: 'charge';
  /** ID of the charge. */
  id?: string;
  /** Lifecycle status of the charge. */
  status?: 'ready' | 'settled' | 'invoiced' | 'discarded';
  /** Account that owns the charge. */
  account_id?: string;
  /** Subscription ID when the charge line item is a subscription item. */
  subscription_id?: string | null;
  /** Associated meter event, when applicable. */
  event_id?: string | null;
  /** Display name for the charge line. */
  name?: string;
  /** Optional description. */
  description?: string | null;
  /** Price ID for the line. */
  price_id?: string;
  /** Pricing model key. */
  price_model?: string;
  /** Quantity billed. */
  quantity?: number;
  /** Unit amount before tax/discount. */
  unit_amount?: number;
  /** Subtotal in minor units. */
  subtotal_amount?: number;
  /** Discount amount in minor units. */
  discount_amount?: number;
  /** Tax amount in minor units. */
  tax_amount?: number;
  /** Total amount in minor units. */
  total_amount?: number;
  billing_start?: string | null;
  billing_end?: string | null;
  proration?: Record<string, unknown> | null;
  amount_details?: Record<string, unknown> | null;
  created_at?: string;
  updated_at?: string;
}
