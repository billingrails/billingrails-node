/**
 * Billingrails Node.js SDK
 * 
 * Official SDK for the Billingrails API - Flexible, composable, and intuitive API-first commerce platform.
 * 
 * @example
 * ```typescript
 * import { Billingrails } from 'billingrails';
 * 
 * const client = new Billingrails({
 *   apiKey: 'your-api-key',
 * });
 * 
 * // List accounts
 * const accounts = await client.accounts.list();
 * 
 * // Create an account
 * const account = await client.accounts.create({
 *   name: 'John Doe',
 *   email: 'john@example.com',
 * });
 * ```
 */

// Export main client
export { Billingrails } from './client';
export type { BillingrailsConfig } from './client';

// Export errors
export { BillingrailsError } from './errors';

// Export all types
export * from './types';

// Export resources
export { Accounts } from './resources/accounts';
export { CheckoutSessions } from './resources/checkout-sessions';
export { CreditGrants } from './resources/credit-grants';
export { Discounts } from './resources/discounts';
export { Events } from './resources/events';
export { Fees } from './resources/fees';
export { Invoices } from './resources/invoices';
export { Meters } from './resources/meters';
export { PaymentLinks } from './resources/payment-links';
export { Payments } from './resources/payments';
export { Plans } from './resources/plans';
export { Prices } from './resources/prices';
export { Subscriptions } from './resources/subscriptions';
export { TaxRates } from './resources/tax-rates';

