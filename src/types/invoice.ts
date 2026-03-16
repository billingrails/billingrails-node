// This file is auto-generated. Do not edit manually.

import type { InvoiceLineItem, PaymentRequest } from './index';

export interface Invoice {
  /** Represents the object's type. */
  object?: 'invoice';
  /** ID of the object. */
  id?: string;
  /** Number of the invoice. */
  number?: string;
  /** Type of invoice. */
  type?: 'one_time' | 'subscription_signup' | 'subscription_renewal' | 'subscription_resumption' | 'subscription_update';
  /** Status of the invoice. */
  status?: 'pending' | 'draft' | 'issued' | 'overdue' | 'paid' | 'partially_paid' | 'refunded' | 'partially_refunded' | 'voided' | 'canceled' | 'failed';
  /** Account ID associated with the invoice. */
  account_id?: string;
  /** Subscription ID associated with the invoice. */
  subscription_id?: string | null;
  /** Currency of the invoice. */
  currency?: string;
  /** Outstanding amount of the invoice. */
  outstanding_amount?: number;
  /** Paid amount of the invoice. */
  paid_amount?: number;
  /** Subtotal amount of the invoice excluding taxes, credits and discounts. */
  subtotal_amount?: number;
  /** Total amount of the invoice including taxes, credits and discounts. */
  total_amount?: number;
  /** Amount written off from the invoice. */
  write_off_amount?: number;
  /** Payment collection method for the invoice. */
  collection_method?: 'manual' | 'automatic' | 'send_invoice';
  /** Credit amount applied to the invoice. */
  credit_amount?: number;
  /** Total amount currently due for this invoice. */
  due_amount?: number;
  /** URL to the PDF version of the invoice. */
  download_url?: string;
  /** Public URL of the invoice. */
  url?: string;
  /** Date the invoice is due. */
  due_at?: string;
  /** Date in the future when the invoice will be issued. */
  issue_at?: string | null;
  /** Date the invoice was issued. */
  issued_at?: string | null;
  /** End date for the billing period. */
  billing_end?: string | null;
  /** Start date for the billing period. */
  billing_start?: string | null;
  /** Timestamp indicating when the object was created. */
  created_at?: string;
  /** Items in the invoice. */
  line_items?: InvoiceLineItem[];
  /** Key-value pairs that can be used to store additional information. */
  metadata?: Record<string, unknown>;
  /** Payment requests associated with this invoice. */
  payment_requests?: PaymentRequest[];
}
