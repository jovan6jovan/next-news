import { FC, ReactNode, useReducer } from "react";
import { Context } from "./context";
import { initialState } from "./initial";
import { reducer } from "./reducer";
import { ContextType } from "./types";

interface Props {
  children: ReactNode;
}

export const Provider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const store: ContextType = {
    state,
    dispatch,
  };

  return <Context.Provider value={store}>{children}</Context.Provider>;
};
