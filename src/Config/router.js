import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "../Views/Dashboard";
import Login from '../Views/Login';
import CardDetails from "../Views/CardDetails";
import Register from '../Views/Register';
import PostAd from '../Views/PostAd'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/CardDetails/:id",
    element: <CardDetails />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/Register",
    element: <Register />,
  },
  {
    path: "/PostAd",
    element: <PostAd />,
  }
]);
function Router() {
  return <RouterProvider router={router} />;
}
export default Router;
