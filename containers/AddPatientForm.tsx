import { FormEvent } from "react";

import Input from "@components/Input";
import Button, { EButtonColor } from "@components/Button";

export interface IAddPatientFormProps {
  onSubmitForm: (e: FormEvent) => void;
  onCancelForm: () => void;
}

const AddPatientForm = ({
  onSubmitForm,
  onCancelForm,
}: IAddPatientFormProps) => {
  return (
    <form onSubmit={onSubmitForm} className="form">
      <section className="inputs">
        <div className="name horizontal">
          <Input
            id="name"
            type="text"
            label="Nombre"
            placeholder="Nombre"
            required
          />
          <Input
            id="lastName"
            type="text"
            label="Apellido paterno"
            placeholder="Apellido paterno"
            required
          />
          <Input
            id="secondLastName"
            type="text"
            label="Apellido materno"
            placeholder="Apellido materno"
            required
          />
        </div>
        <div className="horizontal">
          <Input
            id="age"
            type="number"
            min={0}
            max={99}
            label="Edad"
            placeholder="Edad"
            required
          />
          <Input
            id="phoneNumber"
            type="text"
            label="Numero de telefono"
            placeholder="Numero de telefono"
            required
          />
        </div>
        <div className="horizontal">
          <Input
            id="alias"
            type="text"
            label="Nobre de usuario"
            placeholder="Nobre de usuario"
            required
          />
          <Input
            id="password"
            type="password"
            label="Contraseña"
            placeholder="Contraseña"
            autoComplete="new-password"
            required
          />
        </div>
      </section>
      <section className="buttons">
        <Button type="submit" label="Agregar" />
        <Button
          type="button"
          label="Cancelar"
          colorType={EButtonColor.danger}
          onClick={onCancelForm}
        />
      </section>
      <style jsx>{`
        .form {
          width: 650px;
          display: grid;
          row-gap: 16px;
        }

        .horizontal {
          display: grid;
          grid-column: 1fr;
          grid-auto-flow: column;
          gap: 8px;
        }

        .inputs {
          display: grid;
          row-gap: 20px;
        }

        .buttons {
          display: grid;
          grid-template-columns: 1fr 1fr;
          column-gap: 8px;
        }

        @media (max-width: 420px) {
          .form {
            width: 100%;
            padding: 0 12px;
          }

          .horizontal {
            grid-auto-flow: row;
            gap: 16px;
          }

          .inputs {
            row-gap: 24px;
          }
        }
      `}</style>
    </form>
  );
};

export default AddPatientForm;
