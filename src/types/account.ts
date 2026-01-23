// This file is auto-generated. Do not edit manually.

import type { Address } from './address';

export interface Account {
  /** Type of account. */
  type?: 'individual' | 'organization';
  /** Default currency of the account. */
  default_currency?: string;
  /** Timezone for the account. */
  timezone?: string;
  /** External ID of the object. */
  external_id?: string;
  /** Shipping address of the account. */
  shipping_address?: Address;
  /** Name of the account. */
  name?: string;
  /** Additional data related to the account. */
  metadata?: Record<string, unknown>;
  /** Country of the account. */
  country?: string;
  /** Timestamp indicating when the object was created. */
  created_at?: string;
  /** Billing address of the account. */
  billing_address?: Address;
  /** Invoice settings for the account. */
  invoice_settings?: { grace_period_days: number; net_term_days: number; number_prefix: string; };
  /** Email of the account. */
  email?: string;
  /** Represents the object's type. */
  object?: 'account';
  /** ID of the object. */
  id?: string;
}
