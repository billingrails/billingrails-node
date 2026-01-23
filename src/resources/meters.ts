// This file is auto-generated. Do not edit manually.

import type { AxiosInstance } from 'axios';
import type {
  MeterCreate,
  MeterListResponse,
  MeterResponse,
  MeterUpdate,
} from '../types';

/**
 * Meters resource
 */
export class Meters {
  constructor(private readonly client: AxiosInstance) {}

  /**
   * List meters
   * Retrieves a list of meters.
   */
  async list(params?: Record<string, unknown>): Promise<MeterListResponse> {
    const response = await this.client.get<MeterListResponse>(`/biller/meters`, { params });
    return response.data;
  }

  /**
   * Create a meter
   * Creates a meter.
   */
  async create(data: MeterCreate): Promise<MeterResponse> {
    const response = await this.client.post<MeterResponse>(`/biller/meters`, data);
    return response.data;
  }

  /**
   * Retrieve a meter
   * Retrieves meter by ID.
   */
  async retrieve(id: string, params?: Record<string, unknown>): Promise<MeterResponse> {
    const response = await this.client.get<MeterResponse>(`/biller/meters/${id}`, { params });
    return response.data;
  }

  /**
   * Update a meter
   * Updates a meter.
   */
  async update(id: string, data: MeterUpdate): Promise<MeterResponse> {
    const response = await this.client.put<MeterResponse>(`/biller/meters/${id}`, data);
    return response.data;
  }

}
