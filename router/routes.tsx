import { createBrowserRouter } from "react-router-dom";
import Home from "../src/screens/home/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    element : <Home />
  }
]);

export default routes;