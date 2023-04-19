import { Dispatch } from "react";

export enum ActionType {
  SET_IS_DROPDOWN_MENU_OPEN = "SET_IS_DROPDOWN_MENU_OPEN",
}

export interface Action {
  type: ActionType;
  payload: boolean;
}

export interface State {
  isDropdownMenuOpen: boolean;
}

export interface ContextType {
  state: State;
  dispatch: Dispatch<Action>;
}
