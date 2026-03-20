// This file is auto-generated. Do not edit manually.

import type { PriceInput } from './index';

/**
 * Input for creating or updating a product. Accepts either `price` or `prices` array (prices takes precedence).
 */
export interface ProductInput {
  /** Name of the product. */
  name?: string;
  /** Description of the product. */
  description?: string;
  /** Name that appears on invoices for this product. */
  invoice_name?: string;
  /** Default price configuration for the product. If both price and prices are provided, prices takes precedence. */
  price?: PriceInput;
  /** Additional prices for this product. Takes precedence over the price field if both are provided. */
  prices?: PriceInput[];
}
