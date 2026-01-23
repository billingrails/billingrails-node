// This file is auto-generated. Do not edit manually.

import type { Address } from './address';

export interface AccountInput {
  /** Default currency of the account. */
  default_currency?: string;
  /** External unique reference ID or identifier for this account. */
  external_id?: string;
  /** Invoice settings for the account. */
  invoice_settings?: { net_term_days: number; number_prefix: string; grace_period_days: number; };
  /** Country of the account. */
  country?: string;
  /** Name of the account. */
  name?: string;
  /** Billing address of the account. */
  billing_address?: Address;
  /** Shipping address of the account. */
  shipping_address?: Address;
  /** Email of the account. */
  email?: string;
  /** Timezone for the account. */
  timezone?: string;
  /** Additional data related to the account. */
  metadata?: Record<string, unknown>;
  /** Type of account. */
  type?: 'individual' | 'organization';
}
