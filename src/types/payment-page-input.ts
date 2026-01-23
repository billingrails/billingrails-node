// This file is auto-generated. Do not edit manually.

export interface PaymentPageInput {
  /** URL-friendly identifier for the payment page. */
  slug?: string;
  /** Type of payment page. */
  type?: 'subscription';
  /** Description of the payment page. */
  description?: string | null;
  /** Status of the payment page. */
  status?: 'draft' | 'active' | 'archived';
  /** Name of the payment page. */
  name?: string;
  /** ID of the plan associated with the payment page. Required if type is `subscription`. */
  plan_id?: string | null;
}
