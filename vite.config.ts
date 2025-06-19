
import tailwindcss from "@tailwindcss/vite";

import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { sentryReactRouter, type SentryReactRouterBuildOptions } from "@sentry/react-router";
import react from "@vitejs/plugin-react";


const sentryConfig: SentryReactRouterBuildOptions = {
  org: "m-r3h",
  project: "travel-agency",
  authToken: "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"
};

export default defineConfig((config) => {
  return {
    plugins: [
      tailwindcss(),
      tsconfigPaths(),
      reactRouter(),
      sentryReactRouter(sentryConfig, config)
    ],
    ssr: {
      noExternal: [/@syncfusion/],
    }
  };
});
