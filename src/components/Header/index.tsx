import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import { Badge, Box, IconButton } from "@mui/material";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getBucketList } from "../../redux/reducer";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Header = (props: Props) => {
  const getBucketListRedux = useSelector(getBucketList);
  const navigate = useNavigate();

  return (
    <>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar style={{ background: "#414141e8" }}>
          <Toolbar>
            <Box
              width="100%"
              display={"flex"}
              justifyContent="space-between"
              alignItems={"center"}
            >
              <Box
                onClick={() => {
                  navigate("/");
                }}
                style={{ cursor: "pointer" }}
              >
                <Typography variant="h5">Travel Agancy</Typography>
              </Box>
              <Box>
                <IconButton
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
                  aria-label="home"
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
