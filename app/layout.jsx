import { Poppins, Karla, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { AppFloreraContentProvider } from "./context/AppFloreraContent";

// Konfigurasi Poppins
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

// Konfigurasi Karla
const karla = Karla({
  subsets: ["latin"],
  weight: [ "400" , "700"],
  variable: "--font-karla",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-plus-jakarta-sans',
});

export const metadata = {
  title: "Urban Farming | Florera",
  description: "Startup urban farming",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.className} antialiased`}>
        <AppFloreraContentProvider>{children}</AppFloreraContentProvider>
      </body>
    </html>
  );
}
