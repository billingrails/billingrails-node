// This file is auto-generated. Do not edit manually.

import type { AxiosInstance } from 'axios';
import type {
  InvoiceCreate,
  InvoiceListResponse,
  InvoiceResponse,
  InvoiceUpdate,
} from '../types';

/**
 * Invoices resource
 */
export class Invoices {
  constructor(private readonly client: AxiosInstance) {}

  /**
   * List invoices
   * Retrieves a list of invoices.
   */
  async list(params?: Record<string, unknown>): Promise<InvoiceListResponse> {
    const response = await this.client.get<InvoiceListResponse>(`/invoices`, { params });
    return response.data;
  }

  /**
   * Create an invoice
   * Creates an invoice.
   */
  async create(data: InvoiceCreate): Promise<InvoiceResponse> {
    const response = await this.client.post<InvoiceResponse>(`/invoices`, data);
    return response.data;
  }

  /**
   * Retrieve invoice
   * Retrieves an invoice by ID.
   */
  async retrieve(id: string, params?: Record<string, unknown>): Promise<InvoiceResponse> {
    const response = await this.client.get<InvoiceResponse>(`/invoices/${id}`, { params });
    return response.data;
  }

  /**
   * Update an invoice
   * Updates an invoice.
   */
  async update(id: string, data: InvoiceUpdate): Promise<InvoiceResponse> {
    const response = await this.client.put<InvoiceResponse>(`/invoices/${id}`, data);
    return response.data;
  }

  /**
   * Issue an invoice
   * Issues an invoice.
   */
  async issue(id: string, data: unknown): Promise<unknown> {
    const response = await this.client.post<unknown>(`/invoices/${id}/issue`, data);
    return response.data;
  }

}
