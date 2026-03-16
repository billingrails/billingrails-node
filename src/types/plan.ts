// This file is auto-generated. Do not edit manually.

import type { Fee, Interval, Price } from './index';

export interface Plan {
  /** Represents the object's type. */
  object?: 'plan';
  /** ID of the object. */
  id?: string;
  /** Name of the plan. */
  name?: string;
  /** Internal identifier of the plan. */
  code?: string;
  /** Status of the plan. */
  status?: 'draft' | 'active' | 'archived';
  /** Description of the plan. */
  description?: string;
  /** Name that appears on invoices for this plan. */
  invoice_name?: string;
  /** Trial period of the plan in days. */
  trial_period_days?: number | null;
  /** Timestamp indicating when the object was created. */
  created_at?: string;
  /** Billing interval for the plan (derived from default price). */
  interval?: Interval;
  /** Default price for the plan. */
  price?: Price;
  /** Fees associated with the plan. */
  fees?: Fee[];
}
