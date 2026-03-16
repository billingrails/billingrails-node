// This file is auto-generated. Do not edit manually.

export interface Error {
  type: string;
  code: 'internal_server_error' | 'too_many_requests' | 'method_not_allowed' | 'invalid_request_url' | 'unauthorized' | 'forbidden' | 'validation_error' | 'not_found';
  /** Field specific error details. */
  details?: { field: string; message: string; }[];
  message: string;
}
