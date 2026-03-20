// This file is auto-generated. Do not edit manually.

import type { CheckoutSession, Response } from './index';

export interface CheckoutSessionResponse extends Response {
  /** Provider payment URL. Only present when `initiate_payment` is `true`. */
  payment_url?: string | null;
  checkout_session?: CheckoutSession;
}
