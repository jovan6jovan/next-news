import { FC } from "react";

interface Props {
  title: string;
}

const Title: FC<Props> = ({ title }) => <h1 className="title">{title}</h1>;

export default Title;
