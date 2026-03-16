// This file is auto-generated. Do not edit manually.

export interface CreditGrant {
  /** Represents the object's type. */
  object?: 'credit_grant';
  /** ID of the object. */
  id?: string;
  /** Type of credit grant. */
  type?: 'paid' | 'promotional' | 'refund';
  /** Account ID associated with the credit grant. */
  account_id?: string;
  /** Status of the credit grant. */
  status?: 'pending' | 'granted' | 'depleted' | 'expired' | 'voided';
  /** Payment status of the credit grant. */
  payment_status?: 'comped' | 'paid' | 'unpaid';
  /** Granted amount in cents or quantity of credit assets. */
  grant_amount?: number;
  /** Available amount in cents or quantity of credit assets. */
  available_amount?: number;
  /** Currency of the credit grant. */
  currency?: string;
  /** Timestamp indicating when the object was created. */
  created_at?: string;
  /** Date when the credit grant becomes effective. */
  effective_at?: string | null;
  /** Date when the credit grant expires. */
  expires_at?: string | null;
}
