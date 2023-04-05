import { TOP_US_GENERAL_HEADLINES } from "@/endpoints";
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
      <section className="section">
        <div className="container">
          <h1 className="title">Breaking news</h1>
          <ArticlesGrid articles={newsArticles} />
        </div>
      </section>
    </>
  );
};

export default Home;
