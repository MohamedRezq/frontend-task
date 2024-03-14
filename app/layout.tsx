"use client";

import React from "react";
import StyledComponentsRegistry from "./AntdRegistry";
import "./globals.css";
import Header from "./components/layout/Header";
import { createContext } from "react";
import CartContext from "./context/cart";
import Footer from "./components/layout/Footer";

interface RootLayoutProps {
  children: React.ReactNode;
}

function RootLayout({ children }: RootLayoutProps) {
  const initCartValue = 3;

  return (
    <html lang="en">
      <body>
        <CartContext.Provider value={initCartValue}>
          <Header />
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
          <Footer />
        </CartContext.Provider>
      </body>
    </html>
  );
}

export default RootLayout;
