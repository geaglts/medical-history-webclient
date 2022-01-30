import { FormEvent, useRef, useContext, useState, useEffect } from "react";
import axios from "axios";

import AddPatientForm from "./AddPatientForm";

import Input from "@components/Input";
import Loading from "@components/Loading";
import Button, { EButtonStyleType } from "@components/Button";

import AppContext from "@contexts/AppContext";

import { AppContextType } from "@utils/types/context.types";
import CFormControl from "@utils/classes/CFormControl";

const FindPatientForm = () => {
  const { setPatient } = useContext<AppContextType>(AppContext);
  const [postPatientForm, setPostPatientForm] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(false);
  const form = useRef(null);

  useEffect(() => {
    console.log("hola");
    const timeoutId = setTimeout(() => {
      setNotFound(false);
    }, 3000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [notFound]);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      alias: formData.get("username"),
      password: formData.get("password"),
    };
    try {
      setLoading(true);
      const response = await axios.post("patients/credentials", data);
      form.current.reset();
      if (response.data) {
        setPatient(response.data.body);
        return;
      }
      setNotFound(true);
      setLoading(false);
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
      {loading && <Loading />}
      {!loading && (
        <>
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
            autoComplete="false"
          />
          <Button type="submit" label="Buscar" />
          <Button
            type="button"
            label="Agregar paciente"
            styleType={EButtonStyleType.link}
            onClick={onTogglePostPatientForm}
          />
          {notFound && (
            <p className="bad-response br-position">
              El paciente no fue encontrado
            </p>
          )}
        </>
      )}
      <style jsx>{`
        .form {
          margin: 0 auto;
          width: 350px;
          display: grid;
          row-gap: 20px;
          position: relative;
        }

        .form > .form_title {
          font-family: "Montserrat", sans-serif;
          font-size: 16pt;
          font-weight: 400;
          color: #fafafa;
          text-align: center;
          margin-bottom: 8px;
        }

        .br-position {
          position: absolute;
          bottom: -40px;
        }
      `}</style>
    </form>
  );
};

export default FindPatientForm;
