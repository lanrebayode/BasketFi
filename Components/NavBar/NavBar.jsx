import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "./NavBar.module.css";
import images from "../../BasketFiImage/images";
import SideBar from "../SideBar/SideBar";

const NavBar = () => {
  const [logIn, setLogIn] = useState(false);
  const [menuBar, setMenuBar] = useState(false);

  const current = new Date();

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };

  const month = current.toLocaleString("en", { month: "long" });

  const date = `${current.getDate()} ${month}, ${current.getFullYear()}.`;

  const openMenu = () => {
    if (!menuBar) {
      setMenuBar(true);
      console.log(menuBar);
    } else {
      setMenuBar(false);
    }
  };
  return (
    <div className={Style.NavBar}>
      <div className={Style.NavBar_box}>
        <Image
          className={Style.NavBar_box_logo}
          src={images.basketfilogo}
          alt="basket-fi logo"
          width={150}
        />
        <p>App coming soon on IOS</p>
        <div className={Style.NavBar_box_container}>
          {/* <h5>{date}</h5> */}
          {logIn ? (
            <div className={Style.NavBar_box_box}>
              <h3>Welcome, Olanrewaju.</h3>
              {/* <AiOutlineMenu
                className={Style.NavBar_box_menuIcon}
                onClick={() => openMenu()}
              /> */}
            </div>
          ) : (
            <div className={Style.NavBar_box_btn}>
              {/* <button className={Style.NavBar_box_button}>Sign Up</button>
              <button className={Style.NavBar_box_button}>Sign In</button> */}
              {/* <AiOutlineMenu
                className={Style.NavBar_box_menuIcon}
                onClick={() => openMenu()}
              /> */}
            </div>
          )}

          {/* {menuBar ? <SideBar /> : ""} */}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
