// This file is auto-generated. Do not edit manually.

export interface EventInput {
  /** Properties associated with the event. */
  properties: Record<string, unknown>;
  /** Timestamp indicating the occurrence of the event. */
  timestamp?: string;
  /** The name of the event. */
  event_name: string;
  /** Unique identifier for this event. */
  idempotency_key?: string;
}
