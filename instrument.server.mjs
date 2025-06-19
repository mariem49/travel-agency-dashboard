import * as Sentry from "@sentry/react-router";
import { nodeProfilingIntegration } from '@sentry/profiling-node';

Sentry.init({
    dsn: "https://26def76e7d049da0be5493a1e3814296@o4509480536113152.ingest.de.sentry.io/4509524983545936",
 
 // Adds request headers and IP for users, for more info visit:
 // https://docs.sentry.io/platforms/javascript/guides/react-router/configuration/options/#sendDefaultPii
 sendDefaultPii: true,
 
 integrations: [nodeProfilingIntegration()],
 tracesSampleRate: 1.0, // Capture 100% of the transactions
 profilesSampleRate: 1.0, // profile every transaction
});
