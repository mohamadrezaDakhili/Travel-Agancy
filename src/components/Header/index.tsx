import React, { useState } from "react";
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
  const [first, setfirst] = useState("");
  let navigate = useNavigate();
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
              <Typography variant="h5">Travel Agancy</Typography>
              <Box>
                <IconButton
                  size="large"
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <Badge badgeContent={17} color="error">
                    <HomeIcon />
                  </Badge>
                </IconButton>
                <IconButton
                  size="large"
                  aria-label="home"
                  color="inherit"
                  onClick={() => {
                    navigate("/bucket");
                  }}
                >
                  <Badge badgeContent={17} color="error">
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
