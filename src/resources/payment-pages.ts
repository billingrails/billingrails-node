// This file is auto-generated. Do not edit manually.

import type { AxiosInstance } from 'axios';
import type {
  PaymentPageCreate,
  PaymentPageListResponse,
  PaymentPageResponse,
  PaymentPageUpdate,
} from '../types';

/**
 * Payment pages resource
 */
export class PaymentPages {
  constructor(private readonly client: AxiosInstance) {}

  /**
   * List payment pages
   * Retrieves a list of payment pages.
   */
  async list(params?: Record<string, unknown>): Promise<PaymentPageListResponse> {
    const response = await this.client.get<PaymentPageListResponse>(`/payment_pages`, { params });
    return response.data;
  }

  /**
   * Create payment page
   * Creates a new payment page.
   */
  async create(data: PaymentPageCreate): Promise<PaymentPageResponse> {
    const response = await this.client.post<PaymentPageResponse>(`/payment_pages`, data);
    return response.data;
  }

  /**
   * Retrieve payment page
   * Retrieves a payment page by ID.
   */
  async retrieve(id: string, params?: Record<string, unknown>): Promise<PaymentPageResponse> {
    const response = await this.client.get<PaymentPageResponse>(`/payment_pages/${id}`, { params });
    return response.data;
  }

  /**
   * Update payment page
   * Updates a payment page.
   */
  async update(id: string, data: PaymentPageUpdate): Promise<PaymentPageResponse> {
    const response = await this.client.put<PaymentPageResponse>(`/payment_pages/${id}`, data);
    return response.data;
  }

}
