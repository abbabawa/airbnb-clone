//https://www.youtube.com/watch?v=1k3HxJRBVgI
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "pages/LandingPage";
import RoomPage from "pages/RoomPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <div>An error occurred</div>,
    children: []
  },
  {
    path: "/room",
    element: <RoomPage />,
    errorElement: <div>An error occurred</div>,
    children: []
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
