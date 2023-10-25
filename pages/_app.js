import { useState } from "react";
import { QueryClientProvider, QueryClient, Hydrate } from "react-query";
import { createTheme, ThemeProvider } from "@mui/material";
import { ReactQueryDevtools } from "react-query/devtools";

import Layout from "../components/layouts/Layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/globals.css";
import "../styles/sass/_global.scss";
import "swiper/css";
const theme = createTheme({
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
});

function MyApp({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Layout>
            <ToastContainer />
            <Component {...pageProps} />
          </Layout>
        </Hydrate>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default MyApp;
