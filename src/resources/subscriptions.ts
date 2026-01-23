// This file is auto-generated. Do not edit manually.

import type { AxiosInstance } from 'axios';
import type {
  SubscriptionCreate,
  SubscriptionListResponse,
  SubscriptionResponse,
} from '../types';

/**
 * Subscriptions resource
 */
export class Subscriptions {
  constructor(private readonly client: AxiosInstance) {}

  /**
   * Retrieve subscription
   * Retrieves a subscription by ID.
   */
  async retrieve(id: string, params?: Record<string, unknown>): Promise<SubscriptionResponse> {
    const response = await this.client.get<SubscriptionResponse>(`/biller/subscriptions/${id}`, { params });
    return response.data;
  }

  /**
   * Update a subscription
   * Updates a subscription.
   */
  async update(id: string, data: SubscriptionCreate): Promise<SubscriptionResponse> {
    const response = await this.client.put<SubscriptionResponse>(`/biller/subscriptions/${id}`, data);
    return response.data;
  }

  /**
   * List subscriptions
   * Retrieves a list of subscriptions.
   */
  async list(params?: Record<string, unknown>): Promise<SubscriptionListResponse> {
    const response = await this.client.get<SubscriptionListResponse>(`/biller/subscriptions`, { params });
    return response.data;
  }

  /**
   * Create a subscription
   * Creates a subscription.
   */
  async create(data: SubscriptionCreate): Promise<SubscriptionResponse> {
    const response = await this.client.post<SubscriptionResponse>(`/biller/subscriptions`, data);
    return response.data;
  }

}
