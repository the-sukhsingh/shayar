import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { PoemProvider } from "./context/PoemContext";
import { Analytics } from "@vercel/analytics/react"

export const metadata = {
  title: "Shayar Bajwa",
  description: "Shayar Bajwa's personal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >

        <PoemProvider>
        <Navbar />
        <main className="min-h-screen">

        {children}
        
        </main>
        <Footer />
        <Analytics/>
        </PoemProvider>
      </body>
    </html>
  );
}
