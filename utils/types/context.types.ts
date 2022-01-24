import { PatientType } from "./patient.types";

export type InitialState = {
  patient: PatientType | null;
};

export type StateMethods = {
  setPatient: (patient: object) => void;
  unsetPatient: () => void;
  reloadPatient: (patientId: string) => void;
};

export type AppContextType = InitialState & StateMethods;
