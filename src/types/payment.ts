// This file is auto-generated. Do not edit manually.

import type { PaymentMethod } from './index';

export interface Payment {
  /** ID of the payment method used. */
  payment_method_id?: string;
  /** ID of the account the payment belongs to. */
  account_id?: string;
  /** Description of the payment. */
  description?: string | null;
  /** Currency of the payment. */
  currency?: string;
  /** Amount of the payment. */
  amount?: number;
  payment_method?: PaymentMethod;
  /** Date the payment was created. */
  created_at?: string;
  /** Status of the payment. */
  status?: 'pending' | 'succeeded' | 'failed' | 'canceled';
  /** Represents the object's type. */
  object?: 'payment';
  /** ID of the payment. */
  id?: string;
  /** Reference for the payment. */
  reference_id?: string | null;
}
