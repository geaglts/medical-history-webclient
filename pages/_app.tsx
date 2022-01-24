import "../reset.css";
import AppContext from "@contexts/AppContext";
import useInitialState from "@hooks/useInitialState";
import axios from "axios";

function MyApp({ Component, pageProps }) {
  const initialState = useInitialState();
  axios.defaults.baseURL = process.env.API_URL;
  return (
    <AppContext.Provider value={initialState}>
      <Component {...pageProps} />;
    </AppContext.Provider>
  );
}

export default MyApp;
