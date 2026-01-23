// This file is auto-generated. Do not edit manually.

export interface Event {
  /** Properties associated with the event. */
  properties?: Record<string, unknown>;
  /** Timestamp indicating the occurrence of the event. */
  timestamp?: string;
  /** Unique identifier for this event. */
  idempotency_key?: string;
  /** Represents the object's type. */
  object?: 'event';
  /** ID of the object. */
  id?: string;
  /** The name of the event. */
  event_name?: string;
}
