// "use client";
import Link from "next/link";
import { getAlbums } from "@/_utils/api";
import { Item, ParemsProps } from "@/_utils/ts";

const Albums: React.FC<ParemsProps> = async ({ params }) => {
  const posts: Item[] = await getAlbums(params.id);

  return (
    <div className="page__wrapper page__width">
      <div className="page__top">
        <h2 className="page__title">Albums of user: {params.id}</h2>
        <Link href={`/`}>
          <button className="button">Back</button>
        </Link>
      </div>
      <ul className="items">
        {posts.map((item) => (
          <li key={item.id} className="item item__title">
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Albums;
