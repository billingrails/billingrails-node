// This file is auto-generated. Do not edit manually.

export interface PaymentMethod {
  /** Represents the object's type. */
  object?: 'payment_method';
  /** ID of the payment method. */
  id?: string;
  /** Status of the payment method. */
  status?: string;
  /** Type of the payment method. */
  type?: string;
  /** Payment provider for the payment method. ex. `stripe`, `paystack`. */
  provider?: string;
  /** ID of the account associated with the payment method. */
  account_id?: string;
  /** Name of the account associated with the payment method. */
  account_name?: string;
  /** Details of the payment method. */
  details?: Record<string, unknown>;
  /** Date the payment method was created. */
  created_at?: string;
}
