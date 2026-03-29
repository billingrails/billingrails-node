// This file is auto-generated. Do not edit manually.

import type { PriceInput } from './index';

/**
 * Price create payload. Product ID is required.
 */
export interface PriceCreate extends PriceInput {
  /** Product ID to associate the price with. */
  product_id?: string;
}
