// This file is auto-generated. Do not edit manually.

import type { Address } from './address';

export interface AccountInput {
  /** Type of account. */
  type?: 'individual' | 'organization';
  /** Name of the account. */
  name?: string;
  /** Email of the account. */
  email?: string;
  /** External unique reference ID or identifier for this account. */
  external_id?: string;
  /** Shipping address of the account. */
  shipping_address?: Address;
  /** Billing address of the account. */
  billing_address?: Address;
  /** Invoice settings for the account. */
  invoice_settings?: { grace_period_days: number; net_term_days: number; number_prefix: string; locale: string; };
  /** Key-value pairs that can be used to store additional information. */
  metadata?: Record<string, unknown>;
}
