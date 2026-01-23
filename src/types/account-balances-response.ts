// This file is auto-generated. Do not edit manually.

import type { Response } from './index';

export interface AccountBalancesResponse extends Response {
  /** Balances by currency. */
  balances?: { currency: string; available: number; }[];
  account_id?: string;
}
