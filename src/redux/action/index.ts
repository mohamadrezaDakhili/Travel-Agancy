import { ActionTypeEnum } from "../../types/enums/ActionTypeEnum";
import SettingsReducerDto from "../../types/reducer/settings";

export const snackbarAction = (payload: SettingsReducerDto["snackbar"]) => ({
  type: ActionTypeEnum.settingSnackbar,
  payload: Object.assign({}, !payload.open && { open: true }, payload),
});
