
import Header from "./components/common/header/header";
import Footer from "./components/common/footer/footer";
import {wrapper} from "./../redux/store";
import './../utils/utils';
import "@/styles/globals.scss";

function App({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default wrapper.withRedux(App);
