import Container from "@/src/containers/Container/Container";
import Navbar from "@/src/containers/Navbar/Navbar";
import Section from "@/src/containers/Section/Section";
import { Provider } from "@/src/store/provider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import NextNProgress from "nextjs-progressbar";
import { FC } from "react";

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <div>
      <Head>
        <title key="title">Next News</title>
        <meta
          key="description"
          name="description"
          content="A news website created with Next.js"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NextNProgress />
      <Provider>
        <Navbar />
        <Section>
          <Container>
            <Component {...pageProps} />
          </Container>
        </Section>
      </Provider>
    </div>
  );
};

export default App;
