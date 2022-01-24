import { useState, useContext } from "react";
import Checkup from "./Checkup";
import Button from "./Button";

import AddCheckupForm from "@containers/AddCheckupForm";

import AppContext from "@contexts/AppContext";
import type { PatientType } from "@utils/types/patient.types";
import { AppContextType } from "@utils/types/context.types";

export interface PatientProps {
  patient: PatientType;
}

const Patient = ({ patient }: PatientProps) => {
  const { reloadPatient } = useContext<AppContextType>(AppContext);
  const [form, setForm] = useState(false);

  const onToggleForm = () => {
    setForm(!form);
  };

  const afterSubmitAddCheckup = () => {
    onToggleForm();
    reloadPatient(patient._id);
  };

  return (
    <div className="container">
      <h3 className="name">{patient.fullName}</h3>
      <div className="info">
        <p className="info_age">{patient.age} Años</p>
        <p className="info_phoneNumber">{patient.phoneNumber}</p>
      </div>
      {!form && <Button label="Nueva revisión" center onClick={onToggleForm} />}
      {form && (
        <div className="form">
          <AddCheckupForm
            patient={patient._id}
            onCancel={onToggleForm}
            afterSubmit={afterSubmitAddCheckup}
          />
        </div>
      )}
      {!form && (
        <section className="checkups">
          {patient.checkups.map((checkup) => (
            <Checkup checkup={checkup} key={checkup.time} />
          ))}
        </section>
      )}
      <style jsx>{`
        .container {
          font-family: "Roboto", sans-serif;
          display: grid;
          row-gap: 8px;
          justify-items: center;
        }

        .name {
          font-size: 14pt;
          text-align: center;
          color: #fafafa;
        }

        .info {
          font-size: 11pt;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 0 auto;
          width: 150px;
          color: #fafafa;
        }

        .form {
          width: 300px;
        }

        .checkups {
          display: grid;
          row-gap: 12px;
          max-height: 500px;
          overflow-y: auto;
          padding: 0 12px;
          justify-content: center;
        }
      `}</style>
    </div>
  );
};

export default Patient;
