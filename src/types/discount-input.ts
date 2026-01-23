// This file is auto-generated. Do not edit manually.

export interface DiscountInput {
  /** Whether discount can be applied to multiple billing periods. */
  recurring?: boolean;
  /** Percentage off. Required when type is `percentage`. */
  percent_off?: number | null;
  /** Description of the discount. */
  description?: string | null;
  /** Date when the discount expires. */
  valid_until?: string | null;
  /** Currency. Required when type is `fixed_amount`. */
  currency?: string | null;
  /** Maximum number of billing periods discount can recur (null = forever). */
  max_recurring_intervals?: number | null;
  /** Date when the discount becomes valid. */
  valid_from?: string | null;
  /** Name of the discount. */
  name?: string;
  /** Type of discount. */
  type?: 'percentage' | 'fixed_amount';
  /** Maximum number of redemptions across all accounts. */
  max_redemptions?: number | null;
  /** Amount off in currency subunits. Required when type is `fixed_amount`. */
  amount_off?: number | null;
  /** Maximum number of redemptions per account. */
  max_redemptions_per_account?: number | null;
  /** Additional data related to the discount. */
  metadata?: Record<string, unknown> | null;
}
