import React from "react";
import { Box, Divider, Paper, Stack, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { pink } from "@mui/material/colors";
import { IoSearchCircleSharp } from "react-icons/io5";
const choices = [
  { id: 1, text: "Anywhere" },
  { id: 2, text: "Any Week" },
  { id: 3, text: "Add guest", withIcon: true },
];

const LocationSearch = () => {
  return (
    <Paper sx={{ borderRadius: 20, ml: 15 }} elevation={3}>
      <Stack
        sx={{ borderRadius: 20, pl: 2 }}
        divider={<Divider orientation="vertical" flexItem />}
      >
        {choices.map((choice) => {
          return (
            <Button key={choice.id}>
              <Typography
                sx={{
                  color: (theme) => theme.palette.text.primary,
                  fontWeight: 'bold',
                }}
              >
                {choice.text}
              </Typography>
              {choice.withIcon && (
                <Box
                  sx={{
                    ml: 1,
                    mt: 1,
                    mr: 1,
                  }}
                >
                  <IoSearchCircleSharp color={pink[500]} size={32} />
                </Box>
              )}
            </Button>
          );
        })}
      </Stack>
    </Paper>
  );
};

export default LocationSearch;
