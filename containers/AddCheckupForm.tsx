import { FormEvent, useRef } from "react";
import axios from "axios";
import type { FTAddCheckup } from "@utils/types/form.types";

import Button from "@components/Button";
import Input from "@components/Input";
import { EButtonColor } from "@components/Button";

import CFormControl from "@utils/classes/CFormControl";

export interface IAddCheckupFormProps {
  patient: string;
  onCancel: () => void;
  afterSubmit?: (status: unknown) => void;
}

const AddCheckupForm = ({
  patient,
  onCancel,
  afterSubmit,
}: IAddCheckupFormProps) => {
  const form = useRef(null);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const FormControl = CFormControl(FormData);
    const { data } = new FormControl<FTAddCheckup>(form.current);
    try {
      const res = await axios.post("/checkups", { ...data, patient });
      form.current.reset();
      afterSubmit && afterSubmit(res.data);
    } catch (error) {
      // console.log({ location: "AddCheckupForm", error: error.response.data });
    }
  };

  return (
    <form ref={form} onSubmit={onSubmit} className="form">
      <Input
        id="bloodPressure"
        label="Presión arterial"
        type="text"
        placeholder="Presión arterial"
      />
      <Input
        id="heartRate"
        label="Ritmo cardiaco"
        type="text"
        placeholder="Ritmo cardiaco"
      />
      <Input
        id="anotation"
        label="Anotaciones"
        type="text"
        placeholder="Anotaciones"
      />
      <div className="buttons">
        <Button label="Agregar" />
        <Button
          label="Cancelar"
          type="button"
          colorType={EButtonColor.danger}
          onClick={onCancel}
        />
      </div>
      <style jsx>{`
        .form {
          margin: 12px 0;
          width: 100%;
          display: grid;
          row-gap: 16px;
        }

        .buttons {
          display: grid;
          grid-template-columns: 1fr 1fr;
          column-gap: 12px;
        }
      `}</style>
    </form>
  );
};

export default AddCheckupForm;
