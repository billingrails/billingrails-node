import type { AxiosError } from 'axios';

/** Base class for all Billingrails SDK errors. */
export class BillingrailsError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'BillingrailsError';
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, new.target);
    }
  }
}

/** Network or transport failure without a normal API error body. */
export class BillingrailsConnectionError extends BillingrailsError {
  constructor(message: string) {
    super(message);
    this.name = 'BillingrailsConnectionError';
  }
}

/**
 * API error with structured fields.
 * Not the OpenAPI `ApiError` interface from `./types`.
 */
export class BillingrailsApiError extends BillingrailsError {
  public readonly statusCode?: number;
  public readonly code?: string;
  public readonly type?: string;
  public readonly details?: unknown;

  constructor(
    message: string,
    options?: { statusCode?: number; code?: string; type?: string; details?: unknown }
  ) {
    super(message);
    this.name = 'BillingrailsApiError';
    this.statusCode = options?.statusCode;
    this.code = options?.code;
    this.type = options?.type;
    this.details = options?.details;
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, new.target);
    }
  }
}

export class BillingrailsInvalidRequestError extends BillingrailsApiError {
  constructor(
    message: string,
    options?: { statusCode?: number; code?: string; type?: string; details?: unknown }
  ) {
    super(message, options);
    this.name = 'BillingrailsInvalidRequestError';
  }
}

export class BillingrailsAuthenticationError extends BillingrailsApiError {
  constructor(
    message: string,
    options?: { statusCode?: number; code?: string; type?: string; details?: unknown }
  ) {
    super(message, options);
    this.name = 'BillingrailsAuthenticationError';
  }
}

export class BillingrailsNotFoundError extends BillingrailsApiError {
  constructor(
    message: string,
    options?: { statusCode?: number; code?: string; type?: string; details?: unknown }
  ) {
    super(message, options);
    this.name = 'BillingrailsNotFoundError';
  }
}

export class BillingrailsRateLimitError extends BillingrailsApiError {
  constructor(
    message: string,
    options?: { statusCode?: number; code?: string; type?: string; details?: unknown }
  ) {
    super(message, options);
    this.name = 'BillingrailsRateLimitError';
  }
}

export class BillingrailsServerError extends BillingrailsApiError {
  constructor(
    message: string,
    options?: { statusCode?: number; code?: string; type?: string; details?: unknown }
  ) {
    super(message, options);
    this.name = 'BillingrailsServerError';
  }
}

function parseErrorPayload(data: unknown): {
  message: string;
  code?: string;
  type?: string;
  details?: unknown;
} {
  if (data === null || data === undefined || typeof data !== 'object') {
    return { message: 'Unknown error' };
  }
  const d = data as Record<string, unknown>;
  const message =
    typeof d.message === 'string' && d.message.length > 0 ? d.message : 'Unknown error';

  const nested = d.error;
  if (nested !== null && nested !== undefined && typeof nested === 'object' && !Array.isArray(nested)) {
    const e = nested as Record<string, unknown>;
    return {
      message,
      code: e.code !== undefined ? String(e.code) : d.code !== undefined ? String(d.code) : undefined,
      type: e.type !== undefined ? String(e.type) : d.type !== undefined ? String(d.type) : undefined,
      details: e.details !== undefined ? e.details : d.details,
    };
  }

  return {
    message,
    code: d.code !== undefined ? String(d.code) : undefined,
    type: d.type !== undefined ? String(d.type) : undefined,
    details: d.details,
  };
}

/** HTTP status codes the SDK may retry (same across Billingrails SDKs). */
export const RETRYABLE_HTTP_STATUSES = [429, 500, 502, 503, 504] as const;

export function shouldRetryStatus(status: number): boolean {
  return (RETRYABLE_HTTP_STATUSES as readonly number[]).includes(status);
}

/** Build the appropriate error for an HTTP status and response body. */
export function billingrailsErrorFromResponse(status: number, data: unknown): BillingrailsApiError {
  const parsed = parseErrorPayload(data);
  const opts = {
    statusCode: status,
    code: parsed.code,
    type: parsed.type,
    details: parsed.details,
  };

  switch (status) {
    case 400:
      return new BillingrailsInvalidRequestError(parsed.message, opts);
    case 401:
      return new BillingrailsAuthenticationError(parsed.message, opts);
    case 404:
      return new BillingrailsNotFoundError(parsed.message, opts);
    case 429:
      return new BillingrailsRateLimitError(parsed.message, opts);
    default:
      if (status >= 500 && status <= 599) {
        return new BillingrailsServerError(parsed.message, opts);
      }
      return new BillingrailsApiError(parsed.message, opts);
  }
}

/** Map an axios failure to a Billingrails error (status-specific subclasses when possible). */
export function handleApiError(error: AxiosError): BillingrailsError {
  const status = error.response?.status;
  const body = error.response?.data;

  if (status !== undefined) {
    return billingrailsErrorFromResponse(status, body);
  }

  return new BillingrailsConnectionError(error.message || 'Failed to connect to the Billingrails API');
}
