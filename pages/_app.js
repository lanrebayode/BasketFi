import Style from "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className={Style.main}>
      <Component {...pageProps} />
    </div>
  );
}
