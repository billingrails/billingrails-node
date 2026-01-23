// This file is auto-generated. Do not edit manually.

export interface PaymentMethod {
  /** Details of the payment method. */
  details?: Record<string, unknown>;
  /** Type of the payment method. */
  type?: string;
  /** Payment provider for the payment method. ex. `stripe`, `paystack`. */
  provider?: string;
  /** Represents the object's type. */
  object?: 'payment_method';
  /** Name of the account associated with the payment method. */
  account_name?: string;
  /** Status of the payment method. */
  status?: string;
  /** ID of the account associated with the payment method. */
  account_id?: string;
  /** Date the payment method was created. */
  created_at?: string;
  /** ID of the payment method. */
  id?: string;
}
