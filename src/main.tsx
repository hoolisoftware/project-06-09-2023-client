import "./index.scss";

import React, {Suspense} from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query"
import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import "dayjs/locale/ru"

import { store } from "./app/store";

import App from "./App";

const queryClient = new QueryClient();

import './18n';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ru">
            <Suspense fallback={'Loading...'}>
                <App />
            </Suspense>
        </LocalizationProvider>
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);
