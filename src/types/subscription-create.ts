// This file is auto-generated. Do not edit manually.

import type { SubscriptionInput } from './index';

export interface SubscriptionCreate extends SubscriptionInput {
  /** Billingrails account ID associated with the subscription. */
  account_id: string;
  /** First billing date of the subscription. */
  start_billing_at?: string;
  /** Start date of the subscription. */
  start_at?: string;
}
