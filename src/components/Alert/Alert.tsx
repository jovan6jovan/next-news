import { FC } from "react";
import { AlertProps } from "./Alert.types";

const Alert: FC<AlertProps> = ({ children }) => (
  <div className="notification is-link is-light">{children}</div>
);

export default Alert;
