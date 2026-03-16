// This file is auto-generated. Do not edit manually.

export interface TaxRate {
  /** Represents the object's type. */
  object?: 'tax_rate';
  /** ID of the tax rate. */
  id?: string;
  /** When the tax rate was created. */
  created_at?: string;
  /** Name of the tax rate. */
  name?: string;
  /** Unique code for the tax rate. */
  code?: string;
  /** Description of the tax rate. */
  description?: string | null;
  /** Type of tax rate. */
  type?: 'sales' | 'vat' | 'gst' | 'custom';
  /** Status of the tax rate. */
  status?: 'active' | 'archived';
  /** Tax percentage (0–100). */
  percentage?: number;
  /** Whether the tax is included in the price. */
  inclusive?: boolean;
  /** Country code for the tax rate. */
  country?: string | null;
  /** Key-value pairs for additional information. */
  metadata?: Record<string, unknown> | null;
}
