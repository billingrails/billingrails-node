// This file is auto-generated. Do not edit manually.

export interface Product {
  /** Description of the product. */
  description?: string | null;
  /** Unique code of the product. */
  code?: string;
  /** Status of the product. */
  status?: 'active' | 'inactive';
  /** Model of the product. */
  model?: string;
  /** Vendor of the product. */
  vendor?: string | null;
  /** SKU of the product. */
  sku?: string | null;
  /** Represents the object's type. */
  object?: 'product';
  /** Currency of the product. */
  currency?: string;
  /** ID of the object. */
  id?: string;
  /** Name of the product. */
  name?: string;
  /** URL of the product image. */
  image_url?: string | null;
  /** Amount of the product in cents. */
  amount?: number;
  /** Timestamp indicating when the object was created. */
  created_at?: string;
}
