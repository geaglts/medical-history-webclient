import type { ButtonHTMLAttributes } from "react";

export enum EButtonStyleType {
  normal = " normal",
  link = " link",
}

export enum EButtonColor {
  danger = "#ec2c2c",
  action = "#af2cec",
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  center?: boolean;
  colorType?: EButtonColor;
  styleType?: EButtonStyleType;
}

const Button = ({
  label,
  center,
  colorType,
  styleType = EButtonStyleType.normal,
  ...rest
}: ButtonProps) => {
  return (
    <button {...rest} className={`container${styleType}`}>
      {label}
      <style jsx>{`
        .container {
          background-color: transparent;
          border: none;
          font-family: "Roboto", sans-serif;
          cursor: pointer;
          transition: all 400ms ease;
          ${center
            ? `
            padding: 0 12px;
            `
            : ""}
        }

        .normal {
          height: 40px;
          border-radius: 4px;
          font-size: 12pt;
          font-weight: 700;
          background-color: ${colorType ? colorType : "#2859e0"};
          box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
          color: #fafafa;
        }

        .normal:hover {
          transition: all 300ms ease;
          color: ${colorType ? colorType : "#2859e0"};
          background-color: #fafafa;
        }

        .link {
          color: #fafafa;
          text-decoration: underline;
          font-size: 12pt;
        }

        .link:hover {
          transition: all 300ms ease;
          color: ${colorType ? colorType : "#2859e0"};
        }
      `}</style>
    </button>
  );
};

export default Button;
