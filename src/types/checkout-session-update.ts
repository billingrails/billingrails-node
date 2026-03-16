// This file is auto-generated. Do not edit manually.

export interface CheckoutSessionUpdate {
  /** ID of the payment integration to use. */
  integration_id?: string | null;
  /** Discounts to apply to the checkout session. Replaces existing discounts. */
  discounts?: { discount_id: string; }[];
  /** Key-value pairs that can be used to store additional information. */
  metadata?: Record<string, unknown> | null;
}
