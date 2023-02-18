import React from "react";
import Image from "next/image";
import { AiFillApple } from "react-icons/ai";
import { FaGooglePlay } from "react-icons/fa";

//INTERNAL IMPORT
import Style from "./HeroSection.module.css";
import images from "../../BasketFiImage/images";

const HeroSection = () => {
  return (
    <div className={Style.heroSection}>
      <div className={Style.heroSection_box}>
        <div className={Style.heroSection_box_left}>
          <Image
            className={Style.heroSection_box_vector}
            src={images.vector}
            alt="vector"
            width={500}
          />
          <div className={Style.holder}>
            <h2>Unlocking Financial Litracy for Everyone</h2>
            <p>
              Get supercharged with financial knowledge that no one taught you
              in school
            </p>
            <div className={Style.heroSection_box_btnClass}>
              <div className={Style.heroSection_box_left_download}>
                <a href="#">
                  <button className={Style.heroSection_box_left_download_btn}>
                    <AiFillApple className={Style.heroSection_icon_app} />
                    <span>Download on the App Store</span>
                  </button>
                </a>
                <a href="#">
                  <button className={Style.heroSection_box_left_download_btn}>
                    <FaGooglePlay className={Style.heroSection_icon} />{" "}
                    <span>Download on Google Play</span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={Style.heroSection_box_right}>
          <Image
            src={images.hero}
            alt="hero"
            width={800}
            height={550}
            className={Style.heroSection_box_right_img}
          />
        </div>
      </div>

      <div className={Style.heroSection_downTab}>
        {/* <h3>Wish to learn what people at</h3>

        <Image
          className={Style.heroSection_downTab_N}
          src={images.n}
          alt="logo"
          width={100}
          height={100}
        />
        <h2>Bloomberg</h2>

        <Image
          className={Style.heroSection_downTab_N}
          src={images.wallstreetlogo}
          alt="wallStreet logo"
          width={120}
          height={100}
        />
        <h3>know about business & finance.</h3> */}
        <Image
          src={images.downTab1}
          alt="downTab"
          width={150}
          className={Style.downTab}
        />

        <Image
          src={images.downTab2}
          alt="downTab"
          width={130}
          className={Style.downTab}
        />
        <Image
          src={images.downTab3}
          alt="downTab"
          width={150}
          className={Style.downTab}
        />
        <Image
          src={images.downTab4}
          alt="downTab"
          width={130}
          className={Style.downTab}
        />
        <Image
          src={images.downTab5}
          alt="downTab"
          width={130}
          className={Style.downTab}
        />
      </div>
    </div>
  );
};

export default HeroSection;
