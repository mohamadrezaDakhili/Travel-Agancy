import React, { useState, useEffect } from "react";
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { useParams } from "react-router";
import { makeStyles } from "@mui/styles";
import { ICard } from "../../../types/Card";
import { DataDetail } from "../../../utils/DataDetail";
import { useDispatch, useSelector } from "react-redux";
import { bucketListAction, snackbarAction } from "../../../redux/action";
import { getBucketList } from "../../../redux/reducer";

const useStyles = makeStyles({
  root: {
    background: "white",
    padding: "1rem",
    margin: "1rem",
    borderRadius: "1rem",
  },
  boxImage: {
    width: "100%",
    height: "400px",
    display: "flex",
    alignItems: "flex-end",
    position: "relative",
  },
  imageItem: {
    width: "100%",
    height: "400px",
    objectFit: "cover",
    filter: "brightness(0.5)",
    aspectRatio: "16/9",
    borderRadius: "8px",
  },
  titleItem: {
    position: "absolute",
    bottom: "1rem",
    left: "1rem",
    color: "white",
  },
  buttonBucket: {
    width: "100%",
    marginTop: "8px",
  },
  BoxPrice: {
    height: "240px",
    background: "#eeeeee",
    borderRadius: "8px",
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  priceItem: {
    fontWeight: 600,
    fontSize: "16px",
  },
});

const ResortsDetail = () => {
  const classes = useStyles();
  const [itemDetail, setItemDetail] = useState<ICard>();
  let { id } = useParams();
  const dispatch = useDispatch();
  const getBucketListRedux = useSelector(getBucketList);
  const [disabledButton, setDisabledButton] = useState(false);

  useEffect(() => {
    getBucketListRedux.some((item) => itemDetail?.id == item.id)
      ? setDisabledButton(true)
      : setDisabledButton(false);
  }, [getBucketListRedux, itemDetail]);

  useEffect(() => {
    setItemDetail(DataDetail(Number(id)));
  }, [id]);

  const handleClick = () => {
    dispatch(bucketListAction(itemDetail));
    dispatch(
      snackbarAction({
        message: `This item was added to the list`,
        servant: "success",
      })
    );
  };
  return (
    <Container disableGutters maxWidth={"lg"}>
      <Box className={classes.root}>
        <Box className={classes.boxImage}>
          <img className={classes.imageItem} src={itemDetail?.imageUrl} />
          <Typography variant="h4" className={classes.titleItem}>
            {itemDetail?.title}
          </Typography>
        </Box>
        <Grid container spacing={3} p="3rem 1rem 1rem">
          <Grid item xs={12} sm={8} md={9}>
            <Typography
              component={"p"}
              variant="subtitle1"
              style={{ textAlign: "justify" }}
            >
              {itemDetail?.description}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Box className={classes.BoxPrice}>
              <Box display="flex">
                <Avatar style={{ width: "50px", height: "50px" }} />
                <Box ml="1rem">
                  <Typography>Owner</Typography>
                  <Typography>Rate</Typography>
                </Box>
              </Box>
              <Typography component={"p"} variant="body2" mt={"1rem"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </Typography>
              <Box
                display={"flex"}
                alignItems="center"
                justifyContent={"space-between"}
              >
                <Typography variant="body2" mr={".5rem"}>
                  Price:
                </Typography>
                <Box className={classes.priceItem}>{itemDetail?.price}</Box>
              </Box>

              <Button
                disabled={disabledButton}
                variant="contained"
                className={classes.buttonBucket}
                color="success"
                onClick={handleClick}
              >
                Bucket
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ResortsDetail;
