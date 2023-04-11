import Subtitle from "@/src/components/Subtitle/Subtitle";
import Title from "@/src/components/Title/Title";
import Head from "next/head";
import React from "react";

const Error404: React.FC = () => {
  return (
    <>
      <Head>
        <title>Page Not Found | Next News</title>
      </Head>
      <Title title="Page not found" />
      <Subtitle subtitle=" Sorry, the page you are looking for does not exist." />
    </>
  );
};

export default Error404;
