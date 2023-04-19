import { Action, ActionType, State } from "./types";

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionType.SET_IS_DROPDOWN_MENU_OPEN:
      return { ...state, isDropdownMenuOpen: action.payload };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
