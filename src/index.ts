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
export { CreditGrants } from './resources/credit-grants';
export { Discounts } from './resources/discounts';
export { Events } from './resources/events';
export { Invoices } from './resources/invoices';
export { Payments } from './resources/payments';
export { PaymentPages } from './resources/payment-pages';
export { Meters } from './resources/meters';
export { Plans } from './resources/plans';
export { Subscriptions } from './resources/subscriptions';
export { Products } from './resources/products';
export { Orders } from './resources/orders';
