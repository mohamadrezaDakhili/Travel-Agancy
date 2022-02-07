import { Box, Container, IconButton, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useDispatch, useSelector } from "react-redux";
import BucketCard from "../../components/BucketCard";
import { getBucketList } from "../../redux/reducer";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useEffect, useState } from "react";
import { deleteItemBucketListAction } from "../../redux/action";
import { useNavigate } from "react-router-dom";
import EmptyState from "../EmptyState";

const useStyles = makeStyles({
  root: {
    background: "white",
    padding: "1rem",
    margin: "1rem",
    borderRadius: "1rem",
  },
  boxTotal: {
    width: "100%",
    padding: "24px",
    display: "flex",
    justifyContent: "space-between",
  },
  boxEmptyState: {
    width: "100%",
    padding: "32px 0px",
    height: "300px",
    objectFit: "contain",
  },
});

const Bucket = () => {
  const classes = useStyles();
  const getBucketListRedux = useSelector(getBucketList);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    let total = 0;
    getBucketListRedux.length > 0 &&
      getBucketListRedux.map((item: any) => {
        total = total + Number(item.price.split("$")[0]);
      });
    setTotalPrice(total);
  }, [getBucketListRedux]);

  return (
    <Container disableGutters maxWidth={"md"}>
      <Box className={classes.root}>
        {getBucketListRedux.length > 0 ? (
          <>
            {getBucketListRedux.map((item, index) => (
              <BucketCard key={index} item={item} />
            ))}
            <Box className={classes.boxTotal}>
              <Box display={"flex"} alignItems={"center"}>
                <IconButton
                  style={{ marginRight: "12px" }}
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  <KeyboardBackspaceIcon />
                </IconButton>
                <Typography variant="body2">Back to List</Typography>
              </Box>
              <Box display={"flex"} alignItems="center">
                <Typography marginRight={"32px"}>Total:</Typography>
                <Typography>{totalPrice} $</Typography>
              </Box>
            </Box>
          </>
        ) : (
          <EmptyState />
        )}
      </Box>
    </Container>
  );
};

export default Bucket;
