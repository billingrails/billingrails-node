// This file is auto-generated. Do not edit manually.

import type { AxiosInstance } from 'axios';
import type {
  CreditGrantCreate,
  CreditGrantListResponse,
  CreditGrantResponse,
} from '../types';

/**
 * Credit grants resource
 */
export class CreditGrants {
  constructor(private readonly client: AxiosInstance) {}

  /**
   * List credit grants
   * Retrieves a list of credit grants.
   */
  async list(): Promise<CreditGrantListResponse> {
    const response = await this.client.get<CreditGrantListResponse>(`/credit_grants`);
    return response.data;
  }

  /**
   * Create a credit grant
   * Creates a credit grant.
   */
  async create(data: CreditGrantCreate): Promise<unknown> {
    const response = await this.client.post<unknown>(`/credit_grants`, data);
    return response.data;
  }

  /**
   * Retrieve a credit grant
   * Retrieves a credit grant by ID.
   */
  async retrieve(id: string, params?: Record<string, unknown>): Promise<CreditGrantResponse> {
    const response = await this.client.get<CreditGrantResponse>(`/credit_grants/${id}`, { params });
    return response.data;
  }

  /**
   * Apply credit grant
   * Applies a credit grant to an invoice or logs an external usage.
   */
  async apply(id: string, data: unknown): Promise<CreditGrantResponse> {
    const response = await this.client.post<CreditGrantResponse>(`/credit_grants/${id}/apply`, data);
    return response.data;
  }

  /**
   * Expire credit grant
   * Expires a credit grant.
   */
  async expire(id: string): Promise<CreditGrantResponse> {
    const response = await this.client.post<CreditGrantResponse>(`/credit_grants/${id}/expire`, {});
    return response.data;
  }

  /**
   * Reverse credit grant transaction
   * Reverses a credit grant usage.
   */
  async reverseTransaction(id: string, data: unknown): Promise<CreditGrantResponse> {
    const response = await this.client.post<CreditGrantResponse>(`/credit_grants/${id}/reverse_transaction`, data);
    return response.data;
  }

}
