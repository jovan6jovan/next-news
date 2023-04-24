import { ARTICLES_PER_PAGE } from "@/constants";
import { TOP_US_GENERAL_HEADLINES } from "@/routes";
import { Article, ArticleResponse } from "@/types";

export const getPaginatedNewsArticles = async (
  page: number
): Promise<{
  newsArticles: Article[];
  totalPages: number;
}> => {
  const response = await fetch(TOP_US_GENERAL_HEADLINES);
  const newsResponse: ArticleResponse = await response.json();
  const startIndex = (page - 1) * ARTICLES_PER_PAGE;
  const endIndex = startIndex + ARTICLES_PER_PAGE;
  const newsArticles = newsResponse.articles.slice(startIndex, endIndex);
  const totalPages = Math.ceil(
    newsResponse.articles.length / ARTICLES_PER_PAGE
  );
  return { newsArticles, totalPages };
};
