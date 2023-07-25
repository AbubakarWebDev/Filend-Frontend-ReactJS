import { createBrowserRouter } from "react-router-dom";

import App from "../App";

import Home from "../pages/Home";
import Room from "../pages/Room";
import Login from "../pages/Login";
import About from "../pages/About";
import Signup from "../pages/Signup";
import Profile from "../pages/Profile";
import ChatApp from "../pages/ChatApp";
import Error404 from "../pages/Error404";
import VideoHome from "../pages/VideoHome";
import ResetPassword from "../pages/ResetPassword";
import ForgotPassword from "../pages/ForgotPassword";

import PrivateRoutes from "../components/PrivateRoutes";
import privateRoutesLoader from "./privateRoutesLoader";
import TailwindLoader from "../components/TailwindLoader";
import BootstrapLoader from "../components/BootstrapLoader";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: <TailwindLoader />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "/video-meeting",
            element: <VideoHome />,
          },
          {
            path: "/video-meeting/room/:roomId",
            element: <Room />,
          },
          {
            path: "/about-us",
            element: <About />,
          },
        ],
      },
      {
        element: <BootstrapLoader />,
        children: [
          {
            loader: privateRoutesLoader,
            element: <PrivateRoutes protect={false} />,
            children: [
              {
                path: "/login",
                element: <Login />,
              },
              {
                path: "/signup",
                element: <Signup />,
              },
              {
                path: "/forgot-password",
                element: <ForgotPassword />,
              },
            ],
          },
          {
            loader: privateRoutesLoader,
            element: <PrivateRoutes protect={true} />,
            children: [
              {
                path: "/chat",
                element: <ChatApp />,
              },
              {
                path: "/profile",
                element: <Profile />,
              },
            ],
          },
          {
            path: "/reset-password/:userId/:token",
            element: <ResetPassword />,
          },
          {
            path: "*",
            element: <Error404 />,
          },
        ],
      },
    ],
  },
]);

export default router;