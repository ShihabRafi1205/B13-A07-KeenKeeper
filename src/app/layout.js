import { Toaster } from "react-hot-toast";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/navbar/Navbar";
import Footer from "@/components/shared/footer/Footer";
import { TimelineProvider } from "@/context/TimelineContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "KeenKeeper",
  description: "Keep your friendships alive",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <TimelineProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <Toaster

            toastOptions={{
              duration: 3000,
              style: {
                background: "#1e293b",
                color: "#fff",
                fontSize: "14px",
              },
            }}
          />
        </TimelineProvider>
      </body>
    </html>
  );
}
