import { TOP_US_GENERAL_HEADLINES } from "@/routes";
import Alert from "@/src/components/Alert/Alert";
import Title from "@/src/components/Title/Title";
import ArticlesGrid from "@/src/containers/ArticlesGrid/ArticlesGrid";
import { Article, ArticleResponse } from "@/types";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { FC } from "react";

interface Props {
  newsArticles: Article[];
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const response = await fetch(TOP_US_GENERAL_HEADLINES);
  const newsResponse: ArticleResponse = await response.json();

  return {
    props: {
      newsArticles: newsResponse.articles,
    },
  };
};

const Home: FC<Props> = ({ newsArticles }) => {
  return (
    <>
      <Head>
        <title key="title">Breaking news | Next News</title>
      </Head>
      <Title title="Breaking News" />
      <Alert>
        This page uses <strong>getServerSideProps</strong> to fetch data on the
        server before rendering a page. This allows faster load times and better{" "}
        <strong>SEO optimization</strong>.
      </Alert>
      <ArticlesGrid articles={newsArticles} />
    </>
  );
};

export default Home;
