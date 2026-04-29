// This file is auto-generated. Do not edit manually.

import type { AxiosInstance } from 'axios';
import type {
  AccountBalancesResponse,
  AccountCreate,
  AccountDebit,
  AccountDebitResponse,
  AccountListResponse,
  AccountResponse,
  AccountUpdate,
} from '../types';

/**
 * Accounts resource
 */
export class Accounts {
  constructor(private readonly client: AxiosInstance) {}
	
	/**
   * List accounts
   * Retrieve a list of accounts.
   */
  async list(params?: Record<string, unknown>): Promise<AccountListResponse> {
    const response = await this.client.get<AccountListResponse>(`/accounts`, { params });
    return response.data;
  }
	
	/**
   * Create an account
   * Creates an account.
   */
  async create(data: AccountCreate): Promise<AccountResponse> {
    const response = await this.client.post<AccountResponse>(`/accounts`, data);
    return response.data;
  }
	
	/**
   * Retrieve an account
   * Retrieves an account by ID.
   */
  async retrieve(id: string, params?: Record<string, unknown>): Promise<AccountResponse> {
    const response = await this.client.get<AccountResponse>(`/accounts/${id}`, { params });
    return response.data;
  }
	
	/**
   * Update an account
   * Updates an account.
   */
  async update(id: string, data: AccountUpdate): Promise<AccountResponse> {
    const response = await this.client.put<AccountResponse>(`/accounts/${id}`, data);
    return response.data;
  }
	
	/**
   * Get balances
   * Retrieve credit balances for an account.
   */
  async getBalances(id: string, params?: Record<string, unknown>): Promise<AccountBalancesResponse> {
    const response = await this.client.get<AccountBalancesResponse>(`/accounts/${id}/balances`, { params });
    return response.data;
  }
	
	/**
   * Debit balance
   * Debits an account's balance.
   */
  async debit(id: string, data: AccountDebit): Promise<AccountDebitResponse> {
    const response = await this.client.post<AccountDebitResponse>(`/accounts/${id}/debit`, data);
    return response.data;
  }
	
}
