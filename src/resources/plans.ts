// This file is auto-generated. Do not edit manually.

import type { AxiosInstance } from 'axios';
import type {
  PlanCreate,
  PlanListResponse,
  PlanResponse,
  PlanUpdate,
} from '../types';

/**
 * Plans resource
 */
export class Plans {
  constructor(private readonly client: AxiosInstance) {}
	
	/**
   * List plans
   * Retrieves a list of plans.
   */
  async list(params?: Record<string, unknown>): Promise<PlanListResponse> {
    const response = await this.client.get<PlanListResponse>(`/plans`, { params });
    return response.data;
  }
	
	/**
   * Create a plan
   * Creates a plan.
   */
  async create(data: PlanCreate): Promise<PlanResponse> {
    const response = await this.client.post<PlanResponse>(`/plans`, data);
    return response.data;
  }
	
	/**
   * Retrieve a plan
   * Retrieves a plan by ID.
   */
  async retrieve(id: string, params?: Record<string, unknown>): Promise<PlanResponse> {
    const response = await this.client.get<PlanResponse>(`/plans/${id}`, { params });
    return response.data;
  }
	
	/**
   * Update a plan
   * Updates a plan.
   */
  async update(id: string, data: PlanUpdate): Promise<PlanResponse> {
    const response = await this.client.put<PlanResponse>(`/plans/${id}`, data);
    return response.data;
  }
	
	/**
   * Delete a plan
   * Deletes a plan.
   */
  async delete(id: string): Promise<unknown> {
    const response = await this.client.delete<unknown>(`/plans/${id}`);
    return response.data;
  }
	
	/**
   * Archive a plan
   * Archives a plan.
   */
  async archive(id: string): Promise<PlanResponse> {
    const response = await this.client.post<PlanResponse>(`/plans/${id}/archive`, {});
    return response.data;
  }
	
	/**
   * Unarchive a plan
   * Restores an archived plan.
   */
  async unarchive(id: string): Promise<PlanResponse> {
    const response = await this.client.post<PlanResponse>(`/plans/${id}/unarchive`, {});
    return response.data;
  }
	
	/**
   * Duplicate a plan
   * Creates a new plan with the same attributes and items. The new plan's origin_id is set to the source plan.
   */
  async duplicate(id: string): Promise<PlanResponse> {
    const response = await this.client.post<PlanResponse>(`/plans/${id}/duplicate`, {});
    return response.data;
  }
	
}
