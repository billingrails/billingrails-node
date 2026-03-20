// This file is auto-generated. Do not edit manually.

import type { PaymentMethod } from './index';

export interface Payment {
  /** Represents the object's type. */
  object?: 'payment';
  /** ID of the payment. */
  id?: string;
  /** ID of the account the payment belongs to. */
  account_id?: string;
  /** Amount of the payment. */
  amount?: number;
  /** Date the payment was created. */
  created_at?: string;
  /** Currency of the payment. */
  currency?: string;
  /** Description of the payment. */
  description?: string | null;
  payment_method?: PaymentMethod;
  /** ID of the payment method used. */
  payment_method_id?: string;
  /** Reference for the payment. */
  reference_id?: string | null;
  /** Status of the payment. */
  status?: 'pending' | 'succeeded' | 'failed' | 'canceled';
  /** Reason for failure when status is failed. */
  failure_reason?: 'absent_payment_method' | 'invalid_payment_method' | 'gateway_error' | 'payment_url_generation_failed';
}
