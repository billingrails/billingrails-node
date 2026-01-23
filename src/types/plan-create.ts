// This file is auto-generated. Do not edit manually.

import type { FeeInput, PlanInput } from './index';

export interface PlanCreate extends PlanInput {
  /** Internal identifier of the plan. */
  code: string;
  /** Fees associated with the plan. */
  fees?: FeeInput[];
}
