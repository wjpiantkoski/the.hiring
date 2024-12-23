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
        <div className="max-w-[960px] mx-auto pt-24">{children}</div>
      </main>
    </>
  );
};

export default ProtectedLayout;
