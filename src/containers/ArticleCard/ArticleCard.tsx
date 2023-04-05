import { validateImageUrl } from "@/src/utils/validateImageUrl";
import { Article } from "@/types";
import { FC } from "react";

interface Props {
  article: Article;
}

const ArticleCard: FC<Props> = ({ article }) => {
  const { title, author, description, url, urlToImage, publishedAt } = article;
  const imageToUse = validateImageUrl(urlToImage as string);

  return (
    <a href={url} target="_blank">
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={imageToUse} />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{title}</p>
              <p className="subtitle is-6">{author}</p>
            </div>
          </div>

          <div className="content">
            {description}
            <br />
            <p>
              <i>{publishedAt}</i>
            </p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default ArticleCard;
