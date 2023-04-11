import { Article } from "@/types";
import { formatDate } from "@/utils/date";
import { validateImageUrl } from "@/utils/validateImageUrl";
import Image from "next/image";
import { FC } from "react";

interface Props {
  article: Article;
}

const ArticleCard: FC<Props> = ({ article }) => {
  const { title, author, description, url, urlToImage, publishedAt } = article;
  const imageToUse = validateImageUrl(urlToImage as string);
  const formattedDate = formatDate(publishedAt);

  return (
    <a href={url} target="_blank">
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by2">
            <Image
              src={imageToUse}
              alt="Next News - article image"
              width={500}
              height={200}
            />
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
            <p className="mt-2">
              Published: <i>{formattedDate}</i>
            </p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default ArticleCard;
