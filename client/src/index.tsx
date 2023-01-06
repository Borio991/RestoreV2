import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./app/layout/styles.css";
import App from "./app/layout/App";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

const client = new QueryClient();
export const history = createBrowserHistory();

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <Router history={history}>
        <App />
        <ReactQueryDevtools initialIsOpen={false} />
      </Router>
    </QueryClientProvider>
  </React.StrictMode>
);
