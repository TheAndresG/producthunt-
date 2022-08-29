import React from "react";
import Header from "./Header";

const Layout = ({ childrend }) => {
  return (
    <>
      <Header />
      <main>{childrend}</main>;
    </>
  );
};

export default Layout;
