import type { Metadata } from "next";
// Assuming you are using Geist fonts based on your previous file content
import { Geist, Geist_Mono } from "next/font/google"; 
import "./globals.css";

// Import components from the 'components' directory
import Header from "../components/Header";
import Footer from "../components/Footer"; 

// Initialize fonts (using the Geist structure found in your original file)
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // Update metadata for the Tyvek Lanka site
  title: "Tyvek Lanka - Secure Your Event, Color Your World",
  description: "Official Tyvek Wristbands in Sri Lanka. Durable, Secure, Custom.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/*
          The application wrapper ensures the header sticks to the top, 
          the main content fills the space, and the footer sits at the bottom.
        */}
        <div className="min-h-screen flex flex-col bg-[#1A1A2E]">
            {/* The Header component contains the Navigation Bar and CTA */}
            <Header /> 
            
            {/* Main content area */}
            <main className="flex-grow">
                {children} {/* This renders the content of the current page (e.g., app/page.tsx) */}
            </main>
            
            {/* Footer component */}
            <Footer />
        </div>
      </body>
    </html>
  );
}
