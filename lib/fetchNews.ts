const fetchNews = async (
  category?: Category | string,
  keywords?: string,
  isDynamic?: boolean
) => {
  const url = new URL("https://newsapi.org/v2/top-headlines?category=general");

  keywords ? url.searchParams.set("q", keywords) : "";
  category ? url.searchParams.set("category", category) : "";

  try {
    const res = await fetch(`${url}&apiKey=${process.env.NEWS_API_KEY}`, {
      cache: isDynamic ? "no-cache" : "default",
      next: isDynamic ? { revalidate: 0 } : { revalidate: 20 },
    });

    const data = await res.json();

    const newArticle = data.articles.map((article: any) => {
      article.source = article.source.name;
      return article;
    });

    return { ...data, articles: newArticle };
  } catch (error) {
    console.log(error);
  }
};

export default fetchNews;
