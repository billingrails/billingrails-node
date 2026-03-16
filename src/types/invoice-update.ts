// This file is auto-generated. Do not edit manually.

import type { InvoiceInput } from './index';

export interface InvoiceUpdate extends InvoiceInput {
  line_items?: { id: string; name: string; description: string | null; quantity: number; unit_amount: number; }[];
}
