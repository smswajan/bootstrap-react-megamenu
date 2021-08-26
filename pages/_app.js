import "../styles/bootstrap.scss";
import '../styles/globals.css';
import "../styles/custom-styles/index.scss";

import NextNprogress from 'nextjs-progressbar';
import FooterComponent from "../Components/FooterComponent/FooterComponent";



function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNprogress
        color="#fc5e24"
      />
      <Component {...pageProps} />
      <FooterComponent/>
    </>
  )
}

export default MyApp
