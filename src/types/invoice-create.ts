// This file is auto-generated. Do not edit manually.

import type { InvoiceInput } from './index';

export interface InvoiceCreate extends InvoiceInput {
  /** Account ID associated with the invoice. */
  account_id: string;
  /** Currency of the invoice. */
  currency: string;
  /** Items in the invoice. */
  line_items: { quantity: number; name: string; description: string | null; unit_amount: number; }[];
}
