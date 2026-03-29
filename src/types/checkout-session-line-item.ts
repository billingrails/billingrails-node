// This file is auto-generated. Do not edit manually.

export interface CheckoutSessionLineItem {
  /** ID of the line item. */
  id?: string;
  /** Name of the line item. */
  name?: string;
  /** Description of the line item. */
  description?: string | null;
  /** Quantity of the item. */
  quantity?: number;
  /** Unit amount in smallest currency unit (may be fractional). */
  unit_amount?: number;
  /** Total amount for the line item. */
  total_amount?: number;
  /** Pricing model for the line item. */
  price_model?: string | null;
  /** Start of the billing period for this line item. */
  billing_start?: string | null;
  /** End of the billing period for this line item. */
  billing_end?: string | null;
}
