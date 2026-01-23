// This file is auto-generated. Do not edit manually.

import type { InvoiceLineItem, PaymentRequest } from './index';

export interface Invoice {
  /** Type of invoice. */
  type?: 'adhoc' | 'subscription_signup' | 'subscription_renewal' | 'subscription_update' | 'order';
  /** Account ID associated with the invoice. */
  account_id?: string;
  /** Status of the invoice. */
  status?: 'pending' | 'draft' | 'issued' | 'overdue' | 'paid' | 'partially_paid' | 'refunded' | 'partially_refunded' | 'voided' | 'canceled' | 'failed';
  /** Paid amount of the invoice. */
  paid_amount?: number;
  /** Subscription ID associated with the invoice. */
  subscription_id?: string | null;
  /** Total amount of the invoice including taxes, credits and discounts. */
  total_amount?: number;
  /** Credit amount applied to the invoice. */
  credit_amount?: number;
  /** Outstanding amount of the invoice. */
  outstanding_amount?: number;
  /** Total amount currently due for this invoice. */
  due_amount?: number;
  /** Date in the future when the invoice will be issued. */
  issue_at?: string | null;
  /** Payment collection method for the invoice. */
  collection_method?: 'manual' | 'automatic' | 'send_invoice';
  /** URL to the PDF version of the invoice. */
  download_url?: string;
  /** URL to the hosted page of the invoice. */
  hosted_url?: string;
  /** Date the invoice is due. */
  due_at?: string;
  /** Date the invoice was issued. */
  issued_at?: string | null;
  /** Subtotal amount of the invoice excluding taxes, credits and discounts. */
  subtotal_amount?: number;
  /** Currency of the invoice. */
  currency?: string;
  /** End date for the billing period. */
  billing_end?: string | null;
  /** Payment requests associated with this invoice. */
  payment_requests?: PaymentRequest[];
  /** Amount written off from the invoice. */
  write_off_amount?: number;
  /** Number of the invoice. */
  number?: string;
  /** ID of the object. */
  id?: string;
  /** Start date for the billing period. */
  billing_start?: string | null;
  /** Additional data related to the invoice. */
  metadata?: Record<string, unknown>;
  /** Represents the object's type. */
  object?: 'invoice';
  /** Timestamp indicating when the object was created. */
  created_at?: string;
  /** Items in the invoice. */
  line_items?: InvoiceLineItem[];
}
