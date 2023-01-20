import React from 'react'
import { Box, Container, CssBaseline } from "@mui/material";
import OptionsTab from "components/OptionsTab";
import LocationCards from "components/LocationCards";
import Footer from "components/Footer";
import FooterMenu from "components/FooterMenu";
import { displayOnDesktop } from "themes/commonStyles";
import MobileFooter from "components/MobileFooter";
import Header from "components/Header/Header";
import PageTitle from 'components/PageTitle';
import Gallery from 'components/Gallery';


import { locations } from "data/mock-data";

const RoomPage = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Box sx={{ display: "flex", flexDirection: "column", height: "100vh", overflowY: 'scroll' }}>
        <Box>
          <Header searchComponent="generalSearch" maxWidth="lg" />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            height: 100,
            // overflowY: "scroll",
            // border: "1px solid blue",
          }}
        >
          <Container maxWidth={"lg"} sx={{ mb: 3, }} >
            <PageTitle />
            <Gallery images={locations[1].locationImages} />
            {/* <LocationCards /> */}
            {/* <Box sx={{display: {sx: 'flex', md: 'none'}}}>
              <MobileFooter />
            </Box> */}
          </Container>
        </Box>
        <Box sx={{display: {xs: 'flex', md: 'none'}}}>
          <FooterMenu />
        </Box>
        <Box sx={displayOnDesktop}><Footer /></Box>
      </Box>
    </React.Fragment>
  )
}

export default RoomPage