// This file is auto-generated. Do not edit manually.

export interface InvoiceInput {
  /** Payment collection method for the invoice. */
  collection_method?: 'automatic' | 'manual';
  /** Payment method ID to charge (required if collection_method is automatic). */
  payment_method_id?: string | null;
  /** Date the invoice is due. */
  due_at?: string;
}
