import * as Sentry from "@sentry/react";
import { Integrations, BrowserTracing } from "@sentry/tracing";

const sentry = Sentry.init({
  dsn: "https://1d554222ce864327bb9aab690b3cf24f@o139930.ingest.sentry.io/6164735",
  integrations: [new BrowserTracing({
    tracingOrigins: ['localhost', 'jsonplaceholder.typicode.com']
  })],
  environment: "development",
  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

export default sentry;

// 针对error类型的资源加载错误
window.addEventListener(
  "error",
  function (e) {
    var typeName = e?.target?.localName;
    Sentry.captureMessage(`${typeName} Load Failed`);
    Sentry.captureException(e);
  },
  true
);
