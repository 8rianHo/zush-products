import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { Fragment } from "react";

import client from "@/api/apollo";

import "@/styles/globals.css";

const ProgressBar = dynamic(() => import("@/components/ui/ProgressBar"), {
  ssr: false,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Fragment>
        <ProgressBar />
        <Component {...pageProps} />
      </Fragment>
    </ApolloProvider>
  );
}
