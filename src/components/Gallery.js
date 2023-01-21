import { Box } from "@mui/material";
import React from "react";

const containerStyles = {
  width: "50%",
  height: "100%",
  overflow: "hidden",
};

const Gallery = ({ images }) => {
  return (
    <Box sx={{ px: 4, display: "flex", height: 300, mt: 2 }}>
      <Box
        sx={{
            ...containerStyles,
          borderTopLeftRadius: 10,
          borderBottomLeftRadius: 10,
        }}
      >
        <img
          src={images[0].url}
          alt="location image"
          style={{ width: "100%" }}
        />
      </Box>
      <Box
        sx={{
          ...containerStyles,
          borderTopRightRadius: 10,
          borderBottomRightRadius: 10,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          rowGap: 1,
          columnGap: 1,
          pl: 1,
        }}
      >
        {images.map((image) => (
          <img
            key={image.id}
            src={image.url}
            alt="location image"
            style={{ width: "100%" }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Gallery;
