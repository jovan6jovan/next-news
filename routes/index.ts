export const TOP_US_GENERAL_HEADLINES = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWS_API_KEY}`;

export const generateEverythingRoute = (searchQuery: string) =>
  `https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=${process.env.NEWS_API_KEY}`;

export const generateSearchNewsRoute = (searchQuery: string) =>
  `/api/search-news?q=${searchQuery}`;
