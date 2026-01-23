// This file is auto-generated. Do not edit manually.

import type { AxiosInstance } from 'axios';
import type {
  OrderCreate,
  OrderListResponse,
  OrderResponse,
  OrderUpdate,
} from '../types';

/**
 * Orders resource
 */
export class Orders {
  constructor(private readonly client: AxiosInstance) {}

  /**
   * List orders
   * Retrieves a list of orders.
   */
  async list(params?: Record<string, unknown>): Promise<OrderListResponse> {
    const response = await this.client.get<OrderListResponse>(`/seller/orders`, { params });
    return response.data;
  }

  /**
   * Create an order
   * Creates an order.
   */
  async create(data: OrderCreate): Promise<OrderResponse> {
    const response = await this.client.post<OrderResponse>(`/seller/orders`, data);
    return response.data;
  }

  /**
   * Retrieve an order
   * Retrieves an order by ID.
   */
  async retrieve(id: string, params?: Record<string, unknown>): Promise<OrderResponse> {
    const response = await this.client.get<OrderResponse>(`/seller/orders/${id}`, { params });
    return response.data;
  }

  /**
   * Update an order
   * Updates an order.
   */
  async update(id: string, data: OrderUpdate): Promise<OrderResponse> {
    const response = await this.client.put<OrderResponse>(`/seller/orders/${id}`, data);
    return response.data;
  }

  /**
   * Cancel an order
   * Cancels an order.
   */
  async cancel(id: string): Promise<unknown> {
    const response = await this.client.post<unknown>(`/seller/orders/${id}/cancel`, {});
    return response.data;
  }

}
