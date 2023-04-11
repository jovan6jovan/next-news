import { FC } from "react";
import { TitleProps } from "./Title.types";

const Title: FC<TitleProps> = ({ title }) => <h1 className="title">{title}</h1>;

export default Title;
