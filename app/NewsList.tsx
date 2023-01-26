import Article from "./Article";

type Props = {
  news: NewsResponse;
};
export default function NewsList({ news }: Props) {
  return news?.totalResults === 0 ? (
    <div className="w-full h-[50vh] flex justify-center items-center">
      <h1 className="text-3xl">There is No News!</h1>
    </div>
  ) : news?.status !== "ok" ? (
    <div className="w-full h-[50vh] flex justify-center items-center flex-col gap-3">
      <h1 className="text-3xl">Error occurred!</h1>
      <p>{news?.message || "An Unknown Error Occurred"}</p>
    </div>
  ) : (
    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center p-10 gap-10">
      {news?.articles?.map((article) => (
        <Article key={article.title} article={article} />
      ))}
    </main>
  );
}
