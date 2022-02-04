import { TextField } from "@mui/material";
import { styled } from "@mui/styles";

export const CustomTextField = styled(TextField)({
    "& div": {
      background: "white",
      borderRadius: "8px",
    },
    "& input:valid + fieldset": {
      borderColor: "white",
      borderWidth: 1,
    },
    "& input": {
      fontSize: "12px",
      border: "none",
    },
    "& input:invalid + fieldset": {
      borderColor: "red",
      borderWidth: 2,
    },
    "& input:valid:focus + fieldset": {
      borderLeftWidth: 6,
      padding: "4px !important", // override inline-style
    },
  });