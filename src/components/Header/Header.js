// https://www.youtube.com/watch?v=1k3HxJRBVgI
import { Box, Container } from "@mui/material";
import React from "react";

import {
  dFlex,
  displayOnDesktop,
  flexBetweenCenter,
} from "themes/commonStyles";
import LocationSearch from "./LocationSearch";
import Logo from "../Logo";
import MobileSearch from "./MobileSearch";
import ProfileSettings from "./ProfileSettings";

const Header = () => {
  return (
    <Box
      sx={{
        ...dFlex,
        minHeight: 70,
        border: "1px solid #ddd",
      }}
    >
      <Container maxWidth={"xl"}>
        <Box
          sx={{
            ...flexBetweenCenter,
            minHeight: 90,
            px: 4,
          }}
        >
          <Box sx={displayOnDesktop}>
            <Logo />
          </Box>
          <Box sx={displayOnDesktop}>
            <LocationSearch />
          </Box>
          <Box sx={displayOnDesktop}>
            <ProfileSettings />
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <MobileSearch />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
