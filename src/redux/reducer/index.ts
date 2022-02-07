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
  pagination: {
    page: 1,
    limit: 20,
    totalPage: 1,
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

    case ActionTypeEnum.searchItemList: {
      let result: ICard[] = [];
      data.forEach((val) => {
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
        pagination: {
          ...state.pagination,
          page: 1,
        },
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

    case ActionTypeEnum.sortByPriceList: {
      let result: ICard[] = [];
      data.forEach((val) => {
        if (
          val &&
          Number(val.price.split("$")[0]) > action.payload.item[0] &&
          Number(val.price.split("$")[0]) < action.payload.item[1]
        ) {
          result.push(val);
        }
      });
      return {
        ...state,
        list: result,
        pagination: {
          ...state.pagination,
          page: 1,
        },
      };
    }

    case ActionTypeEnum.lowestPriceList: {
      return {
        ...state,
        list: action.payload.arr,
        pagination: {
          ...state.pagination,
          page: 1,
        },
      };
    }

    case ActionTypeEnum.highestPriceList: {
      return {
        ...state,
        list: action.payload.arr,
        pagination: {
          ...state.pagination,
          page: 1,
        },
      };
    }

    case ActionTypeEnum.paginationList: {
      return {
        ...state,
        pagination: {
          page: action.payload.page,
          totalPage: action.payload.totalPage,
          limit: 20,
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

const getPaginationList = (state: { allReducer: IAllReducer }) => {
  return state.allReducer.pagination;
};

export {
  allReducer,
  getSettingsSnackbar,
  getBucketList,
  getList,
  getPaginationList,
};
