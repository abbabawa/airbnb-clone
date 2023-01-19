import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Material UI</div>,
    errorElement: <div>An error occurred</div>,
    children: []
  },
]);

function App() {
  return  <RouterProvider router={router} />
}

export default App;
