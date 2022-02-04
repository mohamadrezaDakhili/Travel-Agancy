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

const useStyles = makeStyles({
  root: {
    // margin: "1rem",
  },
  title: {
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  description: {
    display: "-webkit-box",
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
});

const CardTravel: FC<ICardItem> = (props) => {
  const classes = useStyles();
  const [cardData, setCardData] = useState<ICard>();

  useEffect(() => {
    setCardData(props.item);
  }, [props.item]);

  return (
    <Card className={classes.root} sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          image={cardData?.imageUrl}
          alt={cardData?.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" className={classes.title}>
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
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardTravel;
