import React from "react";

// components
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type Props = {
  children: React.ReactNode;
};

function HomepageLayout({ children }: Props) {
  return (
    <div className="flex flex-col h-screen max-w-screen">
      <Header />
      <div className="flex-grow">{children}</div>
      <Footer />
    </div>
  );
}

export default HomepageLayout;
