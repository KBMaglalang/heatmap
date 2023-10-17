import React from "react";

// components
import Header from "../features/Header";
import Footer from "../features/Footer";

type Props = {
  children: React.ReactNode;
};

function UserLayout({ children }: Props) {
  return (
    <div className="flex flex-col h-screen max-w-screen">
      <Header />
      <div className="flex-grow">{children}</div>
      <Footer />
    </div>
  );
}

export default UserLayout;
