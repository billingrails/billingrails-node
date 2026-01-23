// This file is auto-generated. Do not edit manually.

import type { MeterProfile } from './index';

export interface MeterInput {
  /** Internal description of the meter. */
  description?: string;
  /** Defines the connection between event data and Billingrails accounts. */
  account_mapping?: { type: 'id' | 'email' | 'external_id'; event_property: string; };
  /** Meter profiles define aggregation behaviors for a meter. */
  profiles?: MeterProfile[];
  /** Name of the meter. */
  name?: string;
  /** The name of the event to track usage for. */
  event_name?: string;
}
