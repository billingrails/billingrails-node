// This file is auto-generated. Do not edit manually.

export interface CreditTransaction {
  object?: 'credit_transaction';
  id?: string;
  /** Ledger line type. */
  type?: 'inflow' | 'outflow' | 'reversal';
  status?: 'pending' | 'settled' | 'failed' | 'ongoing' | 'reversed';
  /** Signed amount (negative for outflows). */
  amount?: number;
  running_balance?: number;
  currency?: string | null;
  asset_code?: string | null;
  description?: string | null;
  reference_id?: string | null;
  created_at?: string;
  /** Present when the transaction source is an invoice. */
  invoice_id?: string | null;
  /** Present when the transaction source is a charge. */
  charge_id?: string | null;
}
