import { ARTICLES_PER_PAGE } from "@/constants";
import { generateSearchNewsRoute } from "@/routes";
import Alert from "@/src/components/Alert/Alert";
import Button from "@/src/components/Button/Button";
import Input from "@/src/components/FormElements/Input/Input";
import Label from "@/src/components/FormElements/Label/Label";
import Pagination from "@/src/components/Pagination/Pagination";
import Spinner from "@/src/components/Spinner/Spinner";
import Title from "@/src/components/Title/Title";
import ArticlesGrid from "@/src/containers/ArticlesGrid/ArticlesGrid";
import { Article } from "@/types";
import Head from "next/head";
import { FC, FormEvent, useState } from "react";

const SearchNewsPage: FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const searchNewsRoute = generateSearchNewsRoute(searchTerm);
  const searchBtnDisabled = isLoading || !searchTerm.length;
  const notEmptySearchTerm = searchTerm !== "";
  const hasSearchResults = searchResults.length > 0;
  const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
  const endIndex = startIndex + ARTICLES_PER_PAGE;
  const displayedArticles = searchResults.slice(startIndex, endIndex);
  const totalPages = Math.ceil(searchResults.length / ARTICLES_PER_PAGE);

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    setSearchTerm(e.currentTarget.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (notEmptySearchTerm) {
      setIsLoading(true);
      setError("");

      try {
        const response = await fetch(searchNewsRoute);
        const articles: Article[] = await response.json();
        setSearchResults(articles);
        setIsLoading(false);
      } catch (err) {
        console.error(err);
        setIsLoading(false);
        setError(err as string);
      }
    } else {
      setSearchResults([]);
      setCurrentPage(1);
    }
  };

  return (
    <>
      <Head>
        <title key="title">Search news | Next News</title>
      </Head>
      <main>
        <Title title="Search News" />
        <Alert>
          This page uses <strong>client-side data fetching</strong> to show
          real-time data. Requests are handled via <strong>API routes</strong>.
        </Alert>
        <form className="field" onSubmit={handleSubmit}>
          <Label cssClass="label">Browse by category</Label>
          <div className="control">
            <Input
              cssClass="input"
              type="text"
              placeholder="Sport, health, science..."
              value={searchTerm}
              onChange={handleChange}
            />
            <Button
              type="submit"
              cssClass="button is-info mt-4"
              disabled={searchBtnDisabled}
            >
              Search
            </Button>
          </div>
        </form>
        <div className="mt-6">
          <div className="has-text-centered mb-6">
            {isLoading && <Spinner />}
          </div>
          {error && <p>Something went wrong. Please try again.</p>}
          {hasSearchResults && (
            <>
              <ArticlesGrid articles={displayedArticles} />
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={(page) => setCurrentPage(page)}
              />
            </>
          )}
        </div>
      </main>
    </>
  );
};

export default SearchNewsPage;
