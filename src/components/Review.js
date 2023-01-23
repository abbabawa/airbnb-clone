import { Box, Typography } from "@mui/material";
import React from "react";

const Review = () => {
  return (
    <Box sx={{ px: 4, pb: 4, borderBottom: '1px solid #ddd' }}>
      <h2 style={{ marginBottom: 1 }}>2 reviews</h2>
      <Typography sx={{}}>
        Average rating will appear after 3 reviews
      </Typography>
      <Box sx={{mt: 2, display: 'flex'}}>
        <ReviewItem />
        <ReviewItem />
      </Box>
      <Typography sx={{ mt: 2, textDecoration: "underline", fontWeight: 800 }}>Show more</Typography>
    </Box>
  );
};

export default Review;

const ReviewItem = () => {
  return (
    <Box sx={{width: "50%",}}>
      <Box sx={{ mb: 2, display: "flex", justifyContent: "flex-start", alignContent: 'center' }}>
        <img style={{borderRadius: "50%", width: '50px', height: '50px'}} alt="" src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=400&h=250&q=80" />
        <Box sx={{ml: 1}}>
          <h4 style={{ marginBottom: 1, marginTop: 1}}>Matthijs</h4>
          <Typography sx={{}}>August 2022</Typography>
        </Box>
      </Box>
      <Typography sx={{}}>
        Magnifique! The photos of this listing do not do this huge treehouse
        justice. You have a tree house complete with toilet and sink and a
      </Typography>
      
    </Box>
  );
};
