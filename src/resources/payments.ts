// This file is auto-generated. Do not edit manually.

import type { AxiosInstance } from 'axios';
import type {
  PaymentInput,
} from '../types';

/**
 * Payments resource
 */
export class Payments {
  constructor(private readonly client: AxiosInstance) {}

  /**
   * Create a payment
   * Create an online or offline payment for an invoice, order, payment request, or credit grant.
   */
  async create(data: PaymentInput): Promise<unknown> {
    const response = await this.client.post<unknown>(`/payments`, data);
    return response.data;
  }

}
