// This file is auto-generated. Do not edit manually.

export interface MeterProfile {
  /** ID of the profile. */
  id?: string;
  /** Name of the meter profile. */
  name: string;
  /** Code identifier of the meter profile. */
  code: string;
  /** Defines if the meter is persisted billing period over billing period. */
  recurring: boolean;
  /** Specifies the method for aggregating matching events. */
  aggregation_method: 'sum' | 'count' | 'count_unique' | 'min' | 'max' | 'latest';
  /** A key that specifies which event property is used to aggregate data. Not required for `count` aggregation method. */
  aggregation_property?: string;
  /** Time window for aggregation. */
  aggregation_time_window?: 'hour' | 'day';
  /** Filters to apply to events for this profile. */
  filters?: { operator: 'in' | 'not_in' | 'greater_than' | 'less_than' | 'greater_than_or_equal_to' | 'less_than_or_equal_to' | 'is_null' | 'is_not_null'; property: string; value: string; }[];
}
