// "use client";
import Link from "next/link";
import { getPosts } from "@/_utils/api";
import { Item, ParemsProps } from "@/_utils/ts";

const Posts: React.FC<ParemsProps> = async ({ params }) => {
  const posts: Item[] = await getPosts(params.id);

  return (
    <div className="page__wrapper">
      <div className="page__top">
        <h2 className="page__title">Posts of user: {params.id}</h2>
        <Link href={`/`}>
          <button className="button">Back</button>
        </Link>
      </div>
      <ul className="items">
        {posts.map((item) => (
          <li key={item.id} className="item">
            <h2 className="item__title">{item.title}</h2>
            <p className="item__body">{item.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
