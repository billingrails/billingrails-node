// This file is auto-generated. Do not edit manually.

import type { SubscriptionInput } from './index';

export interface SubscriptionCreate extends SubscriptionInput {
  /** Billingrails account ID associated with the subscription. */
  account_id: string;
  /** Start date of the subscription. */
  start_at?: string;
  /** First billing date of the subscription. */
  start_billing_at?: string;
  /** Trial period of the subscription in days. Overrides the plan's trial period if set. */
  trial_period_days?: number | null;
}
