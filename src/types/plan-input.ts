// This file is auto-generated. Do not edit manually.

import type { PriceInput } from './index';

/**
 * Input for creating or updating a plan. Accepts either `price` or `prices` array (prices takes precedence).
 */
export interface PlanInput {
  /** Name of the plan. */
  name?: string;
  /** Description of the plan. */
  description?: string;
  /** Name that appears on invoices for this plan. */
  invoice_name?: string;
  /** Trial period of the plan in days. */
  trial_period_days?: number;
  /** Default price configuration for the plan. If both price and prices are provided, prices takes precedence. */
  price?: PriceInput;
  /** Additional prices for this plan. Takes precedence over the price field if both are provided. */
  prices?: PriceInput[];
}
