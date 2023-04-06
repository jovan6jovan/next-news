import { FC } from "react";
import { ButtonProps } from "./Button.types";

const Button: FC<ButtonProps> = ({ children, cssClass, type, disabled }) => (
  <button className={cssClass} type={type} disabled={disabled}>
    {children}
  </button>
);

export default Button;
