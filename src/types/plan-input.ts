// This file is auto-generated. Do not edit manually.

import type { Interval, Price } from './index';

export interface PlanInput {
  /** When to bill for this fee. */
  bill_timing?: 'advance' | 'arrears';
  /** Billing interval for the plan. */
  interval?: Interval;
  /** Price object for the plan. */
  price?: Price;
  /** Name that appears on invoices for this plan. */
  invoice_name?: string;
  /** Number of billing cycles for this fee. */
  billing_cycles?: number;
  /** Description of the plan. */
  description?: string;
  /** Number of free units included. */
  free_units?: number;
  /** Trial period of the plan in days. */
  trial_period_days?: number;
  /** Name of the plan. */
  name?: string;
}
