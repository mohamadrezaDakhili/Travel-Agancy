import { Box, IconButton, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { FC } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { IBucketCard } from "../../types/BucketCard";
import { useDispatch } from "react-redux";
import { deleteItemBucketListAction } from "../../redux/action";

const useStyles = makeStyles({
  root: {
    display: "flex",
    padding: "12px 24px",
  },
  boxCard: {
    width: "100%",
    height: "100px",
    background: "#eeeeee",
    display: "flex",
    alignItems: "center",
    padding: "0px 24px",
    justifyContent: "space-between",
  },
  boxClose: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "12px",
  },
  boxImage: {
    height: "80px",
    marginRight: "8px",
    borderRadius: "8px",
    boxShadow: "0px 4px 26px 1px rgba(0,0,0,0.14)",
  },
});

const BucketCard: FC<IBucketCard> = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleDeleteItem = (id: number) => {
    dispatch(deleteItemBucketListAction({ id }));
  };

  return (
    <Box className={classes.root}>
      <Box className={classes.boxCard}>
        <Box display="flex" alignItems={"center"}>
          <img
            loading="lazy"
            className={classes.boxImage}
            src={props.item.imageUrl}
            alt={props.item.title}
          />
        </Box>
        <Typography variant="body2">{props.item.title}</Typography>
        <Typography ml={"8px"} variant="h6">
          {props.item.price}
        </Typography>
      </Box>
      <Box className={classes.boxClose}>
        <IconButton onClick={() => handleDeleteItem(props.item.id)}>
          <CloseIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default BucketCard;
