// This file is auto-generated. Do not edit manually.

import type { PriceInput } from './index';

export interface CreditAssetUpdate {
  name?: string;
  /** Unique code for this asset within the site. */
  code?: string;
  description?: string | null;
  metadata?: Record<string, unknown> | null;
  price?: PriceInput;
}
