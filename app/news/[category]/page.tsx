import fetchNews from "../../../lib/fetchNews";
import NewsList from "../../NewsList";
import { categories } from "../../../constants";
type Props = {
  params: { category: Category };
};

export default async function NewsCategory(props: Props) {
  const {
    params: { category },
  } = props;

  const news: NewsResponse = await fetchNews(category);
  return (
    <div>
      <h1 className="headerTitle">{category}</h1>
      <NewsList news={news} />
    </div>
  );
}

export async function generateStaticParams() {
  return categories.map((category) => ({
    category: category,
  }));
}

// http://localhost:3000/news/[category]
