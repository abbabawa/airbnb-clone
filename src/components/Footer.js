import { Box, Button, Container, Link, Paper, Stack } from "@mui/material";
import React from "react";
import { BsGlobe } from "react-icons/bs";
import { IoChevronUpOutline } from "react-icons/io5";
import {
  flexBetweenCenter,
  fullWidthFlex,
  justifyCenter,
} from "themes/commonStyles";

const footerLinks = [
  { id: 1, text: "Privacy", url: "#" },
  { id: 2, text: "Terms", url: "#" },
  { id: 3, text: "Sitemap", url: "#" },
  { id: 4, text: "Destinations", url: "#" },
];

const Footer = () => {
  return (
    <Box sx={{ ...fullWidthFlex, borderTop: "1px solid #ddd" }}>
      <Container maxWidth="xl">
        <Box sx={{ ...flexBetweenCenter, width: "100%" }}>
          <Stack>
            <Paper>
              <Link href="">2023 Airbnb Copyright</Link>
            </Paper>
            {footerLinks.map((link) => {
              return (
                <Paper key={link.id}>
                  <Link href={link.url}>{link.text}</Link>
                </Paper>
              );
            })}
          </Stack>
          <Stack>
            <Paper sx={justifyCenter}>
              <Button>
                <Box sx={{ ...justifyCenter, mr: 1 }}>
                  <BsGlobe size={24} />
                </Box>
                Emglish (CA)
              </Button>
              <Button>$CAD</Button>
              <Button>
                Support and Resources
                <Box sx={{ ...justifyCenter, ml: 1 }}>
                  <IoChevronUpOutline />
                </Box>
              </Button>
            </Paper>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
