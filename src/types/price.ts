// This file is auto-generated. Do not edit manually.

/**
 * Price configuration for a plan or fee.
 */
export interface Price {
  /** Currency code. */
  currency: string;
  /** Pricing model. */
  model: 'flat' | 'package' | 'volume' | 'graduated' | 'percentage';
  /** Pricing tiers (for volume and graduated models). */
  tiers?: { unit_amount: number; up_to: number | null; }[];
  /** Amount in currency subunits (for flat, package, or tiered pricing). */
  amount?: number | null;
  /** Percentage rate (for percentage model). */
  percentage_rate?: number | null;
  /** Flat amount added to percentage model. */
  flat_amount?: number | null;
  /** Package size (for package model). */
  package_size?: number | null;
}
