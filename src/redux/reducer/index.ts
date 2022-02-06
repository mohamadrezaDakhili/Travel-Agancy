import { Reducer } from "react";
import { ICard } from "../../types/Card";
import { ActionTypeEnum } from "../../types/enums/ActionTypeEnum";
import IAllReducer from "../../types/reducer/allReducer";
import data from "../../utils/data.json";

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
  list: data,
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

    case ActionTypeEnum.searchItemList: {
      let result: ICard[] = [];
      state.bucket.list.forEach((val) => {
        if (
          val &&
          val.title.toLowerCase().includes(action.payload.item.toLowerCase())
        ) {
          result.push(val);
        }
      });
      return {
        ...state,
        list: result,
      };
    }

    case ActionTypeEnum.deleteItemBucketList: {
      return {
        ...state,
        bucket: {
          ...state.bucket,
          list: state.bucket.list.filter((el) => el.id !== action.payload.id),
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

const getList = (state: { allReducer: IAllReducer }) => {
  return state.allReducer.list;
};
export { allReducer, getSettingsSnackbar, getBucketList, getList };
