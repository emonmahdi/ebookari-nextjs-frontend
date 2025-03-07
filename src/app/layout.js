import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Slider from "@/components/Slider";
import Books from "@/components/Books/Books";

export const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto_mono.className}`}>
        <Navbar />
        <Slider />
        <Books />
        {children}
      </body>
    </html>
  );
}
