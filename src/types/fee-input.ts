// This file is auto-generated. Do not edit manually.

import type { Interval, Price } from './index';

export interface FeeInput {
  /** Billing interval for the fee. */
  interval?: Interval;
  /** Meter ID for usage-based billing. */
  meter_id?: string | null;
  /** Unique code for the fee. */
  code?: string;
  /** Feature entitlements associated with this fee. */
  entitlements?: { value: string; feature_id: string; }[];
  /** Number of billing cycles for this fee. */
  billing_cycles?: number | null;
  /** When to bill for this fee. */
  bill_timing?: 'advance' | 'arrears';
  /** Name of the fee. */
  name?: string;
  /** Name that appears on invoices for this fee. */
  invoice_name?: string | null;
  /** Price configuration for the fee. */
  price?: Price;
  /** Plan ID or code associated with the fee. */
  plan_id?: string;
  /** Description of the fee. */
  description?: string | null;
  /** Number of free units included. */
  free_units?: number | null;
  /** Meter profile ID to use for this fee. */
  meter_profile_id?: string | null;
}
