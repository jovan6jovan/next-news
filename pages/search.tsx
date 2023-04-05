import { generateSearchNewsRoute } from "@/routes";
import Spinner from "@/src/components/Spinner/Spinner";
import ArticlesGrid from "@/src/containers/ArticlesGrid/ArticlesGrid";
import { Article } from "@/types";
import Head from "next/head";
import { FC, FormEvent, useState } from "react";

const SearchNewsPage: FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const searchNewsRoute = generateSearchNewsRoute(searchTerm);
  const searchBtnDisabled = isLoading || !searchTerm.length;
  const notEmptySearchTerm = searchTerm !== "";

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
    }
  };

  return (
    <>
      <Head>
        <title key="title">Search news | Next News</title>
      </Head>
      <main className="container pt-5">
        <h1 className="title">Search News</h1>
        <form className="field" onSubmit={handleSubmit}>
          <label className="label">Browse by category</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Sport, health, science..."
              minLength={2}
              value={searchTerm}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="button is-info mt-4"
              disabled={searchBtnDisabled}
            >
              Search
            </button>
          </div>
        </form>
        <div className="mt-6">
          <div className="has-text-centered mb-6">
            {isLoading && <Spinner />}
          </div>
          {error && <p>Something went wrong. Please try again.</p>}
          {searchResults && <ArticlesGrid articles={searchResults} />}
        </div>
      </main>
    </>
  );
};

export default SearchNewsPage;
