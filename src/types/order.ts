// This file is auto-generated. Do not edit manually.

export interface Order {
  /** Represents the object's type. */
  object?: 'order';
  /** Fulfillment status of the order. */
  fulfillment_status?: 'pending' | 'fulfilled' | 'partially_fulfilled' | 'canceled';
  /** Outstanding amount of the order. */
  outstanding_amount?: number;
  /** Paid amount of the order. */
  paid_amount?: number;
  /** Payment status of the order. */
  payment_status?: 'pending' | 'paid' | 'partially_paid' | 'refunded' | 'failed';
  /** Total amount of the order. */
  total_amount?: number;
  /** Timestamp indicating when the object was created. */
  created_at?: string;
  /** Status of the order. */
  status?: 'draft' | 'pending' | 'confirmed' | 'fulfilled' | 'canceled';
  /** Additional data related to the order. */
  metadata?: Record<string, unknown> | null;
  /** Return status of the order. */
  return_status?: 'none' | 'requested' | 'approved' | 'returned';
  /** Account ID associated with the order. */
  account_id?: string;
  /** Order number. */
  number?: string;
  /** ID of the object. */
  id?: string;
  /** Currency of the order. */
  currency?: string;
  /** Line items in the order. */
  line_items?: { description: string | null; object: 'order_line_item'; unit_amount: number; id: string; product_name: string; quantity: number; subtotal_amount: number; total_amount: number; product_id: string | null; product_variant_name: string | null; product_variant_id: string | null; }[];
  /** Subtotal amount of the order. */
  subtotal_amount?: number;
}
