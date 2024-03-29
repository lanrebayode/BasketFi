import Style from "@/styles/globals.css";
//import { Roboto } from "@next/font/google";

// const roboto = Roboto({
//   weight: "400",
//   subsets: ["latin"],
// });

export default function App({ Component, pageProps }) {
  return (
    <div className={Style.main}>
      <Component {...pageProps} />
    </div>
  );
}
