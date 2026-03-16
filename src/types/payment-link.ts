// This file is auto-generated. Do not edit manually.

export interface PaymentLink {
  /** Type of payment link. */
  type?: 'subscription';
  /** Represents the object's type. */
  object?: 'payment_page';
  /** ID of the payment link. */
  id?: string;
  /** Name of the payment link. */
  name?: string;
  /** Status of the payment link. */
  status?: 'published' | 'unpublished' | 'archived';
  /** Description of the payment link. */
  description?: string | null;
  /** URL-friendly identifier for the payment link. */
  slug?: string;
  /** Public URL that can be shared with customers. */
  url?: string;
  /** URL to redirect to after payment completion. */
  return_url?: string;
  /** Timestamp indicating when the object was created. */
  created_at?: string;
}
