// import * as Sentry from "@sentry/react";
// import { Integrations } from "@sentry/tracing";

function init() {
  // Sentry.init({
  //   dsn:
  //     "https://aa3338517c554b61845baa74c59d5cbd@o497381.ingest.sentry.io/5573407",
  //   autoSessionTracking: true,
  //   integrations: [new Integrations.BrowserTracing()],
  //   // We recommend adjusting this value in production, or using tracesSampler
  //   // for finer control
  //   tracesSampleRate: 1.0,
  // });
}
function log(error) {
  console.log(error);
}

export default {
  init,
  log,
};
