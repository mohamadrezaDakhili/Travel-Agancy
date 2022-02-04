import { useMediaQuery, useTheme } from "@mui/material";

const useDevice = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));

  return {
    isMobile,
    isDesktop,
  };
};

export default useDevice;
