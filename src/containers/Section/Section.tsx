import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Section: FC<Props> = ({ children }) => (
  <div className="section">{children}</div>
);

export default Section;
