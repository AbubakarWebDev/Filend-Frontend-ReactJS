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
import VideoMeeting from "../pages/VideoMeeting";
import ResetPassword from "../pages/ResetPassword";
import ForgotPassword from "../pages/ForgotPassword";

import PrivateRoutes from "../components/PrivateRoutes";
import privateRoutesLoader from "./privateRoutesLoader";
import TailwindLoader from "../components/TailwindLoader";
import BootstrapLoader from "../components/BootstrapLoader";


const router = createBrowserRouter([
  {
    path: "/",
    id: "root",
    element: <App />,
    loader: privateRoutesLoader,
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
            element: <VideoMeeting />,
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