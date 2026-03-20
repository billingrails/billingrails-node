// This file is auto-generated. Do not edit manually.

import type { Interval } from './index';

/**
 * Price configuration for a product or fee.
 */
export interface PriceInput {
  /** Amount in currency subunits (for flat, package, or tiered pricing). */
  amount?: number | null;
  /** Currency code. */
  currency: string;
  /** Pricing model. */
  model: 'flat' | 'per_unit' | 'package' | 'volume' | 'graduated' | 'percentage';
  /** Flat amount added to percentage model. */
  flat_amount?: number | null;
  /** Package size (for package model). */
  package_size?: number | null;
  /** Percentage rate (for percentage model). */
  percentage_rate?: number | null;
  /** Pricing tiers (for volume and graduated models). */
  tiers?: { unit_amount: number; flat_amount: number; max_units: number | null; }[];
  /** Billing interval for this price. */
  interval?: Interval;
  /** Number of billing cycles for this price. */
  billing_cycles?: number | null;
  /** When to bill for this price. */
  bill_timing?: 'advance' | 'arrears';
  /** Number of free units included per billing cycle. */
  free_units?: number | null;
  /** Number of free events included per billing cycle. */
  free_events?: number | null;
  /** Number of free units per event. */
  free_units_per_event?: number | null;
  /** Meter ID for usage-based billing. */
  meter_id?: string | null;
  /** Meter profile ID to use for this price. */
  meter_profile_id?: string | null;
  /** Feature entitlements associated with this price. */
  entitlements?: { feature_id: string; value: string | null; }[];
}
