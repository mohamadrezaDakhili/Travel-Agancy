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
  bucket: {
    list: [],
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

    case ActionTypeEnum.bucketList: {
      return {
        ...state,
        bucket: {
          ...state.bucket,
          list: state.bucket.list.some((item) => action.payload.id == item.id)
            ? [...state.bucket.list]
            : [...state.bucket.list, action.payload],
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

const getBucketList = (state: { allReducer: IAllReducer }) => {
  return state.allReducer.bucket.list;
};

export { allReducer, getSettingsSnackbar, getBucketList };
