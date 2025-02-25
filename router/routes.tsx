import { createBrowserRouter } from "react-router-dom";
import Home from "../src/screens/home/Home";
import Layout from "../src/screens/Layout";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      }
    ]
  }
]);

export default routes;