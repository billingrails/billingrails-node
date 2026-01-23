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
    const response = await this.client.get<PlanListResponse>(`/biller/plans`, { params });
    return response.data;
  }

  /**
   * Create a plan
   * Creates a plan.
   */
  async create(data: PlanCreate): Promise<PlanResponse> {
    const response = await this.client.post<PlanResponse>(`/biller/plans`, data);
    return response.data;
  }

  /**
   * Retrieve a plan
   * Retrieves plan by ID.
   */
  async retrieve(id: string, params?: Record<string, unknown>): Promise<PlanResponse> {
    const response = await this.client.get<PlanResponse>(`/biller/plans/${id}`, { params });
    return response.data;
  }

  /**
   * Update a plan
   * Updates a plan.
   */
  async update(id: string, data: PlanUpdate): Promise<PlanResponse> {
    const response = await this.client.put<PlanResponse>(`/biller/plans/${id}`, data);
    return response.data;
  }

}
