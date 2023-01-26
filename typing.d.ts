// article
// url direct url to the article => copy link button to copy article url
type Article = {
  source: string | null;
  author: string | null;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
};

type NewsResponse = {
  status: "ok" | "error";
  totalResults: number;
  code?: string;
  message?: string;
  articles: Article[];
};

type Category =
  | "general"
  | "technology"
  | "business"
  | "entertainment"
  | "health"
  | "science"
  | "sports";
