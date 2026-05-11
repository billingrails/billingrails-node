// This file is auto-generated. Do not edit manually.

import type { PriceInput } from './index';

export interface CreditAssetCreate {
  /** Display name. */
  name: string;
  /** Unique code for this asset. */
  code: string;
  description?: string | null;
  metadata?: Record<string, unknown> | null;
  /** Price configuration for a paid asset. Omit for a promotional asset. */
  price?: PriceInput;
}
