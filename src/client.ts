import type { AxiosInstance, AxiosRequestConfig } from 'axios';
import axios from 'axios';
import { handleApiError } from './errors';
import { Accounts } from './resources/accounts';
import { CheckoutSessions } from './resources/checkout-sessions';
import { CreditGrants } from './resources/credit-grants';
import { Discounts } from './resources/discounts';
import { Events } from './resources/events';
import { Fees } from './resources/fees';
import { Invoices } from './resources/invoices';
import { Meters } from './resources/meters';
import { PaymentLinks } from './resources/payment-links';
import { Payments } from './resources/payments';
import { Plans } from './resources/plans';
import { Prices } from './resources/prices';
import { Subscriptions } from './resources/subscriptions';
import { TaxRates } from './resources/tax-rates';


/**
 * Configuration options for the Billingrails client
 */
export interface BillingrailsConfig {
  /** API key for authentication */
  apiKey: string;
  /** Base URL for the API (defaults to sandbox) */
  baseUrl?: string;
  /** Request timeout in milliseconds */
  timeout?: number;
  /** Maximum number of retries for failed requests */
  maxRetries?: number;
  /** Additional axios configuration */
  axiosConfig?: AxiosRequestConfig;
}

/**
 * Main Billingrails SDK client
 */
export class Billingrails {
  private readonly client: AxiosInstance;
  private readonly maxRetries: number;

  public readonly accounts: Accounts;
  public readonly invoices: Invoices;
  public readonly payments: Payments;
  public readonly paymentLinks: PaymentLinks;
  public readonly checkoutSessions: CheckoutSessions;
  
  public readonly subscriptions: Subscriptions;
  public readonly plans: Plans;
  public readonly fees: Fees;
  public readonly prices: Prices;
  public readonly events: Events;
  public readonly meters: Meters;
  
  public readonly creditGrants: CreditGrants;
  public readonly discounts: Discounts;
  public readonly taxRates: TaxRates;

  constructor(config: BillingrailsConfig) {
    const {
      apiKey,
      baseUrl = 'https://api.sandbox.billingrails.com/v1',
      timeout = 30000,
      maxRetries = 3,
      axiosConfig = {},
    } = config;

    if (!apiKey) {
      throw new Error('API key is required');
    }

    this.maxRetries = maxRetries;

    // Create axios instance
    this.client = axios.create({
      baseURL: baseUrl,
      timeout,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      ...axiosConfig,
    });

    // Request interceptor
    this.client.interceptors.request.use(
      (config) => {
        // You can add custom logic here (e.g., logging)
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // Response interceptor
    this.client.interceptors.response.use(
      (response) => response,
      async (error) => {
        // Handle retries for specific status codes
        const config = error.config;
        const retryCount = config.__retryCount || 0;

        if (
          retryCount < this.maxRetries &&
          error.response?.status &&
          [429, 500, 502, 503, 504].includes(error.response.status)
        ) {
          config.__retryCount = retryCount + 1;

          // Exponential backoff
          const delay = Math.min(1000 * 2 ** retryCount, 10000);
          await new Promise((resolve) => setTimeout(resolve, delay));

          return this.client(config);
        }

        throw handleApiError(error);
      }
    );

    // Initialize resources
    this.accounts = new Accounts(this.client);
    this.invoices = new Invoices(this.client);
    this.payments = new Payments(this.client);
    this.paymentLinks = new PaymentLinks(this.client);
    this.checkoutSessions = new CheckoutSessions(this.client);

    this.subscriptions = new Subscriptions(this.client);
    this.plans = new Plans(this.client);
    this.fees = new Fees(this.client);
    this.prices = new Prices(this.client);
    this.events = new Events(this.client);
    this.meters = new Meters(this.client);
  

    this.creditGrants = new CreditGrants(this.client);
    this.discounts = new Discounts(this.client);
    this.taxRates = new TaxRates(this.client)
  }

  /**
   * Get the underlying axios instance for advanced usage
   */
  public getClient(): AxiosInstance {
    return this.client;
  }
}
