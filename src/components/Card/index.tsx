import React, { FC, useState, useEffect } from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { ICard, ICardItem } from "../../types/Card";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import { useNavigate } from 'react-router-dom';

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
    fontSize: "13px",
    color: "#bebebe",
    marginRight: "8px",
    paddingLeft: "8px",
  },
});

const CardTravel: FC<ICardItem> = (props) => {
  const classes = useStyles();
  const [cardData, setCardData] = useState<ICard>();
  const navigate = useNavigate();

  useEffect(() => {
    setCardData(props.item);
  }, [props.item]);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea
        onClick={() => {
          navigate(`/${cardData?.id}`)
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
        {/* <Button size="small" color="primary">
          Share
        </Button> */}
        <Box display={"flex"}>
          <Typography className={classes.price}>Price:</Typography>
          {cardData?.price}
        </Box>
      </CardActions>
    </Card>
  );
};

export default CardTravel;
