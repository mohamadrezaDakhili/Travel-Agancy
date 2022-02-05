import React, { useEffect } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { Slide, SlideProps, SnackbarProps } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { snackbarAction } from "../../redux/action";
import { getSettingsSnackbar } from "../../redux/reducer";
import useDevice from "../../hooks/useDevice";

type TransitionProps = Omit<SlideProps, "direction">;

function TransitionUp(props: TransitionProps) {
  const { isMobile, isDesktop } = useDevice();

  return <Slide {...props} direction={isMobile ? "down" : "right"} />;
}

const CustomSnackbar: React.FC<SnackbarProps> = (props) => {
  const snackbar = useSelector(getSettingsSnackbar);
  const dispatch = useDispatch();
  const { isMobile, isDesktop } = useDevice();

  const handleClose = () => {
    dispatch(
      snackbarAction({
        autoHideDuration: 3000,
        message: snackbar.message,
        servant: snackbar.servant,
        open: false,
      })
    );
  };

  const handleSnackClose: SnackbarProps["onClose"] = (ev, reason) => {
    if (isDesktop) {
      if (reason === "clickaway") {
        return;
      }
      handleClose();
    } else {
      handleClose();
    }
  };

  return (
    <>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={snackbar.autoHideDuration}
        onClose={handleSnackClose}
        TransitionComponent={TransitionUp}
        anchorOrigin={
          isMobile
            ? { horizontal: "center", vertical: "top" }
            : { horizontal: "left", vertical: "bottom" }
        }
        key={TransitionUp ? TransitionUp.name : ""}
        {...props}
        onClick={isMobile ? handleClose : undefined}
      >
        <MuiAlert
          onClose={isDesktop ? handleClose : undefined}
          severity={snackbar.servant}
        >
          {snackbar.message}
        </MuiAlert>
      </Snackbar>
    </>
  );
};

export default CustomSnackbar;
