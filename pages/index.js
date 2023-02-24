import Image from "next/image";
import styles from "@/styles/Home.module.css";
import NavBar from "@/Components/NavBar/NavBar";
import HeroSection from "@/Components/HeroSection/HeroSection";
import Tabs from "@/Components/Tabs/Tabs";
import Tab2 from "@/Components/Tab2/Tab2";
import Footer from "@/Components/Footer/Footer";
import Head from "next/head";

export default function Home() {
  return (
    <div className={styles.description}>
      <NavBar />
      <Head>
        <title>Next App</title>
        <link rel="icon" href="../pages/favicon.ico" />{" "}
      </Head>
      <HeroSection />
      <Tabs />
      <Tab2 />
      <Footer />
    </div>
  );
}
