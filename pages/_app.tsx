import Head from "next/head";
import axios from "axios";

import "../reset.css";
import AppContext from "@contexts/AppContext";
import useInitialState from "@hooks/useInitialState";

function MyApp({ Component, pageProps }) {
  const initialState = useInitialState();
  axios.defaults.baseURL = process.env.API_URL;
  return (
    <>
      <Head>
        <title>Historial Medico</title>
      </Head>
      <AppContext.Provider value={initialState}>
        <Component {...pageProps} />;
      </AppContext.Provider>
    </>
  );
}

export default MyApp;
