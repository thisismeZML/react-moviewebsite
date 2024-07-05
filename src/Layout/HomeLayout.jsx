import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Footer";
import Navbar from "../components/Navbar";
import SideNav from "../components/SideNav";

const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <SideNav />
    </>
  );
};

export default HomeLayout;
