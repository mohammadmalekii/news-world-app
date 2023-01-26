import { notFound } from "next/navigation";
import LiveTimestamp from "../LiveTimestamp";
import CopyButton from "./CopyButton";

type Props = {
  searchParams?: Article;
};
export default function ArticlePage({ searchParams }: Props) {
  console.log(searchParams);
  if (
    (searchParams && Object.entries(searchParams).length === 0) ||
    !searchParams
  ) {
    return notFound();
  }

  const article: Article = searchParams;

  return (
    <article>
      <section className="flex flex-col lg:flex-row bg-24 px-0 lg:px-10 py-10">
        {article.urlToImage ? (
          <img
            className="h-50 max-w-md mx-auto md:max-w-lg lg:max-w-xl object-cover rounded-lg shadow-md"
            src={article.urlToImage}
            alt={article.title}
          />
        ) : (
          <img
            className="h-50 max-w-md mx-auto md:max-w-lg lg:max-w-xl object-cover rounded-lg shadow-md"
            src="https://www.contentviewspro.com/wp-content/uploads/2017/07/default_image.png"
            alt={article.title}
          />
        )}

        <div className="px-10">
          <h1 className="headerTitle px-0 no-underline pb-2">
            {article.title}
          </h1>

          <div className="flex divide-x-2 space-x-4">
            <h2 className="font-bold">
              By: {article.author === "null" ? "unknown" : article.author}
            </h2>
            <h2 className="font-bold pl-4">
              Source: {article.source === "null" ? "unknown" : article.source}
            </h2>
            <p className="pl-4">
              <LiveTimestamp
                time={new Date(article.publishedAt).toLocaleDateString()}
              />
            </p>
          </div>
          <CopyButton textToCopy={article.url} />

          <p className="pt-4">{article.description}</p>
          <p className="pt-4">{article.content}</p>
        </div>
      </section>
    </article>
  );
}

// http://localhost:3000/article?source=[object%20Object]&author=null&title=Dr%C3%A2a-Tafilalet%20:%20M.%20Baraka%20visite%20le%20projet%20de%20renforcement%20de%20la%20route%20nationale%20N%C2%B010%20|%20MAP%20Express%20MAP%20Express%20-%20MAP%20Express&description=Le%20ministre%20de%20l%27Equipement%20et%20de%20l%27Eau,%20Nizar%20Baraka,%20a%20effectu%C3%A9,%20samedi%20dans%20la%20province%20de%20Tinghir,%20une%20visite%20de%20terrain%20au%20projet%20de%20renforcement%20de%20la%20route%20nationale%20N%C2%B010%20au%20niveau%20de%20la%20r%C3%A9gion%20de%20Dr%C3%A2a-Tafilalet.&url=http://www.mapexpress.ma/actualite/societe-et-regions/draa-tafilalet-m-baraka-visite-projet-renforcement-route-nationale-n10/&urlToImage=http://www.mapexpress.ma/wp-content/uploads/2022/12/nizar-baraka_arch.jpg&publishedAt=2023-01-21T18:42:34Z&content=samedi,%2021%20janvier,%202023%20%C3%A0%2019:04Tinghir%20%E2%80%93%20Le%20ministre%20de%20l%E2%80%99Equipement%20et%20de%20l%E2%80%99Eau,%20Nizar%20Baraka,%20a%20effectu%C3%A9,%20samedi%20dans%20la%20province%20de%20Tinghir,%20une%20visite%20de%20terrain%20au%20projet%20de%20renforcement%20de%20l%E2%80%A6%20[+63%20chars]
