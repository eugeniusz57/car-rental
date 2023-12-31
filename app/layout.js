import { SearchContextProvider } from "@/context/search";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Car Rental",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <SearchContextProvider value>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </SearchContextProvider>
  );
}
