import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  boxEmptyState: {
    width: "100%",
    padding: "32px 0px",
    height: "300px",
    objectFit: "contain",
  },
});

const EmptyState = () => {
  const classes = useStyles();
  return (
    <Box textAlign={"center"}>
      <img
        className={classes.boxEmptyState}
        src={
          "https://cdn.dribbble.com/users/3821/screenshots/5673869/attachments/1225509/desert.png"
        }
      />
      <Typography>No item selected yet.</Typography>
    </Box>
  );
};

export default EmptyState;
