// This file is auto-generated. Do not edit manually.

import type { MeterProfile } from './index';

export interface Meter {
  /** Represents the object's type. */
  object?: 'meter';
  /** ID of the object. */
  id?: string;
  /** Name of the meter. */
  name?: string;
  /** The name of the event to record usage for. */
  event_name?: string;
  /** Internal description of the meter. */
  description?: string;
  /** Status of the meter. */
  status?: 'active' | 'inactive';
  /** Defines the connection between event data and Billingrails accounts. */
  account_mapping?: { type: 'id' | 'email' | 'external_id'; event_property: string; };
  /** Timestamp indicating when the object was created. */
  created_at?: string;
  /** The default meter profile. */
  default_profile?: MeterProfile;
  /** Meter profiles define aggregation behaviors for a meter. */
  profiles?: MeterProfile[];
}
