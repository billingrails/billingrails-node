// This file is auto-generated. Do not edit manually.

import type { Fee, Price, Product } from './index';

export interface PlanItem {
  object?: 'plan_item';
  id?: string;
  created_at?: string;
  product_id?: string | null;
  fee_id?: string | null;
  price_id?: string;
  price?: Price;
  product?: Product;
  fee?: Fee;
}
