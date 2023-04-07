import { Article } from "../../types";

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
