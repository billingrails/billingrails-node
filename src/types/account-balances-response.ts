// This file is auto-generated. Do not edit manually.

import type { Response } from './index';

export interface AccountBalancesResponse extends Response {
  account_id?: string;
  /** Balances by currency. */
  balances?: { available: number; currency: string; }[];
}
