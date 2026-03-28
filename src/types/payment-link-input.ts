// This file is auto-generated. Do not edit manually.

export interface PaymentLinkInput {
  /** Name of the payment link. */
  name?: string;
  /** Type of payment link. */
  type?: 'subscription';
  /** Status of the payment link. */
  status?: 'draft' | 'active' | 'archived';
  /** Description of the payment link. */
  description?: string | null;
  /** ID of the plan for subscription payment links. Required when type is `subscription`. */
  plan_id?: string | null;
  /** URL-friendly identifier for the payment link. */
  slug?: string;
}
