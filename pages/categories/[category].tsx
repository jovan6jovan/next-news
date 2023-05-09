import { generateTopHeadlinesByCategoryRoute } from "@/routes";
import Alert from "@/src/components/Alert/Alert";
import Title from "@/src/components/Title/Title";
import ArticlesWithPagination from "@/src/containers/ArticlesWithPagination/ArticlesWithPagination";
import { ArticleResponse, CategoryProps, CategorySlugs } from "@/types";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { FC } from "react";

export const getStaticPaths: GetStaticPaths = async () => {
  const categorySlugs = Object.values(CategorySlugs);

  const paths = categorySlugs.map((slug) => ({ params: { category: slug } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const category = params?.category;
  const TOP_HEADLINES_BY_CATEGORY_URL = generateTopHeadlinesByCategoryRoute(
    category as string
  );

  const response = await fetch(TOP_HEADLINES_BY_CATEGORY_URL);
  const newsResponse: ArticleResponse = await response.json();

  return {
    props: {
      articles: newsResponse.articles,
    },
    revalidate: 300,
  };
};

const Category: FC<CategoryProps> = ({ articles }) => {
  const router = useRouter();
  const categoryName = router.query.category;

  const title = `Category: ${categoryName}`;

  return (
    <>
      <Head>
        <title key="title">{`${title} - Next News`}</title>
      </Head>
      <Title title={title} />
      <Alert>
        This page uses <strong>getStaticProps</strong> for pre-rendering of
        pages at build time, resulting in faster load times and better{" "}
        <strong>SEO optimization</strong>.
        <br />
        It also enables <strong>incremental static regeneration</strong> to show
        data not older than <strong>5 minutes</strong>.
      </Alert>
      <ArticlesWithPagination articles={articles} />
    </>
  );
};

export default Category;
