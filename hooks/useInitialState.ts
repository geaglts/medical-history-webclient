import { useState } from "react";
import axios from "axios";
import type { InitialState } from "@utils/types/context.types";
import type { PatientType } from "@utils/types/patient.types";

const initialState: InitialState = {
  patient: null,
};

const useInitialState = () => {
  const [values, setValues] = useState(initialState);
  const setPatient = (patient: PatientType) => {
    setValues({ ...values, patient });
  };
  const unsetPatient = () => {
    setValues({ ...values, patient: null });
  };
  const reloadPatient = async (patientId: string) => {
    try {
      const res = await axios.get(`/patients/${patientId}`);
      if (res.data?.body) {
        setValues({
          ...values,
          patient: { ...values.patient, ...res.data.body },
        });
      }
    } catch (error) {
      console.log({
        location: "useInitialState->reloadPatient",
        error: error.response.data,
      });
    }
  };
  return { ...values, setPatient, unsetPatient, reloadPatient };
};

export default useInitialState;
