import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import {CartProvider, UserProvider} from "../context/provider";
import NextTopLoader from "nextjs-toploader";

const poppins = localFont({
  src: "../fonts/Poppins/Poppins-Medium.ttf",
  variable: "--mypoppins",
});
const poppinsLight = localFont({
  src: "../fonts/Poppins/Poppins-Light.ttf",
  variable: "--poppins-light",
});
const poppinsThin = localFont({
  src: "../fonts/Poppins/Poppins-Thin.ttf",
  variable: "--poppins-thin",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins} ${poppinsLight} ${poppinsThin} overflow-x-hidden`}
      >
        <UserProvider>
        <CartProvider>
          <NextTopLoader showSpinner={false} color="#b88e30"></NextTopLoader>
        {children}
        </CartProvider>
        </UserProvider>
      </body>
    </html>
  );
}
