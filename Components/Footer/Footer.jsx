import React from "react";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillFacebook,
  AiFillLinkedin,
} from "react-icons/ai";

//INTERNAL IMPORT
import Style from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={Style.footer}>
      <div className={Style.footer_box}>
        <h2>Follow our Discussion</h2>
        <div className={Style.footer_box_social}>
          <a href="https://www.linkedin.com/company/basketfi/">
            <AiFillLinkedin className={Style.footer_box_social_icon} />
          </a>
          <a href="https://www.instagram.com/basketfi_app/">
            <AiFillInstagram className={Style.footer_box_social_icon} />
          </a>
          <a href="https://mobile.twitter.com/Basket_Fi">
            <AiFillTwitterCircle className={Style.footer_box_social_icon} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
