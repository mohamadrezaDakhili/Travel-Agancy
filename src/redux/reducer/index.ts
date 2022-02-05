import { Reducer } from "react";
import { ActionTypeEnum } from "../../types/enums/ActionTypeEnum";
import IAllReducer from "../../types/reducer/allReducer";

const initialState: IAllReducer = {
  snackbar: {
    autoHideDuration: 3000,
    message: null,
    servant: "info",
    open: false,
  },
};

const allReducer: Reducer<IAllReducer, any> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ActionTypeEnum.settingSnackbar: {
      return {
        ...state,
        snackbar: {
          ...state.snackbar,
          ...action.payload,
        },
      };
    }

    default:
      return state;
  }
};
const getSettingsSnackbar = (state: { allReducer: IAllReducer }) => {
  return state.allReducer.snackbar;
};

export { allReducer, getSettingsSnackbar };
