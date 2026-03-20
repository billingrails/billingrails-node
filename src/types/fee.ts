// This file is auto-generated. Do not edit manually.

import type { Price } from './index';

export interface Fee {
  /** Represents the object's type. */
  object?: 'fee';
  /** ID of the object. */
  id?: string;
  /** Name of the fee. */
  name?: string;
  /** Unique code for this fee. */
  code?: string;
  /** Description of the fee. */
  description?: string;
  /** Product ID associated with the fee. */
  product_id?: string;
  /** Status of the fee. */
  status?: 'active' | 'archived';
  /** Invoice name of the fee. */
  invoice_name?: string | null;
  /** Timestamp indicating when the object was created. */
  created_at?: string;
  /** Default price for the fee. */
  price?: Price;
}
