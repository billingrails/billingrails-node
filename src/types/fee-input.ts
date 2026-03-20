// This file is auto-generated. Do not edit manually.

import type { PriceInput } from './index';

/**
 * Input for creating or updating a fee. Accepts either `price` or `prices` array (prices takes precedence).
 */
export interface FeeInput {
  /** Name of the fee. */
  name?: string;
  /** Unique code for the fee. */
  code?: string;
  /** Product ID or code associated with the fee. */
  product_id?: string;
  /** Description of the fee. */
  description?: string | null;
  /** Name that appears on invoices for this fee. */
  invoice_name?: string | null;
  /** Default price configuration for the fee. If both price and prices are provided, prices takes precedence. */
  price?: PriceInput;
  /** Additional prices for this fee. Takes precedence over the price field if both are provided. */
  prices?: PriceInput[];
}
