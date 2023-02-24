import React, { useState } from "react";
import Image from "next/image";
import { BsSpotify } from "react-icons/bs";
import { FaPodcast } from "react-icons/fa";
import { SiGooglepodcasts } from "react-icons/si";
import { SiAnchor } from "react-icons/si";

//INTERNAL IMPORT
import Style from "./Tabs.module.css";
import images from "../../BasketFiImage/images";

const Tabs = () => {
  const userArray = [
    images.user1,
    images.user2,
    images.user3,
    images.user4,
    images.user5,
    images.user6,
    images.user7,
    images.user8,
    images.user9,
  ];

  const [podcastMenu, setPodCastMenu] = useState(false);

  const openPodcastMenu = () => {
    if (!podcastMenu) {
      setPodCastMenu(true);
    } else {
      setPodCastMenu(false);
    }
    console.log(podcastMenu);
  };
  return (
    <div className={Style.tabs}>
      <h3>Explore The World of Finance That Wasn't Taught in School.</h3>
      <div className={Style.tabs_box}>
        <div className={Style.tab_box_tab1}>
          {/* <p>
            Be Among Thousands in Our Close Community Where THe Deepest Business
            Secret Are Shared
          </p>
          <div className={Style.tabs_box_tab1_imageGrid}>
            {userArray.map((el, i) => (
              <Image
                key={i + 1}
                src={el}
                alt="user"
                width={60}
                height={60}
                className={Style.tabs_box_tab1_imageGrid_user}
              />
            ))}
          </div>
          <a href="https://chat.whatsapp.com/FBijmsSJil2JUPlkucEcAx">
            <button className={Style.tabs_box_tab1_btn}>
              Join Community {`>`}{" "}
            </button>
          </a> */}
          <a href="https://chat.whatsapp.com/FBijmsSJil2JUPlkucEcAx">
            <Image
              src={images.tab1}
              alt="tab1"
              width={400}
              height={450}
              className={Style.tabs_box_tab2_img}
            />
          </a>
        </div>

        <div className={Style.tab_box_tab2}>
          <a href="#">
            <Image
              className={Style.tabs_box_tab2_img}
              src={images.tab2}
              alt="tab2"
              width={400}
              height={450}
            />
          </a>
        </div>

        <div className={Style.tab_box_tab3}>
          {/* <div className={Style.tabs_box_tab3_head}>
            <Image src={images.basketfilogo} aly="BasketFi logo" width={100} />
            <div className={Style.tabs_box_tab3_icons}>
              <a href="https://open.spotify.com/show/04tsxGjtXK7vsjff9aRwUM?si=d632f0536a084bb6">
                <BsSpotify className={Style.tabs_box_tab3_icon} />
              </a>
              <a href="https://podcasts.apple.com/ng/podcast/wallstreet-stonk/id1653403398">
                <FaPodcast className={Style.tabs_box_tab3_icon} />
              </a>
              <a href="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy9jNzhiZmFkNC9wb2RjYXN0L3Jzcw">
                <SiGooglepodcasts className={Style.tabs_box_tab3_icon} />
              </a>
              <a href="https://anchor.fm/basketfi">
                <SiAnchor className={Style.tabs_box_tab3_icon} />
              </a>
            </div>
          </div>
          <h2>
            WallStreet STONK <span>(podcast)</span>
          </h2>
          <Image
            className={Style.tabs_box_tab3_img}
            src={images.wallstreet}
            alt="tab3"
            width={406}
            height={220}
          /> */}
          <a href="https://open.spotify.com/show/04tsxGjtXK7vsjff9aRwUM?si=d632f0536a084bb6">
            <Image
              src={images.tab3}
              alt="tab1"
              width={400}
              height={450}
              className={Style.tabs_box_tab2_img}
            />
          </a>

          {/* {!podcastMenu && (
            <div className={Style.podcastMenu}>
              <div className={Style.tabs_box_tab3_icons}>
                <a href="https://open.spotify.com/show/04tsxGjtXK7vsjff9aRwUM?si=d632f0536a084bb6">
                  <BsSpotify className={Style.tabs_box_tab3_icon} />
                </a>
                <a href="https://podcasts.apple.com/ng/podcast/wallstreet-stonk/id1653403398">
                  <FaPodcast className={Style.tabs_box_tab3_icon} />
                </a>
                <a href="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy9jNzhiZmFkNC9wb2RjYXN0L3Jzcw">
                  <SiGooglepodcasts className={Style.tabs_box_tab3_icon} />
                </a>
                <a href="https://anchor.fm/basketfi">
                  <SiAnchor className={Style.tabs_box_tab3_icon} />
                </a>
              </div>
            </div>
          )} */}
        </div>

        <div className={Style.tab_box_tab4}>
          {/* <Image
            className={Style.tabs_box_tab4_logo}
            src={images.basketfilogo}
            aly="BasketFi logo"
            width={100}
          />
          <h2>The Everything Finance Newsletter in Your Inbox</h2>
          <div className={Style.tabs_box_tab4_container}>
            <button>Register{`>`} </button>
            <Image
              className={Style.tabs_box_tab4_container_img}
              alt="mock-Up"
              src={images.half_mockUp}
              width={200}
              height={250}
            />
          </div> */}
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSexi8lE-RkNBylVRDgMR5fhbAVB8JMsvS-6FPhxy8CtO0PfPA/viewform">
            <Image
              src={images.tab4}
              alt="tab1"
              width={400}
              height={450}
              className={Style.tabs_box_tab2_img}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
