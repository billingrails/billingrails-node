// This file is auto-generated. Do not edit manually.

export interface PaymentInput {
  /** Mode of the payment. Offline payments record manual payments made outside of the system. Online payments process payments through a payment provider. */
  mode: 'online' | 'offline';
  /** ID of the account to record payment for. */
  account_id: string;
  /** Reference for the payment. */
  reference_id: string;
  /** For offline payments only. Timestamp when the payment succeeded. Defaults to current time if not provided. */
  succeeded_at?: string;
  /** ID of the payment integration to process the payment through. Required for online payments when `payment_method_id` is not provided. */
  integration_id?: string;
  /** ID of the payment method to use for the payment. Payment method will be charged immediately. Required for online payments when `integration_id` is not provided. */
  payment_method_id?: string;
  /** ID of the invoice to create payment for. Required when `payment_request_id` and `credit_grant_id` are not provided. */
  invoice_id?: string;
  /** ID of the payment request to create payment for. Required when `invoice_id` and `credit_grant_id` are not provided. */
  payment_request_id?: string;
  /** ID of the credit grant to create payment for. Required when `invoice_id` and `payment_request_id` are not provided. */
  credit_grant_id?: string;
}
