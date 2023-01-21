import { StarBorderOutlined } from "@mui/icons-material";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { pink } from "@mui/material/colors";
import React from "react";
import { AiOutlineCar, AiOutlineRight } from "react-icons/ai";
import { BiAlarmOff, BiCoffee } from "react-icons/bi";
import {
  FaHotel,
  FaRegCalendar,
  FaRegHeart,
  FaRegStar,
  FaStar,
} from "react-icons/fa";
import { flexBetween } from "themes/commonStyles";
import CostCard from "./CostCard";

const DetailSection = () => {
  return (
    <Box sx={{ px: 4, mt: 4 }}>
      <Grid container>
        <Grid item xs={8} sx={{ pr: 12 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              //   pr: 8,
              borderBottom: "1px solid #ddd",
              pb: 2,
            }}
          >
            <Box>
              <h2 style={{ marginBottom: 1 }}>Treehouse hosted by Gaspard</h2>
              <Box sx={{ display: "flex", pl: 0 }}>
                <Typography sx={{ pl: 0, mt: 0 }}>
                  2 guests . 1 bedroom . 1 bed . 1 bath
                </Typography>
              </Box>
            </Box>
            <img
              src={
                "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=400&h=250&q=60"
              }
              alt=""
              style={{ height: "60px", width: "60px", borderRadius: "50%" }}
            />
          </Box>
          <Box sx={{ borderBottom: "1px solid #ddd", pb: 2 }}>
            <DetailItem
              icon={<FaRegStar size={30} />}
              title={"Experienced host"}
              subtitle={"Gaspard has 117 reviews for other places."}
            />
            <DetailItem
              icon={<FaRegHeart size={30} />}
              title={"Highly rated Host"}
              subtitle={
                "Gaspard has received 5-star ratings from 90% of recent guests."
              }
            />
            <DetailItem
              icon={<FaRegCalendar size={30} />}
              title={"Free cancellation for 48 hours."}
              subtitle={""}
            />
          </Box>
          <Box sx={{ borderBottom: "1px solid #DDD", pb: 2 }}>
            <h1 style={{ fontWeight: 700 }}>
              <Typography
                variant="span"
                sx={{ color: pink[500], textTransform: "lowercase" }}
              >
                air
              </Typography>
              cover
            </h1>
            <Typography sx={{ mb: 1 }}>
              Every booking includes free protection from Host cancellations,
              listing inaccuracies, and other issues like trouble checking in.
            </Typography>
            <Typography sx={{ textDecoration: "underline" }}>
              Learn more
            </Typography>
          </Box>
          <Box sx={{ py: 2, mt: 1, borderBottom: "1px solid #DDD" }}>
            <Typography sx={{ mb: 4 }}>
              Some info has been automatically translated.{" "}
              <Typography variant="span" sx={{ textDecoration: "underline" }}>
                Show original language
              </Typography>
            </Typography>
            <Typography variant="p" sx={{}}>
              Discover the Lov 'Nid Passion cabin, a cocoon of love perched at a
              height of 6 meters. Enjoy the charming surroundings of this
              romantic place to stay surrounded by nature.
            </Typography>
            <h3 style={{ marginBottom: 2 }}>The space</h3>
            <Typography sx={{}}>
              You will access it with a spiral staircase that will take you to
              the first part of the treehouse, consisting of a living room to
              enjoy cocooning moments. A hanging hammock awaits on{" "}
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "flex-start", mt: 3 }}>
              <h3
                style={{
                  textDecoration: "underline",
                  marginTop: 0,
                  paddingTop: 0,
                  paddingRight: 0,
                }}
              >
                Show More
              </h3>
              <AiOutlineRight size={25} />
            </Box>
          </Box>
          <Box
            sx={{
              borderBottom: "1px solid #ddd",
            }}
          >
            <h2>What This Place Offers</h2>
            <Box
              sx={{
                display: "flex",
                justifyContent: "between",
                flexWrap: "wrap",
              }}
            >
              <OfferItem
                icon={<AiOutlineCar size={30} />}
                text={"Free parking on premises"}
              />
              <OfferItem icon={<FaHotel size={30} />} text="Patio or balcony" />
              <OfferItem icon={<BiCoffee size={30} />} text="Breakfast" />
              <OfferItem
                icon={<FaRegCalendar size={30} />}
                text="Long term stays allowed"
              />
              <OfferItem
                icon={<BiAlarmOff size={30} />}
                text="Carbon monoxide alarm"
                strikeThrough={true}
              />
            </Box>
            <Button
              sx={{
                border: "1px solid #000",
                borderRadius: 2,
                px: 2,
                py: 1,
                mb: 4,
              }}
            >
              <Typography sx={{ fontWeight: 700 }}>
                show all 10 amenities
              </Typography>
            </Button>
          </Box>
          <Box sx={{ pb: 5, borderBottom: "1px solid #DDD" }}>
            <Box>
              <h2 style={{ marginBottom: 1 }}>5 nights in Joncherey</h2>
              <Box sx={{ display: "flex", pl: 0 }}>
                <Typography sx={{ pl: 0, mt: 0 }}>
                  Jun 5, 2023 - Jun 10, 2023
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={4} sx={{}}>
          <CostCard />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DetailSection;

const DetailItem = ({ icon, title, subtitle }) => {
  return (
    <Box
      sx={{
        mt: 4,
        display: "flex",
        alignContent: "center",
        justifyContent: "flex-start",
      }}
    >
      {icon}
      <Box sx={{ ml: 2 }}>
        <h4 style={{ marginTop: 0, marginBottom: 1 }}>{title}</h4>
        <Typography sx={{ pl: 0 }}>{subtitle}</Typography>
      </Box>
    </Box>
  );
};

const OfferItem = ({ icon, text, strikeThrough }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        alignContent: "center",
        minWidth: "50%",
        mb: 2,
      }}
    >
      {icon}
      <Typography
        variant={"span"}
        sx={{
          ml: 1,
          textDecoration: `${strikeThrough ? "line-through" : undefined}`,
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};
