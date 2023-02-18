import React from "react";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "./Tab2.module.css";
import images from "../../BasketFiImage/images";

const Tab2 = () => {
  return (
    <div className={Style.tab2}>
      <div className={Style.tab2_box}>
        <div className={Style.tab2_box_note}>
          <h3> Financial Knowledge Made Easy</h3>
          <p>Get Authntic Financial Knowledge Nirvana at NO Cost.</p>
        </div>
        <Image
          className={Style.tab2_box_img}
          src={images.full_mockUp}
          alt="mockUp"
          width={250}
          height={500}
        />
      </div>
    </div>
  );
};

export default Tab2;
