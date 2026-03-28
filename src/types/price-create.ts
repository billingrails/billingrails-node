// This file is auto-generated. Do not edit manually.

import type { PriceInput } from './index';

/**
 * Price create payload. Either product_id or fee_id is required.
 */
export interface PriceCreate extends PriceInput {
  /** Product ID to associate the price with. */
  product_id?: string | null;
  /** Fee ID to associate the price with. */
  fee_id?: string | null;
}
