// This file is auto-generated. Do not edit manually.

import type { AxiosInstance } from 'axios';
import type {
  CreditAssetCreate,
  CreditAssetListResponse,
  CreditAssetResponse,
  CreditAssetUpdate,
} from '../types';

/**
 * Credit assets resource
 */
export class CreditAssets {
  constructor(private readonly client: AxiosInstance) {}
	
	/**
   * List credit assets
   * Retrieves a list of credit assets.
   */
  async list(params?: Record<string, unknown>): Promise<CreditAssetListResponse> {
    const response = await this.client.get<CreditAssetListResponse>(`/credit_assets`, { params });
    return response.data;
  }
	
	/**
   * Create a credit asset
   * Creates a credit asset.
   */
  async create(data: CreditAssetCreate): Promise<CreditAssetResponse> {
    const response = await this.client.post<CreditAssetResponse>(`/credit_assets`, data);
    return response.data;
  }
	
	/**
   * Retrieve a credit asset
   * Retrieves a credit asset by ID or code.
   */
  async retrieve(id: string, params?: Record<string, unknown>): Promise<CreditAssetResponse> {
    const response = await this.client.get<CreditAssetResponse>(`/credit_assets/${id}`, { params });
    return response.data;
  }
	
	/**
   * Update a credit asset
   * Updates a credit asset.
   */
  async update(id: string, data: CreditAssetUpdate): Promise<CreditAssetResponse> {
    const response = await this.client.patch<CreditAssetResponse>(`/credit_assets/${id}`, data);
    return response.data;
  }
	
}
