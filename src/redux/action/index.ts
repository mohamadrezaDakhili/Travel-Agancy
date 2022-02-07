import { ICard } from "../../types/Card";
import { ActionTypeEnum } from "../../types/enums/ActionTypeEnum";
import SettingsReducerDto from "../../types/reducer/settings";

export const snackbarAction = (payload: SettingsReducerDto["snackbar"]) => ({
  type: ActionTypeEnum.settingSnackbar,
  payload: Object.assign({}, !payload.open && { open: true }, payload),
});

export const bucketListAction = (payload: any) => ({
  type: ActionTypeEnum.bucketList,
  payload,
});
export const deleteItemBucketListAction = (payload: { id: number }) => ({
  type: ActionTypeEnum.deleteItemBucketList,
  payload,
});

export const searchTitleListAction = (payload: { item: string }) => ({
  type: ActionTypeEnum.searchItemList,
  payload,
});

export const sortByPriceListAction = (payload: { item: number[] }) => ({
  type: ActionTypeEnum.sortByPriceList,
  payload,
});

export const lowestPriceListAction = (payload: { arr: ICard[] }) => ({
  type: ActionTypeEnum.lowestPriceList,
  payload,
});

export const highestPriceListAction = (payload: { arr: ICard[] }) => ({
  type: ActionTypeEnum.highestPriceList,
  payload,
});

export const paginationListAction = (payload: {
  page: number;
  totalPage: number;
}) => ({
  type: ActionTypeEnum.paginationList,
  payload,
});
