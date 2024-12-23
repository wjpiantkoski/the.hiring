import React from "react";
import NavigationBar from "../_components/shared/NavigationBar";

const ProtectedLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <NavigationBar />
      <main>{children}</main>
    </>
  );
};

export default ProtectedLayout;
