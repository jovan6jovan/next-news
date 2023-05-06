import { usePaginationForFetchedArticles } from "@/hooks/usePaginationForFetchedArticles";
import Pagination from "@/src/components/Pagination/Pagination";
import { Article } from "@/types";
import { FC, Fragment } from "react";
import ArticlesGrid from "../ArticlesGrid/ArticlesGrid";

interface Props {
  articles: Article[];
}

const ArticlesWithPagination: FC<Props> = ({ articles }) => {
  const {
    currentPage,
    setCurrentPage,
    totalPages,
    hasSearchResults,
    displayedArticles,
  } = usePaginationForFetchedArticles(articles);

  return hasSearchResults ? (
    <>
      <ArticlesGrid articles={displayedArticles} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </>
  ) : (
    <Fragment />
  );
};

export default ArticlesWithPagination;
