import type { HTMLInputTypeAttribute, InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  type: HTMLInputTypeAttribute;
  label: string;
}

const Input = (props: InputProps) => {
  return (
    <div className="container">
      <label className="label" htmlFor={props.id}>
        {props.label}
      </label>
      <input
        name={props.id}
        className="input"
        type={props.type}
        id={props.id}
        {...props}
      />
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr;
          row-gap: 5px;
          font-family: "Montserrat", sans-serif;
          background-color: #fafafa;
          border-radius: 4px;
          position: relative;
          height: 40px;
          padding: 4px 8px;
        }

        .container:focus-within {
          outline: 2px solid #2859e0;
        }

        .label {
          font-size: 8pt;
          font-weight: 700;
          text-transform: uppercase;
          font-family: inherit;
          position: absolute;
          top: -12px;
          left: 8px;
          background-color: #fafafa;
          padding: 2px 4px;
          border-radius: 4px;
          border: 1px solid #101110;
        }

        .input {
          font-family: inherit;
          background-color: transparent;
          border: none;
          font-size: 12pt;
          outline: none;
          border-radius: 4px;
          font-family: "Roboto", sans-serif;
        }
      `}</style>
    </div>
  );
};

export default Input;
