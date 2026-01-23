# Billingrails Node.js SDK

[![npm version](https://badge.fury.io/js/%40billingrails%2Fnode.svg)](https://www.npmjs.com/package/@billingrails/node)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/node/v/@billingrails/node.svg)](https://nodejs.org)

Official Node.js SDK for [Billingrails](https://billingrails.com) - Flexible, composable, and intuitive API-first commerce platform.

## Installation

```bash
pnpm add @billingrails/node
```

Or with npm:

```bash
npm install @billingrails/node
```

Or with yarn:

```bash
yarn add @billingrails/node
```

## Quick Start

```typescript
import { Billingrails } from '@billingrails/node';

// Initialize the client
const client = new Billingrails({
  apiKey: 'your-api-key',
});

// List accounts
const accountsResponse = await client.accounts.list();
console.log(accountsResponse.accounts);

// Create an account
const createResponse = await client.accounts.create({
  name: 'John Doe',
  email: 'john@example.com',
  country: 'US',
  default_currency: 'USD',
});
console.log(createResponse.account);

// Retrieve an account
const retrieveResponse = await client.accounts.retrieve('acc_123');
console.log(retrieveResponse.account);

// Update an account
const updateResponse = await client.accounts.update('acc_123', {
  name: 'Jane Doe',
});
console.log(updateResponse.account);

// Get account balances
const balancesResponse = await client.accounts.getBalances('acc_123');
console.log(balancesResponse.balances);

// Debit an account
const debitResponse = await client.accounts.debit('acc_123', {
  amount: 1000, // Amount in cents
  currency: 'USD',
});
console.log(debitResponse.balances);
```

## Configuration

### Basic Configuration

```typescript
const client = new Billingrails({
  apiKey: 'your-api-key',
});
```

### Advanced Configuration

```typescript
const client = new Billingrails({
  apiKey: 'your-api-key',
  baseUrl: 'https://api.billingrails.com/v1', // Production URL
  timeout: 30000, // Request timeout in milliseconds
  maxRetries: 3, // Maximum number of retries for failed requests
});
```

## API Reference

### Accounts

#### List Accounts

```typescript
const accounts = await client.accounts.list({
  page: 1,
  page_size: 20,
});
```

#### Create Account

```typescript
const account = await client.accounts.create({
  name: 'John Doe',
  email: 'john@example.com',
  type: 'individual',
  country: 'US',
  default_currency: 'USD',
  timezone: 'UTC',
  billing_address: {
    line1: '123 Main St',
    city: 'San Francisco',
    state: 'CA',
    postal_code: '94105',
    country: 'US',
  },
});
```

#### Retrieve Account

```typescript
const account = await client.accounts.retrieve('acc_123');
```

#### Update Account

```typescript
const account = await client.accounts.update('acc_123', {
  name: 'Jane Doe',
  email: 'jane@example.com',
});
```

#### Get Account Balances

```typescript
const balances = await client.accounts.getBalances('acc_123');

// Filter by currency
const usdBalance = await client.accounts.getBalances('acc_123', {
  currency: 'USD',
});
```

#### Debit Account

```typescript
const result = await client.accounts.debit('acc_123', {
  amount: 1000, // Amount in cents
  currency: 'USD',
  reference_id: 'ref_123',
});
```

## Error Handling

The SDK throws `BillingrailsError` for API errors:

```typescript
import { Billingrails, BillingrailsError } from 'billingrails';

try {
  const account = await client.accounts.retrieve('invalid_id');
} catch (error) {
  if (error instanceof BillingrailsError) {
    console.error('API Error:', error.message);
    console.error('Error Code:', error.code);
    console.error('Status Code:', error.statusCode);
    console.error('Details:', error.details);
  }
}
```

## TypeScript Support

The SDK is written in TypeScript and includes full type definitions:

```typescript
import type { Account, AccountCreate, AccountUpdate } from 'billingrails';

const accountData: AccountCreate = {
  name: 'John Doe',
  email: 'john@example.com',
};

const account: Account = await client.accounts.create(accountData);
```

## Development

```bash
# Install dependencies
pnpm install

# Build the SDK
pnpm build

# Run linter
pnpm lint

# Fix linting issues
pnpm lint:fix

# Type check
pnpm typecheck
```

## Requirements

- Node.js >= 18.0.0
- TypeScript >= 5.0.0 (for TypeScript projects)

## License

MIT

## Support

For support, please contact [support@billingrails.com](mailto:support@billingrails.com) or visit our [documentation](https://docs.billingrails.com).
