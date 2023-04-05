import { generateEverythingRoute } from "@/routes";
import { ArticleResponse } from "@/types";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const searchQuery = req.query?.q;
  const EVERYTHING_ROUTE = generateEverythingRoute(searchQuery as string);

  if (!searchQuery) {
    return res.status(400).json({ error: "Please provide a search query" });
  }

  const response = await fetch(EVERYTHING_ROUTE);
  const articlesResponse: ArticleResponse = await response.json();

  res.status(200).json(articlesResponse.articles);
}
