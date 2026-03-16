// This file is auto-generated. Do not edit manually.

import type { AxiosInstance } from 'axios';
import type {
  CheckoutSessionCreate,
  CheckoutSessionResponse,
  CheckoutSessionUpdate,
} from '../types';

/**
 * Checkout sessions resource
 */
export class CheckoutSessions {
  constructor(private readonly client: AxiosInstance) {}

  /**
   * Create a checkout session
   * Creates a checkout session for processing payments.
   */
  async create(data: CheckoutSessionCreate): Promise<CheckoutSessionResponse> {
    const response = await this.client.post<CheckoutSessionResponse>(`/checkout_sessions`, data);
    return response.data;
  }

  /**
   * Retrieve a checkout session
   * Retrieves a checkout session by ID.
   */
  async retrieve(id: string, params?: Record<string, unknown>): Promise<CheckoutSessionResponse> {
    const response = await this.client.get<CheckoutSessionResponse>(`/checkout_sessions/${id}`, { params });
    return response.data;
  }

  /**
   * Update a checkout session
   * Updates a checkout session.
   */
  async update(id: string, data: CheckoutSessionUpdate): Promise<CheckoutSessionResponse> {
    const response = await this.client.put<CheckoutSessionResponse>(`/checkout_sessions/${id}`, data);
    return response.data;
  }

}
