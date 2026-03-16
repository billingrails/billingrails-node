// This file is auto-generated. Do not edit manually.

import type { AxiosInstance } from 'axios';
import type {
  PriceCreate,
  PriceResponse,
  PriceUpdate,
} from '../types';

/**
 * Prices resource
 */
export class Prices {
  constructor(private readonly client: AxiosInstance) {}

  /**
   * Create a price
   * Creates a price.
   */
  async create(data: PriceCreate): Promise<PriceResponse> {
    const response = await this.client.post<PriceResponse>(`/prices`, data);
    return response.data;
  }

  /**
   * Retrieve a price
   * Retrieves a price by ID.
   */
  async retrieve(id: string, params?: Record<string, unknown>): Promise<PriceResponse> {
    const response = await this.client.get<PriceResponse>(`/prices/${id}`, { params });
    return response.data;
  }

  /**
   * Update a price
   * Updates a price by ID.
   */
  async update(id: string, data: PriceUpdate): Promise<PriceResponse> {
    const response = await this.client.put<PriceResponse>(`/prices/${id}`, data);
    return response.data;
  }

  /**
   * Delete a price
   * Deletes a price by ID.
   */
  async delete(id: string): Promise<unknown> {
    const response = await this.client.delete<unknown>(`/prices/${id}`);
    return response.data;
  }

  /**
   * Archive a price
   * Archives a price, making it inactive for new subscriptions.
   */
  async archive(id: string): Promise<PriceResponse> {
    const response = await this.client.post<PriceResponse>(`/prices/${id}/archive`, {});
    return response.data;
  }

  /**
   * Unarchive a price
   * Restores an archived price to active status.
   */
  async undoArchive(id: string): Promise<PriceResponse> {
    const response = await this.client.post<PriceResponse>(`/prices/${id}/unarchive`, {});
    return response.data;
  }

}
