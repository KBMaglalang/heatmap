import React from "react";

// components
import Header from "../Header";
import Footer from "../Footer";

type Props = {
  children: React.ReactNode;
};

function UserLayout({ children }: Props) {
  return (
    <div className="flex flex-col h-screen max-w-screen">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default UserLayout;
