// This file is auto-generated. Do not edit manually.

export interface EventInput {
  /** The name of the event. */
  event_name: string;
  /** Properties associated with the event. */
  properties: Record<string, unknown>;
  /** Unique identifier for this event. */
  idempotency_key?: string;
  /** Timestamp indicating the occurrence of the event. */
  timestamp?: string;
}
