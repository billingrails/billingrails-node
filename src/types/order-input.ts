// This file is auto-generated. Do not edit manually.

import type { Address } from './address';

export interface OrderInput {
  /** Whether to use billing address for shipping. */
  use_billing_address_for_shipping?: boolean;
  /** Line items in the order. */
  line_items?: { quantity: number; product_id: string; }[];
  /** Account ID associated with the order. */
  account_id?: string;
  /** Currency of the order. */
  currency?: string;
  /** Additional data related to the order. */
  metadata?: Record<string, unknown> | null;
  /** Billing address of the order. */
  billing_address?: Address;
  /** Shipping address of the order. */
  shipping_address?: Address;
}
