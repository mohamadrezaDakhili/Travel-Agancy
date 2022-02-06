import { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import AddIcon from "@mui/icons-material/Add";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import { useDispatch } from "react-redux";
import { CustomSlider } from "../../../../components/CustomSlider";
import { sortByPriceListAction } from "../../../../redux/action";

const useStyles = makeStyles({
  root: {
    background: "#eeeeee",
    width: "200px",
    padding: "0.5rem",
    borderRadius: "8px",
    marginTop: "24px",
  },
  price: {
    fontSize: "14px",
    margin: "12px 0px",
  },
});

function valuetext(value: number) {
  return `${value} $`;
}

const SortBox = () => {
  const classes = useStyles();
  const [value, setValue] = useState<number[]>([0, 2000]);
  const dispatch = useDispatch();

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
    dispatch(sortByPriceListAction({ item: newValue as number[] }));
  };

  return (
    <Box className={classes.root}>
      <Typography>Sort By:</Typography>
      <Box>
        <Typography className={classes.price}>Price:</Typography>

        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <HorizontalRuleIcon fontSize="small" />
          </Grid>
          <Grid item xs>
            <CustomSlider
              getAriaLabel={(index) =>
                index === 0 ? "Minimum price" : "Maximum price"
              }
              onChange={handleChange}
              getAriaValueText={valuetext}
              value={value}
              valueLabelDisplay="auto"
              min={0}
              max={2000}
            />
          </Grid>
          <Grid item>
            <AddIcon fontSize="small" />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default SortBox;
