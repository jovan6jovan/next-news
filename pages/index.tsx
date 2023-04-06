import { TOP_US_GENERAL_HEADLINES } from "@/routes";
import Title from "@/src/components/Title/Title";
import ArticlesGrid from "@/src/containers/ArticlesGrid/ArticlesGrid";
import Container from "@/src/containers/Container/Container";
import Section from "@/src/containers/Section/Section";
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
      <Section>
        <Container>
          <Title title="Breaking News" />
          <ArticlesGrid articles={newsArticles} />
        </Container>
      </Section>
    </>
  );
};

export default Home;
