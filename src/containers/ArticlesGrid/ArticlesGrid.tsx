import { Article } from "@/types";
import { FC } from "react";
import ArticleCard from "../ArticleCard/ArticleCard";

interface Props {
  articles: Article[];
}

const ArticlesGrid: FC<Props> = ({ articles }) => {
  return (
    <div className="columns is-multiline">
      {articles.map((article) => (
        <div
          key={article.url}
          className="column is-4-desktop is-6-tablet is-12-mobile"
        >
          <ArticleCard article={article} />
        </div>
      ))}
    </div>
  );
};

export default ArticlesGrid;
