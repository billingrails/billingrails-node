// This file is auto-generated. Do not edit manually.

export interface PaymentRequest {
  /** Represents the object's type. */
  object?: 'payment_request';
  /** Date the payment request is due. */
  due_at?: string;
  /** ID of the payment request. */
  id?: string;
  /** Order of this payment request. */
  ordinal?: number;
  /** Status of the payment request. */
  status?: string;
  /** Currency of the payment request. */
  currency?: string;
  /** Amount due in the payment request. */
  due_amount?: number;
  /** Number of days until the payment request is due. */
  due_in_days?: number;
  /** Type of payment request. */
  type?: string;
}
