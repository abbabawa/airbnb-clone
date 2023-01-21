import { Box, Typography } from "@mui/material";
import React from "react";
import { BsUpload } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";

const PageTitle = () => {
  return (
    <Box sx={{ px: 4 }}>
      <Box>
        <h1>Lov 'Nid Passion cabin for 2 people</h1>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", pl: 0, textDecoration: "underline" }}>
          <Typography sx={{ pl: 0, fontWeight: "600" }}>2 reviews</Typography>
          <Typography sx={{ fontWeight: "600", ml: 1 }}>
            Joncherey, Bourgogne-Franche-Comté, France
          </Typography>
        </Box>
        <Box sx={{ display: "flex", textDecoration: "underline" }}>
          <Box
            sx={{
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <BsUpload size={18} />
            <Typography component={"p"}>Share</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
              ml: 2
            }}
          >
            <FaRegHeart size={18}  />
            <Typography component={"p"}>Save</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PageTitle;
