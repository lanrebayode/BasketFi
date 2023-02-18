import React from "react";
import Link from "next/link";

//INTERNAL IMPORT
import Style from "./Items.module.css";

const Items = () => {
  const itemsArray = [
    {
      name: "Success Stories",
      link: "./successStories",
    },
    {
      name: "Resources",
      link: "./resources",
    },
    {
      name: "Courses",
      link: "./courses",
    },
    {
      name: "Podcast",
      link: ".podcast",
    },
    {
      name: "Video Resource",
      link: ".videos",
    },
  ];

  return (
    <div className={Style.items}>
      <div className={Style.items_box}>
        {itemsArray.map((el, i) => (
          <Link href={{ path: `${el.link}` }}>
            <p className={items_box_item} k={i + 1} el={el} i={i}>
              {el.name}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Items;
