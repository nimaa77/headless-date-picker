import * as React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { I18nProvider } from "react-aria";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);

root.render(
  <StrictMode>
    <I18nProvider locale="fa-IR">
      <App />
    </I18nProvider>
  </StrictMode>
);
