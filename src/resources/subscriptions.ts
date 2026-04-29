// This file is auto-generated. Do not edit manually.

import type { AxiosInstance } from 'axios';
import type {
  CheckoutSessionResponse,
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
   * List subscriptions
   * Retrieves a list of subscriptions.
   */
  async list(params?: Record<string, unknown>): Promise<SubscriptionListResponse> {
    const response = await this.client.get<SubscriptionListResponse>(`/subscriptions`, { params });
    return response.data;
  }
	
	/**
   * Create a subscription
   * Creates a subscription.
   */
  async create(data: SubscriptionCreate): Promise<SubscriptionResponse> {
    const response = await this.client.post<SubscriptionResponse>(`/subscriptions`, data);
    return response.data;
  }
	
	/**
   * Retrieve subscription
   * Retrieves a subscription by ID.
   */
  async retrieve(id: string, params?: Record<string, unknown>): Promise<SubscriptionResponse> {
    const response = await this.client.get<SubscriptionResponse>(`/subscriptions/${id}`, { params });
    return response.data;
  }
	
	/**
   * Update a subscription
   * Updates a subscription.
   */
  async update(id: string, data: SubscriptionCreate): Promise<SubscriptionResponse> {
    const response = await this.client.put<SubscriptionResponse>(`/subscriptions/${id}`, data);
    return response.data;
  }
	
	/**
   * Resume a paused subscription
   * Creates a subscription resumption checkout session, triggers payment, and returns the payment link. The subscription must be paused. Requires an active payment integration (site payment routes or an active integration). The customer is redirected to the payment link to pay the resumption invoice; after payment the subscription becomes active again.
   */
  async resume(id: string, data: unknown): Promise<CheckoutSessionResponse> {
    const response = await this.client.post<CheckoutSessionResponse>(`/subscriptions/${id}/resume`, data);
    return response.data;
  }
	
}
