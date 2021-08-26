import "../styles/bootstrap.scss";
import '../styles/globals.css';
import "../styles/custom-styles/index.scss";

import NextNprogress from 'nextjs-progressbar';
import FooterComponent from "../Components/FooterComponent/FooterComponent";
import NavbarComponent from "../Components/NavbarComponent/NavbarComponent";



function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNprogress
        color="#fc5e24"
      />
      <NavbarComponent/>
      <Component {...pageProps} />
      <FooterComponent/>
    </>
  )
}

export default MyApp
