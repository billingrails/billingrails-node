// This file is auto-generated. Do not edit manually.

export interface PaymentRequest {
  /** Type of payment request. */
  type?: string;
  /** Currency of the payment request. */
  currency?: string;
  /** Amount due in the payment request. */
  due_amount?: number;
  /** Date the payment request is due. */
  due_at?: string;
  /** Number of days until the payment request is due. */
  due_in_days?: number;
  /** ID of the payment request. */
  id?: string;
  /** Represents the object's type. */
  object?: 'payment_request';
  /** Sequence order (position) of this payment request. */
  ordinal?: number;
  /** Status of the payment request. */
  status?: string;
}
