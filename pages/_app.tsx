import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import "../styles/common.scss";
import "../styles/globals.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NextPage } from "next";
import ThemeProvider from "../context/ThemeProvider";
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark" //set this to system
      // enableSystem      // uncomment to implement themes
      disableTransitionOnChange
    >
      {getLayout(<Component {...pageProps} />)}

      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        // hideProgressBar={true}
        closeOnClick={true}
        pauseOnHover
        draggable={false}
        theme="colored"
        toastStyle={{
          background: "#D5663F",
          borderRadius: "12px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
        }}
        closeButton={false}
        progressStyle={{
          background: "rgba(255,255,255,0.2)",
        }}
      />
    </ThemeProvider>
  );
}

export default App;
