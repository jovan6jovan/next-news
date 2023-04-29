import Alert from "@/src/components/Alert/Alert";
import Pagination from "@/src/components/Pagination/Pagination";
import Title from "@/src/components/Title/Title";
import ArticlesGrid from "@/src/containers/ArticlesGrid/ArticlesGrid";
import { Article } from "@/types";
import { getPaginatedBreakingNewsArticles } from "@/utils/pagination";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { FC, useState } from "react";

interface Props {
  articles: Article[];
  totalPages: number;
}

export const getServerSideProps: GetServerSideProps<Props> = async ({
  query,
}) => {
  const page = Number(query.page) || 1;
  const { articles, totalPages } = await getPaginatedBreakingNewsArticles(page);

  return {
    props: {
      articles,
      totalPages,
    },
  };
};

const Home: FC<Props> = ({ articles, totalPages }) => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const hasArticles = articles.length > 0;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);

    const query = page === 1 ? {} : { page };

    router.replace({
      query,
    });
  };

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
      <ArticlesGrid articles={articles} />
      {hasArticles && (
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      )}
    </>
  );
};

export default Home;
