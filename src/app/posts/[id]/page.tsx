import Link from "next/link";
import { getPosts } from "@/_utils/api";
import { Item, ParemsProps } from "@/_utils/ts";
import PostList from "@/app/components/PostList";

const Posts: React.FC<ParemsProps> = async ({ params }) => {
  const posts: Item[] = await getPosts(params.id);

  return (
    <div className="page__wrapper page__width">
      <div className="page__top">
        <h2 className="page__title">Posts of user: {params.id}</h2>
        <Link href={`/`}>
          <button className="button">Back</button>
        </Link>
      </div>
      <PostList posts={posts} />
    </div>
  );
};

export default Posts;
