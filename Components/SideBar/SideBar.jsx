import React from "react";
import Image from "next/image";
import { BsSearch } from "react-icons/bs";

//INTERNAL IMPORT
import Style from "./SideBar.module.css";
import images from "../../BasketFiImage/images";

const SideBar = () => {
  return (
    <div className={Style.slideBar}>
      <div className={Style.slideBar_box}>
        <Image src={images.basketfilogo} alt="basket-fi-logo" width={10} />

        <div className={Style.search}>
          <input type="text" placeholder="search" />
          <BsSearch onClick={() => {}} />
        </div>

        <div className={Style.items}></div>
      </div>
    </div>
  );
};

export default SideBar;
