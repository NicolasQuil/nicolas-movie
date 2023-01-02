import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import Header from "./header/header";

function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;