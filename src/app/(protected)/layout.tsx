import NavigationBar from "@/components/shared/NavigationBar";
import React from "react";

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
