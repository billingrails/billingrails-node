// This file is auto-generated. Do not edit manually.

import type { AxiosInstance } from 'axios';
import type {
  ChargeResponse,
} from '../types';

/**
 * Charges resource
 */
export class Charges {
  constructor(private readonly client: AxiosInstance) {}
	
	/**
   * Settle a charge
   * Marks a charge in `ready` status as settled. Typically used when confirming usage outside automatic credit settlement.
   */
  async settle(id: string): Promise<ChargeResponse> {
    const response = await this.client.post<ChargeResponse>(`/charges/${id}/settle`, {});
    return response.data;
  }
	
	/**
   * Discard a charge
   * Discards a `ready`charge.
   */
  async discard(id: string): Promise<ChargeResponse> {
    const response = await this.client.delete<ChargeResponse>(`/charges/${id}`);
    return response.data;
  }
	
}
