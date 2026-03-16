// This file is auto-generated. Do not edit manually.

export interface TaxRateInput {
  /** Name of the tax rate. */
  name?: string;
  /** Description of the tax rate. */
  description?: string | null;
  /** Type of tax rate. */
  type?: 'sales' | 'vat' | 'gst' | 'custom';
  /** Tax percentage (0–100). */
  percentage?: number;
  /** Whether the tax is included in the price. */
  inclusive?: boolean;
  /** Country code for the tax rate. */
  country?: string | null;
  /** Label shown on invoices. */
  invoice_name?: string | null;
}
