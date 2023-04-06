import { generateSearchNewsRoute } from "@/routes";
import Button from "@/src/components/Button/Button";
import Input from "@/src/components/FormElements/Input/Input";
import Label from "@/src/components/FormElements/Label/Label";
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
        <Title title="Search News" />
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
          {searchResults && <ArticlesGrid articles={searchResults} />}
        </div>
      </main>
    </>
  );
};

export default SearchNewsPage;
