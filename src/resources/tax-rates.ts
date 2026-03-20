// This file is auto-generated. Do not edit manually.

import type { AxiosInstance } from 'axios';
import type {
  TaxRateCreate,
  TaxRateListResponse,
  TaxRateResponse,
  TaxRateUpdate,
} from '../types';

/**
 * Tax rates resource
 */
export class TaxRates {
  constructor(private readonly client: AxiosInstance) {}

  /**
   * List tax rates
   * Retrieve a list of tax rates.
   */
  async list(params?: Record<string, unknown>): Promise<TaxRateListResponse> {
    const response = await this.client.get<TaxRateListResponse>(`/tax_rates`, { params });
    return response.data;
  }

  /**
   * Create a tax rate
   * Creates a tax rate.
   */
  async create(data: TaxRateCreate): Promise<TaxRateResponse> {
    const response = await this.client.post<TaxRateResponse>(`/tax_rates`, data);
    return response.data;
  }

  /**
   * Retrieve tax rate
   * Retrieves a tax rate by ID.
   */
  async retrieve(id: string, params?: Record<string, unknown>): Promise<TaxRateResponse> {
    const response = await this.client.get<TaxRateResponse>(`/tax_rates/${id}`, { params });
    return response.data;
  }

  /**
   * Update a tax rate
   * Updates a tax rate.
   */
  async update(id: string, data: TaxRateUpdate): Promise<TaxRateResponse> {
    const response = await this.client.put<TaxRateResponse>(`/tax_rates/${id}`, data);
    return response.data;
  }

  /**
   * Delete a tax rate
   * Deletes a tax rate.
   */
  async delete(id: string): Promise<unknown> {
    const response = await this.client.delete<unknown>(`/tax_rates/${id}`);
    return response.data;
  }

  /**
   * Archive a tax rate
   * Archives a tax rate.
   */
  async archive(id: string): Promise<TaxRateResponse> {
    const response = await this.client.post<TaxRateResponse>(`/tax_rates/${id}/archive`, {});
    return response.data;
  }

}
