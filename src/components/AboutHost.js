import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BsShieldFillCheck } from "react-icons/bs";

const AboutHost = () => {
  return (
    <Box sx={{ pb: 4, borderBottom: "1px solid #ddd" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignContent: "center",
        }}
      >
        <img
          src={
            "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=400&h=250&q=60"
          }
          alt=""
          style={{
            height: "60px",
            width: "60px",
            borderRadius: "50%",
            alignSelf: "center",
          }}
        />
        <Box sx={{ ml: 2 }}>
          <h2 style={{ marginBottom: 1 }}>Hosted by Gaspard</h2>
          <Box sx={{ display: "flex", pl: 0 }}>
            <Typography sx={{ pl: 0, mt: 0 }}>
              Joined in December 2016
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: "flex", mt: 2 }}>
        <Badge icon={<AiFillStar size={22} />} title="119 Reviews" />
        <Badge
          icon={<BsShieldFillCheck size={22} />}
          title="Identity verified"
          marginLeft={{ ml: 4 }}
        />
      </Box>
      <Box sx={{ mt: 2 }}>
        <Typography>Response rate: 51%</Typography>
        <Typography>Response time: within a day</Typography>

        <Button
          sx={{
            border: "1px solid black",
            borderRadius: 2,
            mt: 2,
            px: 3,
            py: 1,
          }}
        >
          <Typography sx={{color: "#000", fontWeight: 700}}>Contact Host</Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default AboutHost;

const Badge = ({ icon, title, marginLeft }) => {
  return (
    <Box sx={{ display: "flex", alignContent: "center", ...marginLeft }}>
      {icon}
      <Typography sx={{ ml: 1, mb: 2, pt: 0, mt: 0, fontSize: "18px" }}>
        {title}
      </Typography>
    </Box>
  );
};
