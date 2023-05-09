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

export interface PaginatedNewsArticlesResponse {
  articles: Article[];
  totalPages: number;
}

export interface CategoryProps {
  articles: Article[];
}

export enum CategorySlugs {
  BUSINESS = "business",
  ENTERTAINMENT = "entertainment",
  GENERAL = "general",
  HEALTH = "health",
  SCIENCE = "science",
  SPORTS = "sports",
  TECHNOLOGY = "technology",
}
