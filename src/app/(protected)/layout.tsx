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
      <main className="min-h-screen">
        <div className="max-w-[1200px] mx-auto">{children}</div>
      </main>
    </>
  );
};

export default ProtectedLayout;
