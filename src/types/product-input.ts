// This file is auto-generated. Do not edit manually.

export interface ProductInput {
  /** Status of the product. */
  status?: 'active' | 'inactive';
  /** Description of the product. */
  description?: string | null;
  /** SKU of the product. */
  sku?: string | null;
  /** Unique code of the product. */
  code?: string;
  /** Currency of the product. */
  currency?: string;
  /** Name of the product. */
  name?: string;
  /** URL of the product image. */
  image_url?: string | null;
  /** Model of the product. */
  model?: string;
  /** Amount of the product in cents. */
  amount?: number;
}
