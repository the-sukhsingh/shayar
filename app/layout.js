import "./globals.css";
import Navbar from "./components/Navbar";


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
        <Navbar />
        {children}
      </body>
    </html>
  );
}
