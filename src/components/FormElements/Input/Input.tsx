import { FC } from "react";
import { InputProps } from "./Input.types";

const Input: FC<InputProps> = ({
  cssClass,
  type,
  placeholder,
  value,
  onChange,
}) => (
  <input
    className={cssClass}
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  />
);

export default Input;
