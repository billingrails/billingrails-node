// This file is auto-generated. Do not edit manually.

import type { AxiosInstance } from 'axios';
import type {
  FeeCreate,
  FeeListResponse,
  FeeResponse,
  FeeUpdate,
} from '../types';

/**
 * Fees resource
 */
export class Fees {
  constructor(private readonly client: AxiosInstance) {}

  /**
   * Retrieve fee
   * Retrieves a fee by ID.
   */
  async retrieve(id: string, params?: Record<string, unknown>): Promise<FeeResponse> {
    const response = await this.client.get<FeeResponse>(`/biller/fees/${id}`, { params });
    return response.data;
  }

  /**
   * Update a fee
   * Updates a fee.
   */
  async update(id: string, data: FeeUpdate): Promise<FeeResponse> {
    const response = await this.client.put<FeeResponse>(`/biller/fees/${id}`, data);
    return response.data;
  }

  /**
   * Delete a fee
   * Deletes a fee.
   */
  async delete(id: string): Promise<unknown> {
    const response = await this.client.delete<unknown>(`/biller/fees/${id}`);
    return response.data;
  }

  /**
   * List fees
   * Retrieve a list of fees.
   */
  async list(): Promise<FeeListResponse> {
    const response = await this.client.get<FeeListResponse>(`/biller/fees`);
    return response.data;
  }

  /**
   * Create a fee
   * Creates a fee.
   */
  async create(data: FeeCreate): Promise<FeeResponse> {
    const response = await this.client.post<FeeResponse>(`/biller/fees`, data);
    return response.data;
  }

}
