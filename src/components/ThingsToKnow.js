import { Box, Typography } from "@mui/material";
import React from "react";
import { AiFillCaretRight, AiOutlineRight } from "react-icons/ai";
import { BiChevronRight } from "react-icons/bi";
import { BsCaretRight } from "react-icons/bs";

const ThingsToKnow = () => {
  return (
    <Box sx={{ pb: 4, pt: 2, borderBottom: "1px solid #ddd" }}>
      <h2>Things to know</h2>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ flex: 1 }}>
          <ItemColumns
            title={"House rules"}
            content={
              <>
                <Typography sx={{ mb: 2 }}>
                  Check-in: 4:00 PM - 6:00 PM
                </Typography>
                <Typography sx={{ mb: 2 }}>Checkout before 12:00 PM</Typography>
                <Typography sx={{ mb: 2 }}>2 guests maximum</Typography>
              </>
            }
          />
        </Box>
        <Box sx={{ flex: 1 }}>
          <ItemColumns
            title={"Safety & property"}
            content={
              <>
                <Typography sx={{ mb: 2 }}>
                  Carbon monoxide alarm not reported
                </Typography>
                <Typography sx={{ mb: 2 }}>
                  Nearby lake, river, other body of water
                </Typography>
                <Typography sx={{ mb: 2 }}>Smoke alarm</Typography>
              </>
            }
          />
        </Box>
        <Box sx={{ flex: 1 }}>
          <ItemColumns
            title={"Cancellation policy"}
            content={
              <>
                <Typography sx={{ mb: 2 }}>
                  Free cancellation for 48 hours.
                </Typography>
                <Typography sx={{ mb: 2 }}>
                  Review the Host’s full cancellation policy which applies even
                  if you cancel for illness or disruptions caused by COVID-19.
                </Typography>
              </>
            }
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ThingsToKnow;

const ItemColumns = ({ title, content }) => {
  return (
    <Box>
      <h3>{title}</h3>
      {content}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Typography
          variant="span"
          sx={{ fontWeight: 800, textDecoration: "underline" }}
        >
          Show more
        </Typography>
        <BiChevronRight size={22} />
      </Box>
    </Box>
  );
};
