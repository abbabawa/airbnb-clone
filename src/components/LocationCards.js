import React, { useState } from "react";

import { locations as cardLocations } from "data/mock-data";
import { Box, Grid } from "@mui/material";
import CarouselCard from "./CarouselCard";

const LocationCards = () => {
  const [cards] = useState(cardLocations);
  if (!cards.length) return null;
  return (
    <Box sx={{ mx: 2 }}>
      <Grid container rowSpacing={3} columnSpacing={3}>
        {cards.map((location) => {
          return (
            <Grid item key={location.id} xs={12} sm={6} md={4} lg={3}>
              <CarouselCard location={location} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default LocationCards;
