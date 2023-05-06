import { ARTICLES_PER_PAGE } from "@/constants";
import { Article } from "@/types";
import { useState } from "react";

export const usePaginationForFetchedArticles = (articles: Article[]) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(articles.length / ARTICLES_PER_PAGE);
  const hasSearchResults = articles.length > 0;
  const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
  const endIndex = startIndex + ARTICLES_PER_PAGE;
  const displayedArticles = articles.slice(startIndex, endIndex);

  return {
    currentPage,
    setCurrentPage,
    totalPages,
    hasSearchResults,
    displayedArticles,
  };
};
