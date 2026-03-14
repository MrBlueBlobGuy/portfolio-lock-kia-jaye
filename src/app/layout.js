import { Geist, Geist_Mono, Changa_One } from "next/font/google";
import "@/style/globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const changaOne = Changa_One({
  variable: "--font-changa-one",
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Debojyoti Ganguly",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${changaOne.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* {<MouseInvertMask />} */}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
