import React, { useEffect } from "react";
import ReactGA from "react-ga4";
import Header from "./components/common/header/header";
import Footer from "./components/common/footer/footer";
import { wrapper } from "./../redux/store";
import "./../utils/utils";
import "@/styles/globals.scss";

ReactGA.initialize("G-GGF5QDQRRK");
ReactGA.send("pageview");

function App({ Component, pageProps }) {
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname,
    });
  }, []);
  return (
    <div>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default wrapper.withRedux(App);
