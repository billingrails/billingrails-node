// This file is auto-generated. Do not edit manually.

export interface InvoiceLineItem {
  /** Represents the object's type. */
  object?: 'invoice_line_item';
  /** ID of the invoice item. */
  id?: string;
  /** ID of the usage event associated with this line item, if any. */
  event_id?: string | null;
  /** Name of the invoice item. */
  name?: string;
  /** Description of the invoice item. */
  description?: string | null;
  /** Quantity of the invoice item. */
  quantity?: number;
  /** Unit amount of the invoice item (smallest currency unit; may be fractional). */
  unit_amount?: number;
  /** Subtotal amount of the invoice item. */
  subtotal_amount?: number;
  /** Total amount of the invoice item. */
  total_amount?: number;
  /** Start date for the billing period. */
  billing_start?: string | null;
  /** End date for the billing period. */
  billing_end?: string | null;
}
