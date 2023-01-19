//https://www.youtube.com/watch?v=1k3HxJRBVgI
import { Box, CssBaseline } from "@mui/material";
import Header from "./components/Header";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import OptionsTab from "components/OptionsTab";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <div>Material UI</div>,
//     errorElement: <div>An error occurred</div>,
//     children: []
//   },
// ]);

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
        <Box>
          <Header />
          <OptionsTab />
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default App;
