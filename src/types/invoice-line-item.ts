// This file is auto-generated. Do not edit manually.

export interface InvoiceLineItem {
  /** ID of the invoice item. */
  id?: string;
  /** Start date for the billing period. */
  billing_start?: string | null;
  /** Quantity of the invoice item. */
  quantity?: number;
  /** Subtotal amount of the invoice item. */
  subtotal_amount?: number;
  /** Represents the object's type. */
  object?: 'invoice_line_item';
  /** Name of the invoice item. */
  name?: string;
  /** Description of the invoice item. */
  description?: string | null;
  /** End date for the billing period. */
  billing_end?: string | null;
  /** Unit amount of the invoice item. */
  unit_amount?: number;
  /** Total amount of the invoice item. */
  total_amount?: number;
}
