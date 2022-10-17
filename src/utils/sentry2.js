import * as Sentry from "@sentry/react";
import { Integrations, BrowserTracing } from "@sentry/tracing";
import { BrowserClient, Hub, Breadcrumb, Severity } from '@sentry/browser';

const client = new BrowserClient({
  dsn: `https://1d554222ce864327bb9aab690b3cf24f@o139930.ingest.sentry.io/6164735`,
  environment: `development`,
  integrations: [new BrowserTracing()],
  tracesSampleRate: 1,
});

const hub = new Hub(client);
export const sentry = hub;