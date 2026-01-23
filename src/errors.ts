import type { AxiosError } from 'axios';
import type { ApiError } from './types';

/**
 * Custom error class for Billingrails API errors
 */
export class BillingrailsError extends Error {
  public readonly type: string;
  public readonly code: string;
  public readonly statusCode?: number;
  public readonly details?: unknown;

  constructor(error: ApiError, statusCode?: number) {
    super(error.message);
    this.name = 'BillingrailsError';
    this.type = error.type;
    this.code = error.code;
    this.statusCode = statusCode;
    this.details = error.details;

    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, BillingrailsError);
    }
  }
}

/**
 * Parse axios error and return a BillingrailsError
 */
export function handleApiError(error: AxiosError): BillingrailsError {
  if (error.response?.data) {
    const apiError = error.response.data as ApiError;
    return new BillingrailsError(apiError, error.response.status);
  }

  // Network or other errors
  return new BillingrailsError(
    {
      type: 'network_error',
      code: 'network_error',
      message: error.message || 'An unknown error occurred',
    },
    error.response?.status
  );
}
