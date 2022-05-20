import "../styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import store from "../store";
import { Provider } from "react-redux";

const queryClient = new QueryClient();

import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

let persistor = persistStore(store);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  );
}

export default MyApp;
