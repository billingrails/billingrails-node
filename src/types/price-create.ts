// This file is auto-generated. Do not edit manually.

import type { PriceInput } from './index';

/**
 * Price create payload. One of plan_id or fee_id is required.
 */
export interface PriceCreate extends PriceInput {
  /** Plan ID to associate the price with. */
  plan_id?: string | null;
  /** Fee ID to associate the price with. */
  fee_id?: string | null;
}
