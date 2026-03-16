// This file is auto-generated. Do not edit manually.

export interface Discount {
  /** Type of discount. */
  type?: 'percentage' | 'fixed_amount';
  /** Represents the object's type. */
  object?: 'discount';
  /** ID of the discount. */
  id?: string;
  /** Account ID (if discount is account-specific). */
  account_id?: string | null;
  /** Status of the discount. */
  status?: 'pending' | 'active' | 'expired' | 'archived';
  /** Name of the discount. */
  name?: string;
  /** Unique code for the discount. */
  code?: string;
  /** Description of the discount. */
  description?: string | null;
  /** Percentage off. */
  percent_off?: number | null;
  /** Currency for fixed amount discounts. */
  currency?: string | null;
  /** Amount off in currency subunits. */
  amount_off?: number | null;
  /** Whether discount can be applied to multiple billing periods. */
  recurring?: boolean;
  /** Maximum number of billing periods discount can recur (null = forever). */
  max_recurring_intervals?: number | null;
  /** Maximum number of redemptions across all accounts. */
  max_redemptions?: number | null;
  /** Maximum number of redemptions per account. */
  max_redemptions_per_account?: number | null;
  /** Total number of redemptions across all accounts. */
  redemptions?: number;
  /** Date when the discount becomes valid. */
  valid_from?: string | null;
  /** Date when the discount expires. */
  valid_until?: string | null;
  /** Date when the discount expired. */
  expired_at?: string | null;
  /** Timestamp indicating when the object was created. */
  created_at?: string;
}
