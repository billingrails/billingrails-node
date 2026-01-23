// This file is auto-generated. Do not edit manually.

import type { InvoiceInput } from './index';

export interface InvoiceUpdate extends InvoiceInput {
  line_items?: { description: string | null; quantity: number; unit_amount: number; id: string; name: string; }[];
}
