import { useContext } from "react";
import type { AppContextType } from "@utils/types/context.types";

import Patient from "@components/Patient";
import FindPatientForm from "@containers/FindPatientForm";
import Layout from "@containers/Layout";

import AppContext from "@contexts/AppContext";

const Home = () => {
  const { patient } = useContext<AppContextType>(AppContext);
  return (
    <Layout center>
      {patient ? <Patient patient={patient} /> : <FindPatientForm />}
    </Layout>
  );
};

export default Home;
