import { AlertColor, Color } from "@mui/material";

export default interface SettingsReducerDto {
  snackbar: {
    message: string | null;
    servant: AlertColor;
    autoHideDuration?: number;
    open?: boolean;
  };

  showModalUsername?: boolean;
}
