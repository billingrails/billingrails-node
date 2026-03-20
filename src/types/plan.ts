// This file is auto-generated. Do not edit manually.

import type { PlanItem } from './index';

export interface Plan {
  object?: 'plan';
  id?: string;
  created_at?: string;
  code?: string;
  name?: string;
  description?: string | null;
  currency?: string;
  status?: 'active' | 'archived';
  trial_period_days?: number | null;
  account_id?: string | null;
  items?: PlanItem[];
}
