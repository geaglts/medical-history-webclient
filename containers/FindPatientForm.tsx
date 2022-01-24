import { FormEvent, useRef, useContext } from "react";
import axios from "axios";

import Input from "@components/Input";
import Button from "@components/Button";

import AppContext from "@contexts/AppContext";

import { AppContextType } from "@utils/types/context.types";

const FindPatientForm = () => {
  const { setPatient } = useContext<AppContextType>(AppContext);
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
      />
      <Button type="submit" label="Buscar" />
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
