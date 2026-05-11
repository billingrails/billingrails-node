// This file is auto-generated. Do not edit manually.

import type { Price } from './index';

export interface CreditAsset {
  /** Represents the object's type. */
  object?: 'credit_asset';
  /** ID of the credit asset. */
  id?: string;
  /** Timestamp when the credit asset was created. */
  created_at?: string;
  /** Display name. */
  name?: string;
  /** Optional description. */
  description?: string | null;
  /** Unique code for this asset. */
  code?: string;
  /** Pricing for paid assets. Null when the asset is promotional  only. */
  price?: Price;
  /** Arbitrary metadata. */
  metadata?: Record<string, unknown> | null;
}
