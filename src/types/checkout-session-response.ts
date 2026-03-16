// This file is auto-generated. Do not edit manually.

import type { CheckoutSession, Response } from './index';

export interface CheckoutSessionResponse extends Response {
  /** URL to complete the payment. Only present when `with_payment_link` is true. */
  payment_link?: string | null;
  checkout_session?: CheckoutSession;
}
