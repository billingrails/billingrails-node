// This file is auto-generated. Do not edit manually.

export interface CreditGrant {
  /** Currency of the credit grant. */
  currency?: string;
  /** Available amount in cents or quantity of credit assets. */
  available_amount?: number;
  /** Date when the credit grant becomes effective. */
  effective_at?: string | null;
  /** Status of the credit grant. */
  status?: 'pending' | 'granted' | 'depleted' | 'expired' | 'voided';
  /** Date when the credit grant expires. */
  expires_at?: string | null;
  /** Granted amount in cents or quantity of credit assets. */
  grant_amount?: number;
  /** Account ID associated with the credit grant. */
  account_id?: string;
  /** Payment status of the credit grant. */
  payment_status?: 'comped' | 'paid' | 'unpaid';
  /** Represents the object's type. */
  object?: 'credit_grant';
  /** Type of credit grant. */
  type?: 'paid' | 'promotional' | 'refund';
  /** ID of the object. */
  id?: string;
  /** Timestamp indicating when the object was created. */
  created_at?: string;
}
