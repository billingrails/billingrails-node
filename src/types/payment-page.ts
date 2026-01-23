// This file is auto-generated. Do not edit manually.

export interface PaymentPage {
  /** Represents the object's type. */
  object?: 'payment_page';
  /** URL to redirect to after payment completion. */
  return_url?: string;
  /** Timestamp indicating when the object was created. */
  created_at?: string;
  /** ID of the payment page. */
  id?: string;
  /** Type of payment page. */
  type?: 'subscription';
  /** Public URL for the payment page. */
  hosted_url?: string;
  /** Status of the payment page. */
  status?: 'draft' | 'active' | 'archived';
  /** Description of the payment page. */
  description?: string | null;
  /** Name of the payment page. */
  name?: string;
  /** URL-friendly identifier for the payment page. */
  slug?: string;
}
