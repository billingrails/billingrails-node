// This file is auto-generated. Do not edit manually.

import type { Fee, Interval, Price } from './index';

export interface Plan {
  /** Internal identifier of the plan. */
  code?: string;
  /** Billing cycles of the fee. */
  billing_cycles?: number | null;
  /** Name that appears on invoices for this plan. */
  invoice_name?: string;
  /** Fees associated with the plan. */
  fees?: Fee[];
  /** Name of the plan. */
  name?: string;
  /** Status of the plan. */
  status?: 'draft' | 'active' | 'archived';
  /** Description of the plan. */
  description?: string;
  /** Billing interval for the plan. */
  interval?: Interval;
  /** Timestamp indicating when the object was created. */
  created_at?: string;
  /** Determines whether fee is billed in advance or arrears. */
  bill_timing?: 'advance' | 'arrears';
  /** Number of free units allowed for this fee. */
  free_units?: number;
  /** Meter ID associated with the fee (for usage billing). */
  meter_id?: string | null;
  /** Meter profile name (for usage billing). */
  meter_profile_name?: string;
  /** Meter name (for usage billing). */
  meter_name?: string | null;
  /** Represents the object's type. */
  object?: 'plan';
  /** Meter profile ID to use for this fee (for usage billing). */
  meter_profile_id?: string;
  /** ID of the object. */
  id?: string;
  /** Trial period of the plan in days. */
  trial_period_days?: number | null;
  /** Price for the plan. */
  price?: Price;
}
