import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Container: FC<Props> = ({ children }) => (
  <div className="container">{children}</div>
);

export default Container;
