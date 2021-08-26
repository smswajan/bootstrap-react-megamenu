import "../styles/bootstrap.scss";
import '../styles/globals.css';
import NextNprogress from 'nextjs-progressbar';



function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNprogress
        color="#fc5e24"
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
