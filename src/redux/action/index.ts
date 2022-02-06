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
