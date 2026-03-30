// This file is auto-generated. Do not edit manually.

export interface DiscountInput {
  /** Name of the discount. */
  name?: string;
  /** Type of discount. */
  type?: 'percentage' | 'fixed_amount';
  /** Description of the discount. */
  description?: string | null;
  /** Percentage off. Required when type is `percentage`. */
  percent_off?: number | null;
  /** Currency. Required when type is `fixed_amount`. */
  currency?: string | null;
  /** Amount off in currency subunits. Required when type is `fixed_amount`. */
  amount_off?: number | null;
  /** Whether discount can be applied to multiple billing periods. */
  recurring?: boolean;
  /** Maximum number of billing periods discount can recur (null = forever). */
  max_billing_cycles?: number | null;
  /** Maximum number of redemptions across all accounts. */
  max_redemptions?: number | null;
  /** Maximum number of redemptions per account. */
  max_redemptions_per_account?: number | null;
  /** Date when the discount becomes valid. */
  valid_from?: string | null;
  /** Date when the discount expires. */
  valid_until?: string | null;
  /** Key-value pairs that can be used to store additional information. */
  metadata?: Record<string, unknown> | null;
}
