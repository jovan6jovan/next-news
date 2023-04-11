import { FC } from "react";
import { SubtitleProps } from "./Subtitle.types";

const Subtitle: FC<SubtitleProps> = ({ subtitle }) => (
  <p className="subtitle">{subtitle}</p>
);

export default Subtitle;
