import React from "react";
import Chat from "./content/chat";
import Sidebar from "./sidebar/sidebar";

const MainLayout = () => {
  return (
    <>
      <Sidebar />
      <Chat />
    </>
  );
};

export default MainLayout;
