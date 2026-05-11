// This file is auto-generated. Do not edit manually.

import type { AxiosInstance } from 'axios';
import type {
  ProductCreate,
  ProductListResponse,
  ProductResponse,
  ProductUpdate,
} from '../types';

/**
 * Products resource
 */
export class Products {
  constructor(private readonly client: AxiosInstance) {}
	
	/**
   * List products
   * Retrieves a list of products.
   */
  async list(params?: Record<string, unknown>): Promise<ProductListResponse> {
    const response = await this.client.get<ProductListResponse>(`/products`, { params });
    return response.data;
  }
	
	/**
   * Create a product
   * Creates a product.
   */
  async create(data: ProductCreate): Promise<ProductResponse> {
    const response = await this.client.post<ProductResponse>(`/products`, data);
    return response.data;
  }
	
	/**
   * Retrieve a product
   * Retrieves product by ID.
   */
  async retrieve(id: string, params?: Record<string, unknown>): Promise<ProductResponse> {
    const response = await this.client.get<ProductResponse>(`/products/${id}`, { params });
    return response.data;
  }
	
	/**
   * Update a product
   * Updates a product.
   */
  async update(id: string, data: ProductUpdate): Promise<ProductResponse> {
    const response = await this.client.patch<ProductResponse>(`/products/${id}`, data);
    return response.data;
  }
	
	/**
   * Delete a product
   * Deletes a product when it is not used in any subscription and not referenced on invoices.
   */
  async delete(id: string): Promise<unknown> {
    const response = await this.client.delete<unknown>(`/products/${id}`);
    return response.data;
  }
	
	/**
   * Archive a product
   * Archives a product.
   */
  async archive(id: string): Promise<ProductResponse> {
    const response = await this.client.post<ProductResponse>(`/products/${id}/archive`, {});
    return response.data;
  }
	
	/**
   * Unarchive a product
   * Restores an archived product.
   */
  async unarchive(id: string): Promise<ProductResponse> {
    const response = await this.client.post<ProductResponse>(`/products/${id}/unarchive`, {});
    return response.data;
  }
	
}
