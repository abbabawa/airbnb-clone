import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { Box, Button, MobileStepper, Typography } from "@mui/material";
import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import SwipeableViews from "react-swipeable-views";
import {
  carouselDot,
  carouselImage,
  dFlex,
  fixedBottom,
  fixedIcon,
  flexBetween,
} from "themes/commonStyles";

import './CarouselCard.css'

const CarouselCard = ({ location }) => {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = location.locationImages.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  return (
    <Box className="carouselCard" sx={{ flexGrow: 1, position: "relative", cursor: 'pointer' }}>
      <Box sx={fixedIcon}>
        <FaRegHeart size={24} color={"#FFF"} />
      </Box>
      {location.locationImages.length && (
        <Link to="/room">
        <SwipeableViews
          axis={"x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {location.locationImages.map((step, index) => {
            return (
              <div key={step.id}>
                <Box
                  component={"img"}
                  sx={carouselImage}
                  src={step.url}
                  alt={step.id}
                ></Box>
              </div>
            );
          })}
        </SwipeableViews>
        </Link>
      )}
      <Box sx={fixedBottom}>
        <MobileStepper
          sx={{ backgroundColor: "transparent" }}
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              sx={carouselDot}
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              <KeyboardArrowRight />
            </Button>
          }
          backButton={
            <Button
              size="small"
              sx={carouselDot}
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              <KeyboardArrowLeft />
            </Button>
          }
        />
      </Box>
      <Box sx={flexBetween}>
        <Box sx={{mt: 2, }}>
            <Typography component={"h3"}>{location.location}</Typography>
            <Typography component={"h4"}>{location.days}</Typography>
            <Typography component={"h5"}>{location.price}</Typography>
        </Box>
        <Box sx={{mt: 2}}>
            <Box sx={dFlex}>
                {
                    location.isNew ? (
                        <>
                            <Typography component={"h5"}>New</Typography>
                            <AiFillStar size={18} />
                        </>
                    ) : (
                        <>
                            <Typography component={"h5"}>{location.rating}</Typography>
                            <AiFillStar size={18} />
                        </>
                    )
                }
            </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CarouselCard;
