export interface Article {
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage?: string;
  publishedAt: string;
  content: string;
}

export interface ArticleResponse {
  articles: Article[];
}

export interface ApiErrorResponse {
  status: string;
  code: string;
  message: string;
}
