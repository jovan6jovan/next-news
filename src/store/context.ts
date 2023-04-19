import { createContext } from "react";
import { initialState } from "./initial";
import { ContextType } from "./types";

export const Context = createContext<ContextType>({
  state: initialState,
  dispatch: () => {},
});
