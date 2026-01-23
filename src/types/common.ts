// This file is auto-generated. Do not edit manually.
     
     /**
      * Common types used across the SDK
      */

      export interface ListResponse {
        meta: {
          page: number;
          page_size: number;
          total_pages: number;
          total_count: number;
        };
      }

      export interface Response {
      }

      export interface ApiErrorDetails {
        field?: string;
        message?: string;
      }

      export interface ApiError {
        type: string;
        code: string;
        message: string;
        details?: ApiErrorDetails[];
      }
      