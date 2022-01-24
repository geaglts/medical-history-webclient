import type { ButtonHTMLAttributes } from "react";

export enum EButtonColor {
  danger = "#ec2c2c",
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  center?: boolean;
  colorType?: EButtonColor;
}

const Button = ({ label, center, colorType, ...rest }: ButtonProps) => {
  return (
    <button {...rest} className="container">
      {label}
      <style jsx>{`
        .container {
          height: 40px;
          border: none;
          background-color: ${colorType ? colorType : "#2859e0"};
          border-radius: 4px;
          box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
          font-family: "Roboto", sans-serif;
          font-size: 12pt;
          font-weight: 700;
          color: #fafafa;
          cursor: pointer;
          transition: all 400ms ease;
          ${center
            ? `
            padding: 0 12px;
          `
            : ""}
        }

        .container:hover {
          transition: all 300ms ease;
          color: ${colorType ? colorType : "#2859e0"};
          background-color: #fafafa;
        }
      `}</style>
    </button>
  );
};

export default Button;
