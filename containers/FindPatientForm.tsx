import { FormEvent, useRef, useContext, useState } from "react";
import axios from "axios";

import AddPatientForm from "./AddPatientForm";

import Input from "@components/Input";
import Button, { EButtonStyleType } from "@components/Button";

import AppContext from "@contexts/AppContext";

import { AppContextType } from "@utils/types/context.types";
import CFormControl from "@utils/classes/CFormControl";

const FindPatientForm = () => {
  const { setPatient } = useContext<AppContextType>(AppContext);
  const [postPatientForm, setPostPatientForm] = useState(false);
  const form = useRef(null);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      alias: formData.get("username"),
      password: formData.get("password"),
    };
    try {
      const response = await axios.post("patients/credentials", data);
      setPatient(response.data.body);
    } catch (error) {
      // console.log(error.response.data);
    }
  };

  const onTogglePostPatientForm = () => {
    setPostPatientForm(!postPatientForm);
  };

  const onSubmitPostPatientForm = async (e: FormEvent) => {
    e.preventDefault();
    console.count("onSubmitPostPatientForm");
    const FormControl = CFormControl(FormData);
    const form = e.currentTarget as HTMLFormElement;
    const { data } = new FormControl(form);
    try {
      await axios.post("/patients", data);
      form.reset();
      onTogglePostPatientForm();
    } catch (error) {
      // console.log({
      //   location: "FindPatientForm->onSubmitPostPatientForm",
      //   error: error.response.data,
      // });
    }
  };

  if (postPatientForm) {
    return (
      <AddPatientForm
        onCancelForm={onTogglePostPatientForm}
        onSubmitForm={onSubmitPostPatientForm}
      />
    );
  }

  return (
    <form onSubmit={onSubmit} className="form" ref={form}>
      <h2 className="form_title">Buscar paciente</h2>
      <Input
        id="username"
        type="text"
        label="Nombre de usuario"
        placeholder="paciente"
      />
      <Input
        id="password"
        type="password"
        label="Clave de usuario"
        placeholder="********"
        autoComplete="new-password"
      />
      <Button type="submit" label="Buscar" />
      <Button
        type="button"
        label="Agregar paciente"
        styleType={EButtonStyleType.link}
        onClick={onTogglePostPatientForm}
      />
      <style jsx>{`
        .form {
          margin: 0 auto;
          width: 350px;
          display: grid;
          row-gap: 20px;
        }

        .form > .form_title {
          font-family: "Montserrat", sans-serif;
          font-size: 16pt;
          font-weight: 400;
          color: #fafafa;
          text-align: center;
          margin-bottom: 8px;
        }
      `}</style>
    </form>
  );
};

export default FindPatientForm;
