import { ReactNode } from "react";

type ButtonType = "button" | "submit" | "reset" | undefined;

export interface ButtonProps {
  children: ReactNode;
  cssClass?: string;
  type?: ButtonType;
  disabled?: boolean;
}
