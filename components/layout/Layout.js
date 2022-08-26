import React from "react";
import Header from "./Header";

const Layout = () => {
  return (
    <>
      <Header />
      <main>{props.childrend}</main>;
    </>
  );
};

export default Layout;
