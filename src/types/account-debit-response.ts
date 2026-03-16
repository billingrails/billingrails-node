// This file is auto-generated. Do not edit manually.

import type { Response } from './index';

export interface AccountDebitResponse extends Response {
  /** The account ID. */
  account_id?: string;
  /** Updated balances. */
  balances?: { available: number; currency: string; }[];
}
