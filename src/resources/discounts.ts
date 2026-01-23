// This file is auto-generated. Do not edit manually.

import type { AxiosInstance } from 'axios';
import type {
  DiscountCreate,
  DiscountListResponse,
  DiscountResponse,
  DiscountUpdate,
} from '../types';

/**
 * Discounts resource
 */
export class Discounts {
  constructor(private readonly client: AxiosInstance) {}

  /**
   * List discounts
   * Retrieve a list of discounts.
   */
  async list(params?: Record<string, unknown>): Promise<DiscountListResponse> {
    const response = await this.client.get<DiscountListResponse>(`/discounts`, { params });
    return response.data;
  }

  /**
   * Create a discount
   * Creates a discount.
   */
  async create(data: DiscountCreate): Promise<DiscountResponse> {
    const response = await this.client.post<DiscountResponse>(`/discounts`, data);
    return response.data;
  }

  /**
   * Retrieve discount
   * Retrieves a discount by ID.
   */
  async retrieve(id: string, params?: Record<string, unknown>): Promise<DiscountResponse> {
    const response = await this.client.get<DiscountResponse>(`/discounts/${id}`, { params });
    return response.data;
  }

  /**
   * Update a discount
   * Updates a discount.
   */
  async update(id: string, data: DiscountUpdate): Promise<DiscountResponse> {
    const response = await this.client.put<DiscountResponse>(`/discounts/${id}`, data);
    return response.data;
  }

}
