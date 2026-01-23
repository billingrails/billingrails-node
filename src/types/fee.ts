// This file is auto-generated. Do not edit manually.

import type { Interval, Price } from './index';

export interface Fee {
  /** ID of the object. */
  id?: string;
  /** Plan ID associated with the fee. */
  plan_id?: string;
  /** Meter ID associated with the fee (for usage billing). */
  meter_id?: string | null;
  /** Price for the fee. */
  price?: Price;
  /** Name of the fee. */
  name?: string;
  /** Billing interval for the fee. */
  interval?: Interval;
  /** Represents the object's type. */
  object?: 'fee';
  /** Unique code for this fee. */
  code?: string;
  /** Meter profile ID to use for this fee (for usage billing). */
  meter_profile_id?: string;
  /** Timestamp indicating when the object was created. */
  created_at?: string;
  /** Description of the fee. */
  description?: string;
  /** Number of free units allowed for this fee. */
  free_units?: number;
  /** Meter name (for usage billing). */
  meter_name?: string | null;
  /** Billing cycles of the fee. */
  billing_cycles?: number | null;
  /** Invoice name of the fee. */
  invoice_name?: string | null;
  /** Determines whether fee is billed in advance or arrears. */
  bill_timing?: 'advance' | 'arrears';
  /** Entitlements associated with the fee. */
  entitlements?: Record<string, unknown>[];
  /** Meter profile name (for usage billing). */
  meter_profile_name?: string;
}
