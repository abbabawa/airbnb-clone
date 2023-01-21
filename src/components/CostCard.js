import { Box, Button, Paper, Typography } from "@mui/material";
import { pink } from "@mui/material/colors";
import React from "react";
import { flexBetween } from "themes/commonStyles";

const CostCard = () => {
  return (
    <Paper elevation={5} sx={{ p: 3, borderRadius: 3 }}>
      <Box sx={{ ...flexBetween, alignContent: "flex-end" }}>
        <Box sx={{ display: "flex", alignContent: "flex-end" }}>
          <h2 style={{ margin: 0 }}>$238</h2>
          <Typography variant="span" sx={{ alignSelf: "end", ml: 2 }}>
            night
          </Typography>
        </Box>
        <Typography
          variant="span"
          sx={{
            alignSelf: "end",
            textDecoration: "underline",
            textTransform: "lowercase",
          }}
        >
          2 reviews
        </Typography>
      </Box>
      <Box
        sx={{
          border: "1px solid rgb(176, 176, 176)",
          borderRadius: 3,
          mt: 3,
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box
            sx={{
              borderRight: "1px solid rgb(176, 176, 176)",
              borderBottom: "1px solid rgb(176, 176, 176)",
              flex: 1,
              p: 2,
            }}
          >
            <Typography sx={{ fontSize: "10px" }}>CHECK IN</Typography>
            <Typography sx={{}}>6/5/2023</Typography>
          </Box>
          <Box
            sx={{
              flex: 1,
              p: 2,
              borderBottom: "1px solid rgb(176, 176, 176)",
            }}
          >
            <Typography sx={{ fontSize: "10px" }}>CHECK OUT</Typography>
            <Typography sx={{}}>6/5/2023</Typography>
          </Box>
        </Box>
        <Box sx={{ p: 2 }}>
          <Typography sx={{ fontSize: "10px" }}>GUESTS</Typography>
          <Typography sx={{}}>1 guest</Typography>
        </Box>
      </Box>
      <Button
        sx={{
          px: 4,
          py: 2,
          background: pink[700],
          color: "#FFF",
          width: "100%",
          mt: 3,
          borderRadius: 3,
        }}
      >
        <Typography sx={{ fontSize: "14px", fontWeight: 700 }}>
          Reserve
        </Typography>
      </Button>
      <Typography sx={{ textAlign: "center", mt: 2 }}>
        You won't be charged yet
      </Typography>
      <Box sx={{ mt: 3, borderBottom: "1px solid #DDD", pb: 2 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography sx={{}}>$238 x 5 nights </Typography>
          <Typography>$1,192</Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography sx={{}}>Service fee</Typography>
          <Typography>$168</Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
        <Typography sx={{ fontWeight: 700 }}>Total before taxes</Typography>
        <Typography sx={{ fontWeight: 700 }}>$1,360</Typography>
      </Box>
    </Paper>
  );
};

export default CostCard;
