import React from "react";
import { Box, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch } from "react-redux";
import { CustomTextField } from "../../../../components/CustomTextField";
import { searchTitleListAction } from "../../../../redux/action";

const useStyles = makeStyles({
  root: {
    background: "#eeeeee",
    width: "200px",
    padding: "0.5rem",
    borderRadius: "8px",
  },
});

const FilterBox = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleChange = (event: React.ChangeEvent<{ value: string }>) => {
    dispatch(searchTitleListAction({ item: event.target.value }));
  };

  return (
    <Box className={classes.root}>
      <Typography>Filter By:</Typography>
      <Box mt="12px">
        <CustomTextField
          variant="outlined"
          size="small"
          id="search-title"
          label="Search title"
          InputProps={{
            endAdornment: <SearchIcon />,
          }}
          InputLabelProps={{ style: { fontSize: 12 } }}
          onChange={handleChange}
        />
      </Box>
    </Box>
  );
};

export default FilterBox;
