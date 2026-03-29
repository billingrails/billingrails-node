// This file is auto-generated. Do not edit manually.

import type { Interval, Price } from './index';

export interface Product {
  /** Represents the object's type. */
  object?: 'product';
  /** ID of the object. */
  id?: string;
  /** Name of the product. */
  name?: string;
  /** Internal identifier of the product. */
  code?: string;
  /** Status of the product. */
  status?: 'draft' | 'active' | 'archived';
  /** Description of the product. */
  description?: string;
  /** Name that appears on invoices for this product. */
  invoice_name?: string;
  /** Timestamp indicating when the object was created. */
  created_at?: string;
  /** Billing interval for the product (derived from default price). */
  interval?: Interval;
  /** Default price for the product. */
  price?: Price;
}
