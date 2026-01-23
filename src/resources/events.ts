// This file is auto-generated. Do not edit manually.

import type { AxiosInstance } from 'axios';
import type {
  EventBatchInput,
  EventInput,
} from '../types';

/**
 * Events resource
 */
export class Events {
  constructor(private readonly client: AxiosInstance) {}

  /**
   * Ingest batch events
   * Ingests batch events.
   */
  async ingestBatch(data: EventBatchInput): Promise<unknown> {
    const response = await this.client.post<unknown>(`/biller/events/batch`, data);
    return response.data;
  }

  /**
   * Ingest event
   * Ingests an event.
   */
  async ingest(data: EventInput): Promise<unknown> {
    const response = await this.client.post<unknown>(`/biller/events/ingest`, data);
    return response.data;
  }

}
