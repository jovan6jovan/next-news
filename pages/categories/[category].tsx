import { generateTopHeadlinesByCategoryRoute } from "@/routes";
import Title from "@/src/components/Title/Title";
import ArticlesGrid from "@/src/containers/ArticlesGrid/ArticlesGrid";
import { ArticleResponse } from "@/types";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { FC } from "react";
import { CategoryProps, CategorySlugs } from "./category.types";

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
    revalidate: 120,
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
      <ArticlesGrid articles={articles} />
    </>
  );
};

export default Category;
