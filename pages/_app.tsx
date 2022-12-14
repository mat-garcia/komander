
import "materialize-css/dist/css/materialize.min.css";
//import "materialize-css/dist/js/materialize.min.js";
import "../styles/css/material-icons.css";
import "../styles/globals.css";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps}: AppProps) {
  return <>
          <ToastContainer/>
          <Component {...pageProps} />
        </>
}

export default MyApp
