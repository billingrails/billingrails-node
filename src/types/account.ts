// This file is auto-generated. Do not edit manually.

import type { Address } from './address';

export interface Account {
  /** Represents the object's type. */
  object?: 'account';
  /** ID of the object. */
  id?: string;
  /** Type of account. */
  type?: 'individual' | 'organization';
  /** Name of the account. */
  name?: string;
  /** Email of the account. */
  email?: string;
  /** Country of the account. */
  country?: string;
  /** Timestamp indicating when the object was created. */
  created_at?: string;
  /** Default currency of the account. */
  default_currency?: string;
  /** External ID of the object. */
  external_id?: string;
  /** Timezone for the account. */
  timezone?: string;
  /** Shipping address of the account. */
  shipping_address?: Address;
  /** Billing address of the account. */
  billing_address?: Address;
  /** Invoice settings for the account. */
  invoice_settings?: { grace_period_days: number; net_term_days: number; number_prefix: string; locale: string; };
  /** Key-value pairs that can be used to store additional information. */
  metadata?: Record<string, unknown>;
}
