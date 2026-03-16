// This file is auto-generated. Do not edit manually.

export interface CreditGrantCreate {
  /** Type of credit grant. */
  type: 'paid' | 'promotional';
  /** Account ID associated with the credit grant. */
  account_id: string;
  /** Asset code of the credit grant. Required when `currency` is not set. */
  asset_code?: string;
  /** Currency of the credit grant. Required when `asset_code` is not set. */
  currency?: string;
  /** Granted amount in currency subunits or quantity of credit assets. */
  grant_amount: number;
  /** Whether to create an invoice after payment. Defaults to `true`. */
  invoice_after_payment?: boolean;
  /** Name of the credit grant. */
  name?: string | null;
  /** Description of the credit grant. */
  description?: string | null;
  /** Date when the credit grant expires. */
  expires_at?: string | null;
  /** Whether to create a payment link for the credit grant. Requires `integration_id`. */
  with_payment_link?: boolean;
  /** Integration ID for payment processing. */
  integration_id?: string;
  /** Payment methods to show on the payment link. */
  allowed_payment_methods?: string[];
  /** URL to redirect after payment. */
  return_url?: string;
  /** Key-value pairs that can be used to store additional information. */
  metadata?: Record<string, unknown> | null;
}
