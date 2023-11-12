import Link from "next/link";
import { getUsers } from "@/_utils/api";
import { UsersItem } from "@/_utils/ts";

const Home: React.FC = async () => {
  const users: UsersItem[] = await getUsers();

  return (
    <div className="page__wrapper page__width">
      <h2 className="page__title">User List</h2>
      <ul className="items">
        {users.map((item) => (
          <li key={item.id} className="item__user">
            <p className="item__name">{item.name}</p>
            <div className="group__button">
              <Link href={`/posts/${item.id}`}>
                <button className="button">Posts</button>
              </Link>
              <Link href={`/albums/${item.id}`}>
                <button className="button">Albums</button>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
