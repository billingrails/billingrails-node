// This file is auto-generated. Do not edit manually.

import type { AxiosInstance } from 'axios';
import type {
  PaymentLinkCreate,
  PaymentLinkListResponse,
  PaymentLinkResponse,
  PaymentLinkUpdate,
} from '../types';

/**
 * Payment links resource
 */
export class PaymentLinks {
  constructor(private readonly client: AxiosInstance) {}
	
	/**
   * List payment links
   * Retrieves a list of payment links.
   */
  async list(params?: Record<string, unknown>): Promise<PaymentLinkListResponse> {
    const response = await this.client.get<PaymentLinkListResponse>(`/payment_links`, { params });
    return response.data;
  }
	
	/**
   * Create payment link
   * Creates a new payment link.
   */
  async create(data: PaymentLinkCreate): Promise<PaymentLinkResponse> {
    const response = await this.client.post<PaymentLinkResponse>(`/payment_links`, data);
    return response.data;
  }
	
	/**
   * Retrieve payment link
   * Retrieves a payment link by ID.
   */
  async retrieve(id: string, params?: Record<string, unknown>): Promise<PaymentLinkResponse> {
    const response = await this.client.get<PaymentLinkResponse>(`/payment_links/${id}`, { params });
    return response.data;
  }
	
	/**
   * Update payment link
   * Updates a payment link.
   */
  async update(id: string, data: PaymentLinkUpdate): Promise<PaymentLinkResponse> {
    const response = await this.client.put<PaymentLinkResponse>(`/payment_links/${id}`, data);
    return response.data;
  }
	
}
