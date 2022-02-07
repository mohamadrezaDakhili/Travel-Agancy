import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";

import { Badge, Box, IconButton } from "@mui/material";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getBucketList } from "../../redux/reducer";
import { makeStyles } from "@mui/styles";
import HideOnScroll, { Props } from "../../utils/HideOnScroll";

const useStyles = makeStyles({
  boxHeader: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textLogo: {
    cursor: "pointer",
  },
});

const Header = (props: Props) => {
  const classes = useStyles();
  const getBucketListRedux = useSelector(getBucketList);
  const navigate = useNavigate();

  return (
    <>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar style={{ background: "#414141e8" }}>
          <Toolbar>
            <Box className={classes.boxHeader}>
              <Box
                onClick={() => {
                  navigate("/");
                }}
                className={classes.textLogo}
              >
                <Typography variant="h5">Travel Agancy</Typography>
              </Box>
              <Box>
                <IconButton
                  aria-label="home"
                  size="large"
                  color="inherit"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  <HomeIcon />
                </IconButton>
                <IconButton
                  size="large"
                  aria-label="bucket"
                  color="inherit"
                  onClick={() => {
                    navigate("/bucket");
                  }}
                >
                  <Badge badgeContent={getBucketListRedux.length} color="error">
                    <LocalGroceryStoreIcon />
                  </Badge>
                </IconButton>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      {props.children}
    </>
  );
};

export default Header;
