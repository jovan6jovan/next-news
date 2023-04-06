import { FC } from "react";
import { LabelProps } from "./Label.types";

const Label: FC<LabelProps> = ({ children, cssClass }) => (
  <label className={cssClass}>{children}</label>
);

export default Label;
