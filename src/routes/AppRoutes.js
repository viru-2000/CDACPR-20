import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ForgotPassword from "../pages/ForgotPassword";
import Services from "../pages/Services";
import ServiceDetails from "../pages/ServiceDetails";
import Dashboard from "../pages/Dashboard";
import AdminPanel from "../pages/AdminPanel";
import NotFound from "../pages/NotFound";
import ProtectedRoute from "../components/ProtectedRoute";
import BecomeTasker from "../pages/BecomeTasker";
import Titleservice from "../pages/title";


const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/become-tasker",
    element: <BecomeTasker />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/title-service/:id",
    element: <Titleservice/>,
  },
  {
    path: "/service-details/:categoryName/:taskId",
    element: <ServiceDetails />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
    ),
  },
  {
    path: "/admin",
    element: (
     
        <AdminPanel />
      
    ),
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={appRoutes} />;
};

export default AppRoutes;
