"use client";

import React, { useState } from "react";
import { ItemsProps } from "@/_utils/ts";
import Image from "next/image";
import icon from "@/_utils/images/icons/arrow-down.svg";

const PostList: React.FC<ItemsProps> = ({ posts }) => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (id: number) => {
    setOpenItem((prev) => (prev === id ? null : id));
  };

  return (
    <ul className="items">
      {posts.map((item) => (
        <li key={item.id} className="item" onClick={() => toggleItem(item.id)}>
          <div className="page__top page__top--posts">
            <h2 className="item__title">{item.title}</h2>
            <Image
              className="i-arrow"
              src={icon}
              width={20}
              height={20}
              alt="arror down"
            />
          </div>
          <p
            className={`item__body${
              openItem === item.id ? " item__body--active" : ""
            }`}
          >
            {item.body}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default PostList;
