import { categories } from "../constants";
import fetchNews from "../lib/fetchNews";
import NewsList from "./NewsList";

export default async function HomePage() {
  // fetch the news data
  const news: NewsResponse = await fetchNews();

  return (
    <div>
      <NewsList news={news} />
    </div>
  );
}
