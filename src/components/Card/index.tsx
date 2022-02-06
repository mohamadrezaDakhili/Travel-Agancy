import React, { FC, useState, useEffect } from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Skeleton,
  Typography,
} from "@mui/material";
import { ICard, ICardItem } from "../../types/Card";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { bucketListAction, snackbarAction } from "../../redux/action";

const useStyles = makeStyles({
  title: {
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
    fontSize: "16px",
    fontWeight: 600,
    height: "50px",
  },
  description: {
    display: "-webkit-box",
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  price: {
    color: "#bebebe",
    marginRight: "8px",
    paddingLeft: "8px",
  },
});

const CardTravel: FC<ICardItem> = (props) => {
  const classes = useStyles();
  const [cardData, setCardData] = useState<ICard>();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const dispatch = useDispatch();

  useEffect(() => {
    setCardData(props.item);
    setIsLoading(false);
  }, [props.item]);

  const handleClick = () => {
    dispatch(bucketListAction(cardData));
    dispatch(
      snackbarAction({
        message: `This item was added to the list`,
        servant: "success",
      })
    );
  };

  return (
    <>
      {isLoading ? (
        <Skeleton
          variant="rectangular"
          width={345}
          height={369}
          style={{ borderRadius: "12px" }}
        />
      ) : (
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea
            onClick={() => {
              navigate(`/${cardData?.id}`);
            }}
          >
            <CardMedia
              component="img"
              height="180"
              image={cardData?.imageUrl}
              alt={cardData?.title}
            />
            <CardContent>
              <Typography gutterBottom className={classes.title}>
                {cardData?.title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className={classes.description}
              >
                {cardData?.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Box
              display={"flex"}
              justifyContent="space-between"
              width="100%"
              alignItems={"center"}
            >
              <Box display={"flex"}>
                <Typography className={classes.price} variant="body2">
                  Price:
                </Typography>
                <Typography>{cardData?.price}</Typography>
              </Box>
              <Button onClick={handleClick} color="success">
                Bucket
              </Button>
            </Box>
          </CardActions>
        </Card>
      )}
    </>
  );
};

export default CardTravel;
