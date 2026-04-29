// This file is auto-generated. Do not edit manually.

import type { AxiosInstance } from 'axios';
import type {
  PaymentInput,
  PaymentListResponse,
  PaymentResponse,
} from '../types';

/**
 * Payments resource
 */
export class Payments {
  constructor(private readonly client: AxiosInstance) {}
	
	/**
   * List payments
   * Retrieves a list of payments.
   */
  async list(params?: Record<string, unknown>): Promise<PaymentListResponse> {
    const response = await this.client.get<PaymentListResponse>(`/payments`, { params });
    return response.data;
  }
	
	/**
   * Create a payment
   * Create an online or offline payment for an invoice, payment request, or credit grant.
   */
  async create(data: PaymentInput): Promise<unknown> {
    const response = await this.client.post<unknown>(`/payments`, data);
    return response.data;
  }
	
	/**
   * Retrieve payment
   * Retrieves a payment by ID.
   */
  async retrieve(id: string, params?: Record<string, unknown>): Promise<PaymentResponse> {
    const response = await this.client.get<PaymentResponse>(`/payments/${id}`, { params });
    return response.data;
  }
	
}
